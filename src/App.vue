<template>
  <div id="app">
    <Calculator />    
  </div>
</template>

<script>
import Calculator from './views/Calculator'

export default {
  name: 'app',
  components: {
    Calculator,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir Next', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  color: #2c3e50;
  line-height: 1.6;
  margin: 0 auto;
  width: 560px;
  -webkit-font-smoothing: antialiased;
}
</style>
