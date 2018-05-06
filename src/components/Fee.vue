<template>
  <div>
    <h2>費用</h2>
    <div class="input-column">
      <label>手續費折扣：<input type="number" step="0.05" v-model="discount"></label>
      <label class="bind-quantity"><input type="checkbox" v-model="bindQuantity">綁定張數</label>
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
    <div>每張獲利：{{ earningPer1.toLocaleString() }}</div>
    <div>總獲利：{{ totalEarning.toLocaleString() }}</div>
    <div class="fees">
      <div>買進手續費：{{ buyFee }}</div>
      <div>賣出手續費：{{ sellFee }}</div>
      <div>交易稅：{{ tax }}</div>
      <div>合計：{{ totalFees }}</div>
    </div>
    <div class="net-profit bold">
      淨利：{{ (totalEarning - totalFees).toLocaleString() }}
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
      discount: 0.6,
      bindQuantity: true,
      buyPrice: 50.5,
      buyQuantity: 10,
      sellPrice: 50.5,
      sellQuantity: 10,
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
    totalEarning() {
      return Math.round(this.sellTotal - this.buyTotal)
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
    totalFees() {
      return this.buyFee + this.sellFee + this.tax
    },
  },
  watch: {
    buyQuantity(value) {
      if (this.bindQuantity && this.sellQuantity !== value) {
        this.sellQuantity = value
      }
    },
    sellQuantity(value) {
      if (this.bindQuantity && this.buyQuantity !== value) {
        this.buyQuantity = value
      }
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
input[type='checkbox'] {
  vertical-align: text-bottom;
}
input:focus {
  border-color: cadetblue;
}
.bind-quantity {
  margin-left: 12px;
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
.net-profit {
  font-size: 18px;
  margin-top: 12px;
}

.bold {
  font-weight: bold;
}
</style>

