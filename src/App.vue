<template>
  <div class="common-layout"> 
    <el-container>
    <el-header class="bg-gradient-to-r from-green-400 to-blue-500 ">
       
       <div class="flex flex-row justify-center items-center gap-10 h-full">
      <h1 class="text-4xl mr-auto">Waetaher API</h1>
      <router-link to="/">List of saved weather points</router-link>
      <router-link to="/add-new-city">Add new city</router-link>
       </div>
    </el-header>
    <el-main class=""> <router-view /></el-main>
  </el-container>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
