
<!-- HTML Part -->
<template>
    <div id="barCharts" style="margin: auto;width: 30%;padding: 10px;">
        <!-- <PieChart/> -->
        <question1/>
        <question2/>
        <question31/>
        <question32/>
        <question4/>
        <question5/>
        <question6/>
        
        <!-- <LineChart/> -->
        <!-- <BarCharts/> -->
        
    </div>
</template>


<!-- Javascript Part -->
<script>

    import BarCharts from "@/components/barcharts/barCharts.vue";
    import LineChart from "@/components/barcharts/lineChart.vue";
    import PieChart from "@/components/barcharts/pieChart.vue";
    import question6 from "@/components/project/question6.vue";
    import question5 from "@/components/project/question5.vue";
    import question4 from "@/components/project/question4.vue";
    import question32 from "@/components/project/question32.vue";
    import question31 from "@/components/project/question31.vue";
    import question2 from "@/components/project/question2.vue";
    import question1 from "@/components/project/question1.vue";

    export default {
        name: 'HelloWorld',
        components:{BarCharts, LineChart, PieChart,question1, question2, question31,question32, question4, question5, question6}
    }

</script>
