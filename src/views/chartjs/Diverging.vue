<template>
    <div class="mt">
        <v-row>
        <v-col cols="7">
            Dataset 1
        </v-col>
         <v-col cols="5">
            Dataset 2
        </v-col>
        </v-row>
        <chartjs-component-horizontal-bar-chart
            :style="{ height: '435px' }"
            :chartData="chartData"
            :options="options">
        </chartjs-component-horizontal-bar-chart>
    </div>
</template>

<script>
/*eslint-disable*/
import ChartjsComponentHorizontalBarChart from './ChartjsComponentBarChart.vue'

export default {
  components: {
    ChartjsComponentHorizontalBarChart
  },
  data () {
    return {
      mydata: [ {name:'2010',in:10,out:90},
            {name:'2011',in:0,out:0},
            {name:'2012',in:20,out:80},
            {name:'2013',in:10,out:90},{name:'2014',in:80,out:20},
            {name:'2015',in:60,out:40},
            {name:'2016',in:97,out:3}, {name:'2017',in:10,out:90},{name:'2018',in:35,out:65}, 
            {name:'2019',in:50,out:50}, {name:'2020',in:50,out:50}
      ],
      year:[],
      in:[],
      out:[],
      chartData: {
        labels: [],
        datasets: []
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
         mode: 'nearest', //<- set this
         callbacks: {
            label: function(tooltipItem, data) {
               return data.datasets[tooltipItem.datasetIndex].label + ': ' + (Math.abs(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])).toLocaleString()+'%';
            }
          },
        },
        scales: {
          xAxes: [{
              stacked: true,
              ticks: {
                  min:-100,
                  max: 100,
                  // To show tick in positive value
                  callback: function(value, index, values) {
                        return Math.abs(value);
                    }
              }
          }],
          yAxes: [{
              stacked: true,
          }],
        },
        legend: { display: false }, 
      }
    }
  },
  methods: {
  },
  created() {
      this.mydata.map((d, i) => { 
        this.year.push(d.name)
        this.in.push(d.in*-1)
        this.out.push(d.out)
      });
      this.chartData.labels = this.year;
        this.chartData.datasets = [{
            label: 'Dataset 1',
            data: this.in,
            backgroundColor: "rgba(63,103,126,1)",
            hoverBackgroundColor: "rgba(50,90,100,1)"
        },{
            label: 'Dataset 2',
            data: this.out,
            backgroundColor: "rgba(163,103,126,1)",
            hoverBackgroundColor: "rgba(140,85,100,1)"
          }]
  },
  mounted() {
  },
  watch: {
  }
}
</script>
