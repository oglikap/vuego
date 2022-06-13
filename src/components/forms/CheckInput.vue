<template>
  <div class="form-check">
    <label :for="name" class="active">
      {{label}}
    </label>
    <input :checked="checked" :required="required" type="checkbox">
  </div>
</template>

<script>
export default {
  name: 'CheckInput',
  props: ["label", "required", "name", "value", "checked"]
}
</script>