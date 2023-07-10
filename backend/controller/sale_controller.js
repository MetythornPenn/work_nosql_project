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
    res.send('total-by-month');
}
)

// --------- 3. How many cutomers purchased products each month ? How many new customers each month ? ------------
router.get('/customer-puchaseed-by-month', (req, res) => {
    res.send('customer-puchaseed-by-month');
})

router.get('/new-customer-by-month', (req, res) => {
    res.send('new-customer-by-month');
})

// ------------- 4. Which is the Best Selling Product in Each Country? ---------------------
router.get('/best-selling-by-country', (req, res) => {
    res.send('best-selling-by-country');
})


// ----------------5. Which are the Most Successful Products Overall? -----------
router.get('/most-successful-product', (req, res) => {
    res.send('most-successful-product');
})

// --------------- 6. Which Customers Contributed the Most to Total Sales? --------------
router.get('/most-contributed-customer', (req, res) => {
    res.send('most-contributed-customer');

})


module.exports = router;



