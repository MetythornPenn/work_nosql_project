<template>
    <br>
    <h2>2. What are the total sales by each month?</h2>
    <div>
        <table class="sales-table">
        <thead>
            <tr>
            <th>Date</th>
            <th>Total Sale</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="sale in sales" :key="sale.Date">
            <td>{{ sale.Date }}</td>
            <td>{{ sale.TotalSale }}</td>
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
        sales: [] // To store the fetched sales data
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
        // Fetch data from the API endpoint
        fetch('http://localhost:3000/api/v1/sales/total-by-month')
            .then(response => response.json())
            .then(data => {
            this.sales = data.total_of_sales;
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    }
    };
</script>

<style>
    .sales-table {
    width: 100%;
    border-collapse: collapse;
    }

    .sales-table th,
    .sales-table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    }

    .sales-table th {
    background-color: #f2f2f2;
    }

    .sales-table tbody tr:hover {
    background-color: #f5f5f5;
    }
</style>
