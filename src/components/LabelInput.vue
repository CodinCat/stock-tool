<template>
  <InputColumn>
    <label>
      {{ label }}
      <input
        :value="value"
        v-bind="$attrs"
        v-on="listeners"
      >
    </label>
    <slot></slot>
  </InputColumn>
</template>

<script>
import InputColumn from './InputColumn'

export default {
  components: {
    InputColumn,
  },
  props: ['label', 'value'],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit(
            'input',
            this.$attrs.type === 'number'
              ? event.target.valueAsNumber
              : event.target.value
          )
        },
      }
    },
  },
}
</script>