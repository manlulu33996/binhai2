<template>
  <div id="app">
    <router-view class="router"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    white-space: normal;
    word-break: break-all;
    width:100%;
}
.router {
    position: fixed;
    width: 10rem;
    left: 50%;
    margin-left:-5rem;
} 
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

input,
button {
    background: none;
    border: 0;
    margin: 0;
    padding: 0;
}

html {
    height: 100%;
}

body {
    position: relative;
    width: 10rem;
    margin: 0 auto;
    height: 100%;
    overflow-x: hidden;
    background: #fff;
}

a {
    text-decoration: none;
}

ul,
li {
    list-style: none;
}

i {
    font-style: normal;
}

a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
}

input {
    outline: none;
    outline-color: invert;
    outline-style: none;
    outline-width: 0px;
    border: none;
    border-style: none;
    text-shadow: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
}
</style>
