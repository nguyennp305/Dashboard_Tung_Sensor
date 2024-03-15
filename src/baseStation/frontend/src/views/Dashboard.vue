<template>
  <div class="dashboard">
    <div class="dashboard-body" :v-if="measurements">
      <div v-for="measurement in measurements" :key="measurement">
        <data-map
          :name="measurement"
          v-if="measurement == 'location'"
        ></data-map>
        <data-card :name="measurement" v-else></data-card>
      </div>
    </div>
  </div>
</template>

<script>
import DataCard from "../components/dataCard.vue";
import DataMap from "../components/dataMap.vue";
import axios from 'axios';

export default {
  name: "dashboard",
  components: {
    DataCard,
    DataMap,
  },
  data() {
    return {
      measurements: this.$store.getters.measurementNames,
      diachan: ''
    };
  },
  mounted() {
    const fetchData = () => {
    axios.get('https://smartbouy-14717-default-rtdb.asia-southeast1.firebasedatabase.app/diachan.json')
      .then(response => {
        this.diachan = response.data;
        this.$store.dispatch('updateDataMeasurements', response.data)
        console.log('diachan_tung::: ', this.diachan)
      })
      .catch(error => {
        console.error('Error fetching diachan:', error);
      });
    }
    fetchData()
    setInterval(fetchData, 10000)
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  .dashboard-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 40px;
  }
}
</style>
