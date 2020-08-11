<script>
/*eslint-disable*/
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    options() {
      console.log('option change')
      this.$data._chart.destroy()
      this.renderChart(this.chartData, this.options);
    }
  }
}
</script>