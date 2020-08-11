<template>
<div>
<v-row>
   <v-col cols="6">
      <Map></Map>
   </v-col>
   <v-col cols="6">
      <Bar></Bar>
   </v-col>
   <v-col cols="6">
      <Diverging></Diverging>
   </v-col>
   <v-col cols="6">
      <Linechart></Linechart>
   </v-col>
</v-row>
</div>
<!-- </v-row> -->
</template>

<script>
/*eslint-disable */
import Map from './Map.vue';
import Bar from './chartjs/Bar.vue';
import Diverging from './chartjs/Diverging.vue';
import Linechart from './chartjs/Line.vue';
export default {
  name: 'Base',
  components: {
      Map,
      Bar,
      Diverging,
      Linechart
  },
  data() {
    return {
      loading: false,
    }
  },
  watch: {
  },
  methods: {
  }
};
</script>
<style>
</style>
