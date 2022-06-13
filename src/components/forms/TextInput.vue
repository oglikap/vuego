<template>
 <div class="field label small">
    <label :for="name" class="active">{{label}}</label>
    <input 
    :type="type" 
    :name="name" 
    :placeholder="placeholder"
    :required="required"
    :min="min"
    :max="max"
    :value="modelValue"
    :autocomplete="name + '-new'"
    @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    name: String,
    type: String,
    label: String,
    placeholder: String,
    required: String,
    min: String,
    max: String,
    modelValue: String,
  },
}
</script>