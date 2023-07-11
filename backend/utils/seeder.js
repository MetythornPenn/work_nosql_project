const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const mongoose = require('mongoose');
const Sale = require('../model/sale'); // Assuming the model is defined in a separate file


const data_path = path.resolve(__dirname, '../data/data.csv');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});

db.once('open', async () => {
    console.log('Connected to MongoDB');

    const jsonData = [];

    // Read data from CSV file and convert to JSON
    fs.createReadStream(data_path)
        .pipe(csv())
        .on('data', (row) => {
        const saleData = {
            InvoiceNo: String(row.InvoiceNo),
            StockCode: String(row.StockCode),
            Description: String(row.Description),
            Quantity: parseFloat(row.Quantity),
            InvoiceDate: new Date(row['Invoice Date']),
            UnitPrice: parseFloat(row['Unit Price']),
            CustomerID: String(row.CustomerID),
            Country: String(row.Country)
        };
        jsonData.push(saleData);
        })
        .on('end', async () => {
        console.log(jsonData);

        try {
            // Save the JSON data to MongoDB
            await Sale.insertMany(jsonData);
            console.log('Data import completed');
        } catch (error) {
            console.error('Error saving sales:', error);
        }

        process.exit(0);
    });
});