<template>
    <div>
        <br>
        <h2>6. Which Customers Contributed the Most to Total Sales?</h2>
        <table class="customer-table">
            <thead>
                <tr>
                <th>Customer ID</th>
                <th>Total Sales</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="customer in customers" :key="customer.CustomerID">
                <td>{{ customer.CustomerID }}</td>
                <td>{{ customer.TotalSales }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<!-- ----------------------------------------------------------------- -->
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
            fetch('http://localhost:3000/api/v1/sales/most-contributed-customer')
                .then(response => response.json())
                .then(data => {
                    this.customers = data.most_contributed_customer;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        }
    };
</script>
<!------------------------------------------------------------------------ -->
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






