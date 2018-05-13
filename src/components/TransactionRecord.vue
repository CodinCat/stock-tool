<template>
  <div class="transaction-record">
    <div>{{ typeName }}</div>
    <div>{{ name }}</div>
    <div class="number">{{ price }}</div>
    <div class="number">{{ quantity * 1000 }}</div>
    <div class="number">{{ total.toLocaleString() }}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      validator: value => ['buy', 'sell'].includes(value),
    },
    name: String,
    price: Number,
    quantity: Number,
  },
  computed: {
    typeName() {
      return this.type === 'buy' ? '買進' : '賣出'
    },
    total() {
      return this.price * this.quantity * 1000
    },
  },
}
</script>

<style scoped>
.transaction-record {
  display: flex;
}
.transaction-record > div {
  border: 1px solid #b7a963;
  border-left-width: 0;
  border-bottom-width: 0;
  flex: 1;
  padding: 4px;
}
.transaction-record > div:first-child {
  border-left-width: 1px;
}
.transaction-record:last-child > div {
  border-bottom-width: 1px;
}
.number {
  text-align: right;
}
</style>
