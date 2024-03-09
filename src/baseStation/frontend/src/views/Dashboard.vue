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

export default {
  name: "dashboard",
  components: {
    DataCard,
    DataMap,
  },
  data() {
    return {
      measurements: this.$store.getters.measurementNames,
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  .dashboard-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 40px;
  }
}
</style>
