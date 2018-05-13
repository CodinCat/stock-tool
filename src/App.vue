<template>
  <div id="app">
    <Transactions />
    <Calculator />
  </div>
</template>

<script>
import Calculator from './views/Calculator'
import Transactions from './views/Transactions'

export default {
  name: 'app',
  components: {
    Calculator,
    Transactions,
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
input {
  border: 1px solid silver;
  font-size: 14px;
  height: 22px;
  padding: 4px;
  outline: 0;
}
input[type='checkbox'],
input[type='radio'] {
  vertical-align: text-bottom;
}
input:focus {
  border-color: cadetblue;
}
</style>
