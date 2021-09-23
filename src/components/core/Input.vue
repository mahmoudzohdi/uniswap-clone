<template>
  <input
    type="text"
    :class="`app-input size-${size}`"
    v-bind="$attrs"
    :value="modelValue"
    @input="inputHandler"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["medium", "large"].includes(value);
      },
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
  font-size: 16px;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid $darkBorderSecondaryColor;
  background-color: $darkSecondaryBackground;
  box-sizing: border-box;

  &.size-large {
    font-size: 18px;
    padding: 16px;
  }
  &,
  &:focus {
    outline: none;
    color: #fff;
  }
}
</style>
