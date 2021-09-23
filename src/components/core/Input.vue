<template>
  <input type="text" class="app-input" v-bind="$attrs" @input="inputHandler" />
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: {
      type: String,
    },
  },
  methods: {
    inputHandler(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-input {
  width: 100%;
  background: none;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid $darkBorderSecondaryColor;
  font-size: 18px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    color: #fff;
  }
}
</style>
