<template>
  <el-card v-for="city in cities" :key="city._id">
    <template #header>
      <div class="card-header flex justify-between">
        <span class="text-3xl">{{ city.name }}</span>
        <el-button class="button" type="danger" @click="deleteCity(city._id)">Delete from list</el-button>
      </div>
    </template>
    <div class="flex justify-between w-3/4">
      <span>Temperature: {{ city.temperature }}</span>
      <span>Wind speed: {{ city.windSpeed }}</span>
      <span>Humidity: {{ city.humidity }}</span>
    </div>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  mounted() {
    this.setAllCities();
  },
  computed: {
    ...mapGetters({
      cities: "cities",
    }),
  },
  methods: {
    ...mapActions({
      setAllCities: "setAllCities",
      deleteCity: 'deleteCity'
    }),
  },
};
</script>
