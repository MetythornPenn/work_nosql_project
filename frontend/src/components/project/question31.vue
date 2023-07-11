<template>
    <div>
        <br>
        <h2>3.1. How Many Customers Purchased Products Each Month?</h2>
        <table class="customer-table">
        <thead>
            <tr>
            <th>Month</th>
            <th>Customer Count</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in customers" :key="customer.Month">
            <td>{{ customer.Month }}</td>
            <td>{{ customer.CustomerCount }}</td>
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
        customers: [] // To store the fetched customer data
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
        // Fetch data from the API endpoint
        fetch('http://localhost:3000/api/v1/sales/customer-puchaseed-by-month')
            .then(response => response.json())
            .then(data => {
            this.customers = data.total_customers;
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    }
    };
</script>

<style>
    .customer-table {
    width: 100%;
    border-collapse: collapse;
    }

    .customer-table th,
    .customer-table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    }

    .customer-table th {
    background-color: #f2f2f2;
    }

    .customer-table tbody tr:hover {
    background-color: #f5f5f5;
    }
</style>
