<template>
  <el-card v-for="city in citiesWithRecords" :key="city._id">
    <template #header>
      <div class="card-header flex justify-between">
        <span class="text-3xl">{{ city.name }}</span>
        <el-button class="button" type="danger" @click="deleteCity(city._id)">Delete from list</el-button>
      </div>
    </template>
    <div class="flex justify-between w-full" v-for="record in city.records" :key="record._id">
      <span>Temperature: {{ record.temperature }}</span>
      <span>Wind speed: {{ record.windSpeed }}</span>
      <span>Humidity: {{ record.humidity }}</span>
      <span>Recorded at: {{ getDate(record.createdAt) }}</span>
    </div>
  </el-card>
</template>

<script>
import {format} from 'date-fns'
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  mounted() {
    this.setAllCitiesWithRecords();
  },
  computed: {
    ...mapGetters({
      citiesWithRecords: 'citiesWithRecords',
    }),
  },
  methods: {
    ...mapActions({
      setAllCitiesWithRecords: 'setAllCitiesWithRecords',
      deleteCity: 'deleteCity'
    }),
    getDate(value) {
      var result = format(new Date(value), "H:mm")
      return result
    }
  },
};
</script>
