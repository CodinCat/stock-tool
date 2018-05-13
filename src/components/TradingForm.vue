<template>
  <div class="section">
    <h3>{{ title }}</h3>
    <LabelInput
      type="number"
      step="0.1"
      label="股價："
      :value="price"
      @input="updatePrice"
    />
    <LabelInput
      type="number"
      step="1"
      label="張數："
      :value="quantity"
      @input="updateQuantity"
    />
    <InputColumn class="bold">
      合計：{{ total.toLocaleString() }}
    </InputColumn>
  </div>
</template>

<script>
import LabelInput from './LabelInput'
import InputColumn from './InputColumn'

export default {
  components: {
    LabelInput,
    InputColumn,
  },
  props: {
    title: String,
    price: Number,
    quantity: Number,
  },
  methods: {
    updatePrice(value) {
      this.$emit('update:price', value)
    },
    updateQuantity(value) {
      this.$emit('update:quantity', value)
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
