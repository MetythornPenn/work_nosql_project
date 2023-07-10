<template>
  <div id="barCharts" style="margin: auto;width: 30%;padding: 10px;">
      <PieChart/>
      <LineChart/>
      <BarCharts/>
      
  </div>
</template>

<script>

  import BarCharts from "@/components/barcharts/barCharts.vue";
  import LineChart from "@/components/barcharts/lineChart.vue";
  import PieChart from "@/components/barcharts/pieChart.vue";
  // import 2-lineChart component from components/project/2-lineChart.vue;



  export default {
    name: 'HelloWorld',
    components:{BarCharts, LineChart, PieChart}
  }

</script>


