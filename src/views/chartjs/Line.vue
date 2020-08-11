<template>
    <div class="mt2">
        <chartjs-component-line-chart
        :style="{ height: '460px' }"
        :chartData="chartData"
        :options="options">
        </chartjs-component-line-chart>
    </div>
</template>

<script>
/* eslint-disable */
import ChartjsComponentLineChart from './ChartjsComponentLineChart.vue'

export default {
  components: {
    ChartjsComponentLineChart
  },
  data () {
    return {
      name: [],
      value: [],
      mydata: [
            {
                "apr": 79.77145536688478,
                "aug": 85.14562901466337,
                "dec": 79.77145536688478,
                "feb": 79.77145536688478,
                "product_name": "Dataset",
                "jan": 79.77145536688478,
                "jul": 85.14562901466337,
                "jun": 84.5136755256716,
                "mar": 79.77145536688478,
                "may": 80.27941021531781,
                "nov": 79.77145536688478,
                "oct": 80.50632935901065,
                "sep": 84.74059466936443
            },
      ],
      color: '#CB135E',
      chartData: {
        labels: [],
        datasets: []
      }, 
      options: {
        maintainAspectRatio: false,
        tooltips: {
          intersect: false,
          callbacks: {
            title: function(tooltipItem, chartData) {
              return chartData['labels'][tooltipItem[0]['index']];
            },
            label: function(tooltipItem, chartData) {
              return chartData['datasets'][0]['data'][tooltipItem['index']].toLocaleString()+' ';
            },
          }
        },
      }
    }
  },
  methods: {
    async parse() {
      this.name = this.mydata[0].product_name;
      this.value.push(parseFloat((this.mydata[0].jan).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].feb).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].mar).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].apr).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].may).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].jun).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].jul).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].aug).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].sep).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].oct).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].nov).toFixed(2)))
      this.value.push(parseFloat((this.mydata[0].dec).toFixed(2)))
    },
  },
  created() {
      this.parse()
      this.chartData = {
      labels: ['jan','feb','mar','apr','may','jun','jul','aug',
                'sep','oct','nov','dec'],
      datasets: [{
        data: this.value,
        label: this.name,
        borderColor: '#CB135E',
        backgroundColor: 'rgba(208, 154, 177, 0.4)',
        fill: true
      },]
      }
  },
  mounted() {
  },
  watch: {
  }
}
</script>
<style>
.mt2 {
    margin-top: 50px;
}
</style>
