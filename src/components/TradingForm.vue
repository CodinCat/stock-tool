<template>
  <div class="section">
    <h3>{{ title }}</h3>
    <div class="input-column">
      <label>
        股價：
        <input type="number" step="0.1" :value="price" @input="updatePrice">
      </label>
    </div>
    <div class="input-column">
      <label>
        張數：
        <input type="number" step="1" :value="quantity" @input="updateQuantity">
      </label>
    </div>
    <div class="input-column bold">
      合計：{{ total.toLocaleString() }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    price: Number,
    quantity: Number,
  },
  methods: {
    updatePrice(e) {
      this.$emit('update:price', e.target.valueAsNumber)
    },
    updateQuantity(e) {
      this.$emit('update:quantity', e.target.valueAsNumber)
    },
  },
  computed: {
    total() {
      return this.price * this.quantity * 1000
    },
  },
}
</script>

<style>
.section {
  width: 50%;
}
</style>
