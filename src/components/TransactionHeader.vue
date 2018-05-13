<template>
  <div class="transaction-header">
    <div>交易別</div>
    <div>名稱</div>
    <div>價格</div>
    <div>數量</div>
    <div>總計</div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.transaction-header {
  display: flex;
  font-weight: bold;
  text-align: center;
}
.transaction-header > div {
  background-color: antiquewhite;
  border: 1px solid #b7a963;
  flex: 1;
}
</style>
