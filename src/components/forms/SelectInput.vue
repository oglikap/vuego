<template>
  <div class="field label small">
    <label :for="name" class="active">{{label}}</label>
    <select class="" :name="name" :id="name" :required="required">
      <option v-for="option in items" :key="option.value" :value="options.value">
        {{option.text}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: ["items", "name", "required", "label"],
}
</script>