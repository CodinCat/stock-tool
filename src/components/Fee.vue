<template>
  <div>
    <h2>費用</h2>
    <div class="input-column">
      <label>手續費折扣：<input type="number" step="0.05" v-model="discount"></label>
    </div>
    <div class="form-wrapper">
      <TradingForm
        title="買進"
        :price.sync="buyPrice"
        :quantity.sync="buyQuantity"
      />
      <TradingForm
        title="賣出"
        :price.sync="sellPrice"
        :quantity.sync="sellQuantity"
      />
    </div>
    <div>
      每張獲利：{{ earningPer1 }}
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
import TradingForm from './TradingForm'

export default {
  components: {
    TradingForm,
  },
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
    earningPer1() {
      return Math.round((this.sellPrice - this.buyPrice) * 1000)
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

<style>
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
}
.fees {
  border-top: 1px solid silver;
  padding-top: 20px;
  margin-top: 20px;
}
.input-column {
  margin: 10px 0;
}
.bold {
  font-weight: bold;
}
</style>

