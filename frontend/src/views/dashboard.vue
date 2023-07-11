<template>
  <div id="barCharts" style="margin: auto;width: 30%;padding: 10px;">
      <PieChart/>
      <!-- <question6/> -->
      <LineChart/>
      <BarCharts/>
      
  </div>
</template>

<script>

  import BarCharts from "@/components/barcharts/barCharts.vue";
  import LineChart from "@/components/barcharts/lineChart.vue";
  import PieChart from "@/components/barcharts/pieChart.vue";
  import question6 from "@/components/project/question6.vue";
  // import 2-lineChart component from components/project/2-lineChart.vue;



  export default {
    name: 'HelloWorld',
    components:{BarCharts, LineChart, PieChart, question6}
  }

</script>


