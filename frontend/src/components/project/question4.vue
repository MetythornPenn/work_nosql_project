<template>
    <div>
        <br>
        <h2>4. Which is the Best Selling Product in Each Country?</h2>
        <table class="product-table">
        <thead>
            <tr>
            <th>Country</th>
            <th>Best Selling Product</th>
            <th>Total Quantity</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="product in products" :key="product.Country">
                <td>{{ product.Country }}</td>
                <td>{{ product.BestSellingProduct }}</td>
                <td>{{ product.TotalQuantity }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
    export default {
    name: 'Question6',
    data() {
        return {
        products: [] // To store the fetched product data
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
        // Fetch data from the API endpoint
        fetch('http://localhost:3000/api/v1/sales/best-selling-by-country')
            .then(response => response.json())
            .then(data => {
            this.products = data.best_selling_product_by_country;
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    }
    };
</script>

<style>
    .product-table {
    width: 100%;
    border-collapse: collapse;
    }

    .product-table th,
    .product-table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    }

    .product-table th {
    background-color: #f2f2f2;
    }

    .product-table tbody tr:hover {
    background-color: #f5f5f5;
    }
</style>
