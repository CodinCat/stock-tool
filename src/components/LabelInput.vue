<template>
  <InputColumn>
    <label>
      {{ label }}
      <input
        :value="value"
        @input="$emit('input', $event.target.value, $event)"
        v-bind="$attrs"
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
}
</script>