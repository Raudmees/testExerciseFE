<template>
  <div class="about text-center">
    <el-input
      type="search"
      class="h-12 w-96 p-2"
      placeholder="Enter city name"
      v-model="cityName"
    />
    <el-button type="primary" @click="getCity">Search</el-button>
    <br />
    <ListItem v-if="city" :city="city" />
    <div v-else>
      <p v-if="!loading" class="mt-4">
        {{
          error ? error : "Choose an existing city ( only English alphabet )"
        }}
      </p>
      <p v-if="loading" class="mt-4">{{ "Loading server" }}</p>
    </div>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
export default {
  name: "AddNewCity",
  components: {
    ListItem,
  },
  data() {
    return {
      cityName: "",
      city: null,
      error: null,
      loading: false,
    };
  },
  methods: {
    async getCity() {
      const input = this.cityName;
      const modifiedInpur = this.repalceLetters(input)
      this.city = null;
      this.loading = true;
      try {
        let res = await this.axios.get(
          `http://localhost:3000/api/get-city/${modifiedInpur}`
        );
        const currentWeather = { ...res.data.currentWeather };
        this.city = currentWeather;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = 'There is no such city';
      }
    },
    repalceLetters(string) {
      let value = string.toLowerCase();
      value = value.replace(/ä/g, "a");
      value = value.replace(/ö/g, "o");
      value = value.replace(/ü/g, "u");
      value = value.replace(/õ/g, "o");
      return value;
    },
  },
};
</script>

<style>
</style>