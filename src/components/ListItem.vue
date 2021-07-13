<template>
  <el-descriptions title="City info" >
    <el-descriptions-item label="Name">{{ city.name }}</el-descriptions-item>
    <el-descriptions-item label="Country">{{ city.sys.country }}</el-descriptions-item>
    <el-descriptions-item label="CityId">{{ city.id }}</el-descriptions-item>
    <el-descriptions-item label="Temperature">{{ city.main.temp }}</el-descriptions-item>
    <el-descriptions-item label="Wind speed">{{ city.wind.speed }}</el-descriptions-item>
    <el-descriptions-item label="Humidity">{{ city.main.humidity }}</el-descriptions-item>
     <el-descriptions-item label="To Database">
         <el-button type="primary" @click="addCityNameToDb()">Add city name to database</el-button>
    </el-descriptions-item>
</el-descriptions>
</template>

<script>
export default {
    name: 'ListItem',
    props: ['city'],
    methods: {
       async addCityNameToDb() {
            try {
                const city = JSON.parse(JSON.stringify(this.city))
                const res = await this.axios.post('http://localhost:3000/api/add-city', city)
                console.log(res.data.message)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>

</style>