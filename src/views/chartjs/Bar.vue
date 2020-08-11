<template>
    <div>
      <div class="mt">
        <chartjs-component-horizontal-bar-chart
            :style="{ height: '540px' }"
            :chartData="chartData"
            :options="options">
        </chartjs-component-horizontal-bar-chart>
      </div>
    </div>
</template>

<script>
/*eslint-disable*/
import ChartjsComponentHorizontalBarChart from './ChartjsComponentBarChart.vue'

export default {
  components: {
    ChartjsComponentHorizontalBarChart,
  },
  data () {
    return {
      province: [],
      total: [],
      mydata: [
        {name:'Monday',value: 200000},{name:'Tuesday',value: 99000,},
        {name:'Wednesday',value: 55000}, {name:'Thursday',value: 55000,},
        {name:'Friday',value: 55000},
        {name:'Saturday',value: 55000}, 
        {name:'Sunday',value: 20000},
      ],
      chartData: {
        labels: [],
        datasets: []
      },
      options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              type: 'logarithmic',
              ticks: {
                  min: 0,
                  max: this.maxbar,
                  autoSkip: true,
                  autoSkipPadding: 20,
                  minRotation: 30,
                  callback: function (value, index, values) {
                    return value;
                  }
              },
              scaleLabel: {
                  display: true,
                  labelString: 'Data'
              }
            }]
          },
        legend: { display: false },
        tooltips: {
          callbacks: {
            title: function(tooltipItem, chartData) {
              return chartData['labels'][tooltipItem[0]['index']];
            },
            label: function(tooltipItem, chartData) {
              return chartData['datasets'][0]['data'][tooltipItem['index']].toLocaleString()+' (Data)';
            },
          }
        }
      }
    }
  },
  methods: {
  },
  computed: {
  },
  created() {
      this.mydata.map((d, i) => { 
        this.province.push(d.name)
        this.total.push(d.value)
      });
      this.chartData.labels = this.province;
      this.chartData.datasets = [{
        backgroundColor: '#E7730C',
        data: this.total,
      }]
  },
  mounted() {
      
  },
  watch: {
  }
}
</script>
<style>
.mt {
    margin-top: 30px;
}
</style>
