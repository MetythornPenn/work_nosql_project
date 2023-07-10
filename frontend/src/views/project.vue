<template>
    <div id="barCharts" style="margin: auto;width: 30%;padding: 10px;">
        <PieChart/>
        <LineChart/>

        <!-- <BarCharts/> -->
        <!-- <BrushChart/> -->
    </div>
</template>

<script>
    // import BarCharts from "@/components/barcharts/barCharts.vue";
    import LineChart from "@/components/barcharts/lineChart.vue";
    // // import PieChart from "@/components/barcharts/pieChart.vue";
    import PieChart from "@/components/project/1-pieChart.vue";

    



    export default {
        name: 'HelloWorld',
        // components:{BarCharts, LineChart, PieChart}
        components: {PieChart, LineChart}}
</script>









