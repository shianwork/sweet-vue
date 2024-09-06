<template>
  <div id="app">
    <HelloWorld msg="Welcome to My App" />
    <div class="login-container">
      <Login />
    </div>
        <router-view></router-view>
  </div>
</template>

<script>
import Login from './views/login/LoginPage.vue'

export default {
  components: {
    Login
  }
}
</script>

<style>
#app {

  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
