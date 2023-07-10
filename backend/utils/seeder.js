const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const Sale = require('../data/data.csv'); // Assuming the model is defined in a separate file

// Connect to MongoDB
mongoose.connect('mongodb://localhost/27017/project', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});

db.once('open', () => {
    console.log('Connected to MongoDB');

    const jsonData = [];

  // Read data from CSV file and convert to JSON
    fs.createReadStream('data.csv')
        .pipe(csv({ skipLines: 1 })) // Skip the first line (header)
        .on('data', (row) => {
        const saleData = {
            InvoiceNo: String(row.InvoiceNo),
            StockCode: String(row.StockCode),
            Description: String(row.Description),
            Quantity: Number(row.Quantity),
            InvoiceDate: new Date(row.InvoiceDate),
            UnitPrice: parseFloat(row.UnitPrice),
            CustomerID: String(row.CustomerID),
            Country: String(row.Country)
        };
        jsonData.push(saleData);
        })
        .on('end', () => {
            console.log(jsonData);

        // // Save the JSON data to MongoDB
        // Sale.insertMany(jsonData, (error) => {

        //     if (error) {
        //     console.error('Error saving sales:', error);

        //     } else {
        //     console.log('Data import completed');
        //     }

        //     process.exit(0);
        // });
        });
});
