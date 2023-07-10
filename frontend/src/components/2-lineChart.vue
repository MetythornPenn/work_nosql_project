<template>
  <div>
    <apexchart :options="chartOptions" :series="series" type="line" height="400" />
  </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts';
  import axios from 'axios';

  export default {
    components: {
      apexchart: VueApexCharts,
    },
    
    data() {
      return {

        chartOptions: {
          chart: {
            id: 'line-chart',
          },
          xaxis: {
            categories: [],
          },
        },
        series: [],
      };
    },
    mounted() {
      this.fetchChartData();
    },
    methods: {
      fetchChartData() {
        axios.get('http://localhost:3000/api/v1/sales/total-by-month')
          .then(response => {
            const data = response.data;
            const categories = data.map(item => item.date);
            const seriesData = data.map(item => item.value);

            this.chartOptions.xaxis.categories = categories;
            this.series = [{
              name: 'Value',
              data: seriesData,
            }];
          })
          .catch(error => {
            console.error('Error fetching chart data:', error);
          });
      },
    },
  };
</script>
