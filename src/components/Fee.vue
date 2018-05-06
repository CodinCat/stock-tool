<template>
  <div>
    <h2>費用</h2>
    <div class="input-column">
      <label>手續費折扣：<input type="number" step="0.05" v-model="discount"></label>
    </div>
    <div class="form-wrapper">
      <div class="section">
        <h3>買進</h3>
        <div class="input-column">
          <label>股價：<input type="number" step="0.1" v-model="buyPrice"></label>
        </div>
        <div class="input-column">
          <label>張數：<input type="number" step="1" v-model="buyQuantity"></label>
        </div>
        <div class="input-column bold">
          費用：{{ buyTotal.toLocaleString() }}
        </div>
      </div>
      <div class="section">
        <h3>賣出</h3>
        <div class="input-column">
          <label>股價：<input type="number" step="0.1" v-model="sellPrice"></label>
        </div>
        <div class="input-column">
          <label>張數：<input type="number" step="1" v-model="sellQuantity"></label>
        </div>
        <div class="input-column bold">
          費用：{{ sellTotal.toLocaleString() }}
        </div>
      </div>
    </div>
    <div class="fees">
      <div>買進手續費：{{ buyFee }}</div>
      <div>賣出手續費：{{ sellFee }}</div>
      <div>交易稅：{{ tax }}</div>
      <div>合計：{{ buyFee + sellFee + tax }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyPrice: 50.5,
      buyQuantity: 10,
      sellPrice: 50.5,
      sellQuantity: 10,
      discount: 0.6,
    }
  },
  methods: {
    calcFee(totalPrice) {
      return Math.max(Math.floor(totalPrice * this.discount * 0.001425), 20)
    },
  },
  computed: {
    buyTotal() {
      return this.buyPrice * this.buyQuantity * 1000
    },
    sellTotal() {
      return this.sellPrice * this.sellQuantity * 1000
    },
    buyFee() {
      return this.calcFee(this.buyTotal)
    },
    sellFee() {
      return this.calcFee(this.sellTotal)
    },
    tax() {
      return Math.floor(this.sellPrice * this.sellQuantity * 1000 * 0.003)
    },
  },
}
</script>

<style scoped>
input {
  border: 1px solid silver;
  font-size: 14px;
  height: 22px;
  padding: 4px;
  outline: 0;
}
input:focus {
  border-color: cadetblue;
}
.form-wrapper {
  display: flex;
  margin-bottom: 20px;
}
.section {
  width: 50%;
}
.fees {
  border-top: 1px solid silver;
  padding-top: 20px;
}
.input-column {
  margin: 10px 0;
}
.bold {
  font-weight: bold;
}
</style>

