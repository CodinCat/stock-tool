<template>
  <div>
    <h2>交易記錄</h2>
    <InputColumn>
      <label><input type="radio" v-model="type" value="buy">買進</label>
      <label><input type="radio" v-model="type" value="sell">賣出</label>
    </InputColumn>
    <Flex>
      <LabelInput
        type="text"
        label="名稱"
        v-model="name"
        @keyup.enter="submit"
      />
      <LabelInput
        type="number"
        step="0.1"
        label="價格"
        v-model="price"
        @keyup.enter="submit"
      />
      <LabelInput
        type="number"
        label="數量"
        v-model="quantity"
        @keyup.enter="submit"
      />
    </Flex>
    <div>
      <TransactionHeader />
      <TransactionRecord
        v-for="(record, i) in records"
        :key="i"
        :type="record.type"
        :name="record.name"
        :price="record.price"
        :quantity="record.quantity"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Flex from '../components/Flex.vue'
import InputColumn from '../components/InputColumn.vue'
import LabelInput from '../components/LabelInput.vue'
import TransactionHeader from '../components/TransactionHeader.vue'
import TransactionRecord from '../components/TransactionRecord.vue'

export default {
  components: {
    Flex,
    InputColumn,
    LabelInput,
    TransactionRecord,
    TransactionHeader,
  },
  data() {
    return {
      name: '',
      price: 50,
      quantity: 3,
      type: 'buy',
    }
  },
  computed: {
    ...mapState('transactions', ['records']),
  },
  methods: {
    submit() {
      this.$store.commit('transactions/addRecord', {
        type: this.type,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
      })
    },
  },
}
</script>

<style>

</style>
