<template>
  <div>
    <h2>快速試算</h2>
    <InputColumn>
      <LabelInput
        type="number"
        step="0.05"
        label="手續費折扣："
        :value="discount"
        @input="setDiscount"
      >
        <label class="bind-quantity">
          <input
            type="checkbox"
            :checked="bindQuantity"
            @input="toggleBindQuantity"
          >
          綁定張數
        </label>
      </LabelInput>
    </InputColumn>
    <div class="form-wrapper">
      <TradingForm
        title="買進"
        :price="buyPrice"
        :quantity="buyQuantity"
        @update:price="setBuyPrice"
        @update:quantity="setBuyQuantity"
      />
      <TradingForm
        title="賣出"
        :price="sellPrice"
        :quantity="sellQuantity"
        @update:price="setSellPrice"
        @update:quantity="setSellQuantity"
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
import { mapState, mapMutations, mapGetters } from 'vuex'
import InputColumn from '../components/InputColumn'
import LabelInput from '../components/LabelInput'
import TradingForm from '../components/TradingForm'

const STORAGE_KEY = 'CALCULATOR'

export default {
  components: {
    TradingForm,
    InputColumn,
    LabelInput,
  },
  methods: {
    ...mapMutations('calculator', [
      'setDiscount',
      'toggleBindQuantity',
      'setBuyPrice',
      'setBuyQuantity',
      'setSellPrice',
      'setSellQuantity',
    ]),
  },
  updated() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(this.$store.state.calculator)
    )
  },
  computed: {
    ...mapState('calculator', [
      'discount',
      'bindQuantity',
      'buyPrice',
      'buyQuantity',
      'sellPrice',
      'sellQuantity',
    ]),
    ...mapGetters('calculator', [
      'earningPer1',
      'totalEarning',
      'buyFee',
      'sellFee',
      'tax',
      'totalFees',
    ]),
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
.net-profit {
  font-size: 18px;
  margin-top: 12px;
}

.bold {
  font-weight: bold;
}
</style>

