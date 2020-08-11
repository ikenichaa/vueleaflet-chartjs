<template>
<div>
    <div class=wrapperleft>
        <template v-if="!this.province">
            Thailand
        </template>
        <template v-else>
            {{this.province}}
        </template>
    <v-container fluid mt-2 fill-height>
    <l-map
    ref="mymap"
    @update:zoom= "zoomUpdate"
    @update:center= "centerUpdate"
      zoomsnap=0.05
      :zoom="zoom"
      :options="mapOptions"
      :center="center"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      :max-bounds="maxBounds"
    >
      <l-control-zoom :position="zoomPosition" />

      <l-control
        :position="'bottomright'"
      >
      <div v-for="(item, index) in this.legend" :key="`item-${index}`">
          <div :class="`box ${boxcolor[index]}`"></div>
          <span class="explanation">: {{legend[index]}}</span><br/>
        </div>
      </l-control>

      <l-layer-group
        layer-type="overlay"
        name="Thailand"
      >
      <l-geo-json
        :geojson="geojson"
        :onEachFeature="onEachFeature"
        :options-style="styleFunction"
        :options="options"
      />
      </l-layer-group>
    </l-map>
    </v-container>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import {
  LMap, LLayerGroup, LGeoJson, LControlZoom, LControl
} from 'vue2-leaflet';

export default {
  name: 'Example',
  components: {
    LMap,
    LLayerGroup,
    LGeoJson,
    LControlZoom,
    LControl
  },
  data() {
    return {
      boxcolor: ['one','two','three','four'],
      legend: ['Dataset 1','Dataset 2',' Dataset 3', 'Dataset 4'],
      map: null,
      province: null,
      onEachFeature: null,
      centerLatLong: null,
      center: [13.3254848, 100.854492],
      currentCenter: [13.3254848, 100.854492],
      opacity: 0.6,
      geojson: null,
      fillColor: 'red',
      enableTooltip: true,
      mapOptions: {
        zoomControl: false,
        attributionControl: true,
        zoomSnap: true,
        doubleClickZoom: false,
        touchZoom: false,
      },
      zoom: 5.45,
      currentZoom: 5.45,
      minZoom: 5.45,
      maxZoom: 10,
      zoomPosition: 'topleft',
      layersPosition: 'topright',
      maxBounds: [[4.946768, 96.474293], [20.668491, 106.192104]],
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
      if (zoom === 5.45) {
        const self = this;
        this.map = this.$refs.mymap.mapObject;
        this.map.panTo([13.3254848, 100.854492], 5.45);
      }
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    // In case you have data, you can use d as your feature property
    getColor(d) {
      if (['Chiang Mai', 'Phitsanulok', 'Chiangrai', 'Chaiyaphum', 'Udon Thani', 'Rayong', 'Roi Et'].includes(d)) {
        return '#0A610D';
      } else if (['Mae Hong Son', 'Buriram', 'Uthai Thani', 'Buri Ram', 'Phrae', 'Tak', 'Ubon Ratchathani'].includes(d)) {
        return '#F1E550';
      } else if (['Chumphon', 'Nakhon Si Thammarat', 'Surat Thani', 'Ang Thong', 'Kanchanaburi', 'Prachin Buri', 'Lop Buri'].includes(d)) {
        return '#AFD145';
      } else {
        return '#F6C017';
      }
    },
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      };
    },
    styleFunction() {
      // eslint-disable-next-line
      return (feature) => {
        return {
          fillColor: this.getColor(feature.properties.name),
          weight: 2,
          opacity: 1,
          color: 'black',
          dashArray: '3',
          fillOpacity: 1,
        };
      };
    },
    onEachFeatureFunction() {
      var self = this;
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          '<div>Province: ' + feature.properties.name + '</div>',
          { permanent: false, sticky: true },
        );
        layer.on('click', function (e) {
        //   console.log(feature.properties.name)
          self.province = feature.properties.name
         });
      };
    },
  },
  async created() {
    this.loading = true;
    const response = await fetch('https://raw.githubusercontent.com/apisit/thailand.json/master/thailand.json');
    const data = await response.json();
    this.geojson = data;
    this.loading = false;
  },
  mounted() {
    const self = this;
    this.map = this.$refs.mymap.mapObject;
  },
  watch: {
      province() {
        //   console.log(this.province)
      }
  }
};
</script>
<style>
.leaflet-container {
    background-color:rgba(255,0,0,0.0);
}
.wrapperleft {
    height: 540px;
    width: 100%;
}
.explanation {
    margin-left: 5px;
    vertical-align: middle;
}
.box {
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #70706E;
}
.one{ 
	background-color:#F6C017; 
}
.two{ 
	background-color:#F1E550; 
}
.three{ 
	background-color:#AFD145;
}
.four {
    background-color:#0A610D;
}
</style>
