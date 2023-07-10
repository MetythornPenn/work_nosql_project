const express = require('express');
const router = express.Router();

const Sale = require('../model/sale');

// Count Sale
router.get('/count', (req, res) => {
    Sale.count({}).then((response) => {
        console.log( "Number of Sales:", response );
        res.status(200).json({number_of_sales: response});
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

// ---------------- 1. What are the total sales by each country? -----------------

router.get('/total-by-country', (req, res) => {

    Sale.aggregate([
        {$group:
            {
                _id: "$Country",
                TotalSale: { $sum: "$Quantity" }
            },
        },

        {
            $sort : { TotalSale: -1 }
        },
        {
            $project: {
                "_id" : 0,
                "Country" : "$_id",
                "TotalSale" : "$TotalSale"
            }
        }

    ]).then((response) => {
        console.log( "Total Sales:", response );
        res.status(200).json({total_of_sales: response});

    }).catch((error) => {
        res.sendStatus(500).send(error);
    });

});

// ---------- 2. total sale by each month -------------------
router.get('/total-by-month', (req, res) => {
    Sale.aggregate([
        {$group: 
            {
                _id : {
                    $dateToString:{ format: "%Y-%m", date: "$InvoiceDate" }
                },
                TotalSales: { $sum: { $multiply: ["$Quantity", "$UnitPrice"] } }
            }
        },

        {
            $sort: { _id: 1}
        },

        {
            $project: {
                "_id": 0,
                "Date" : "$_id",
                "TotalSale": "$TotalSales"
            }
        }

    ]).then((response) => {
        console.log("Total Sales by Month", response);
        res.status(200).json({total_of_sales: response});

    }).catch((error) => {
        res.sendStatus(500).send(error);
    })


});

// --------- 3. How many cutomers purchased products each month ? How many new customers each month ? ------------
// How many cutomers purchased products each month ?
router.get('/customer-puchaseed-by-month', (req, res) => {
    Sale.aggregate([
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%Y-%m",
                        date: "$InvoiceDate"
                    }
                },
                customers: { $addToSet: "$CustomerID" },
                count: { $sum: 1 }
            }
        },

        {
            $project: {
                _id: 0,
                Month: "$_id",
                CustomerCount: { $size: "$customers" }
            }
        },

        {
            $sort: { Month: 1 }
        }

    ]).then((response) => {
        console.log("Total Customer", response);
        res.status(200).json({total_customers : response});

    }).catch((error) => {
        res.sendStatus(500).send(error);
    })

})

// ----- Still Error ------ 
// How many new customers each month ?

router.get('/new-customer-by-month', (req, res) => {
    Sale.aggregate([
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%Y-%m",
                        date: "$InvoiceDate"
                    }
                },
                newCustomers: { $addToSet: "$CustomerID" },
                firstInvoiceDate: { $min: "$InvoiceDate" }
            }
        },

        {
        $match: {
            newCustomers: {
            $ne: []
            }
        }
        },
        {
        $project: {
            _id: 0,
            Month: "$_id",
            NewCustomerCount: { $size: "$newCustomers" }
        }
        },
        {
        $sort: { Month: 1 }
        }

    ]).then((response) => {
        console.log("New Customers:", response);
        res.status(200).json({ new_customers: response });
    })

    .catch((error) => {
        res.status(500).send(error);
    });

});


// ------------- 4. Which is the Best Selling Product in Each Country? ---------------------
router.get('/best-selling-by-country', (req, res) => {
    Sale.aggregate([
        {
            $group: {
            _id: {
                Country: "$Country",
                StockCode: "$StockCode"
            },
            totalQuantity: { $sum: "$Quantity" }
            }
        },

        {
            $sort: {
            "_id.Country": 1,
            totalQuantity: -1
            }
        },

        {
            $group: {
            _id: "$_id.Country",
            bestSellingProduct: { $first: "$_id.StockCode" },
            totalQuantity: { $first: "$totalQuantity" }
            }
        },

        {
            $project: {
            _id: 0,
            Country: "$_id",
            BestSellingProduct: "$bestSellingProduct",
            TotalQuantity: "$totalQuantity"
            }
        }
    ]).then((response) => {
        console.log("Best Selling Product by Country", response);
        res.status(200).json({best_selling_product_by_country: response});

    }).catch((error) => {
        res.sendStatus(500).send(error);
    })
    
});


// ----------------5. Which are the Most Successful Products Overall? -----------
router.get('/most-successful-product', (req, res) => {
    Sale.aggregate([
        // group by StockCode, Quantity
        {
            $group: {
                _id: "$StockCode",
                totalQuantity: { $sum: "$Quantity" }
            }
        },
        // sort by totalQuantity
        {
            $sort: {
                totalQuantity: -1
            }
        },
        // Get top 5 products
        {
            $limit: 10
        },
        // select columns : StockCode, TotalQuantity
        {
            $project: {
                _id: 0,
                StockCode: "$_id",
                TotalQuantity: "$totalQuantity"
            }
        }

    ]).then((response) => {
        console.log("Best Selling Product", response);
        res.status(200).json({best_selling_product: response});

    }).catch((error) => {
        res.sendStatus(500).send(error);
    })

});

// --------------- 6. Which Customers Contributed the Most to Total Sales? --------------

router.get('/most-contributed-customer', (req, res) => {
    Sale.aggregate([
        {
            $group: {
                _id: "$CustomerID",
                totalSales: { $sum: { $multiply: ["$Quantity", "$UnitPrice"] } }
            }
        },

        {
            $sort: {
                totalSales: -1
            }
        },

        {
            $skip: 1
        },
        {
            $limit: 10
        },

        {
            $project: {
                _id: 0,
                CustomerID: "$_id",
                TotalSales: "$totalSales"
            }
        }

    ]).then((response) => {
        console.log( " Customers Contributed Customer:", response );
        res.status(200).json({most_contributed_customer: response});

    }).catch((error) => {
        res.sendStatus(500).send(error);
    });

});


module.exports = router;



