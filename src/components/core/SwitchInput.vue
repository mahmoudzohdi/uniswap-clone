<template>
  <label :class="`toggle-button size-${size}`">
    <input type="checkbox" :checked="modelValue" @change="changeHandler" />
    <span class="toggle-label toggle-on">On</span>
    <span class="toggle-label toggle-off">Off</span>
    <span class="toggle-switch"></span>
  </label>
</template>

<script>
export default {
  name: "SwitchInput",
  props: {
    modelValue: {
      type: Boolean,
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      },
    },
  },
  methods: {
    changeHandler(e) {
      // this.$emit("change", e.target.checked);
      this.$emit("update:modelValue", e.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle-button {
  width: 70px;
  height: 35px;
  background: $darkSecondaryBackground;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  box-sizing: border-box;
  position: relative;
  transition: all 0.25s;
  cursor: pointer;
  .toggle-label {
    width: 50%;
    color: $gray;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.25s;
  }
  &.size-small {
    width: 56px;
    height: 28px;
    .toggle-label {
      font-size: 11px;
    }
  }
  &.size-large {
    width: 90px;
    height: 45px;
    padding: 0 8px;
    .toggle-label {
      font-size: 15px;
    }
  }
}

.toggle-button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}

.toggle-button .toggle-switch {
  position: absolute;
  display: block;
  height: calc(100% - 12px);
  width: calc(50% - 12px);
  border-radius: 50%;
  left: 6px;
  top: 6px;
  transform: translateX(0);
  transition: all 0.4s;
  background: $darkBorderSecondaryColor;
  box-shadow: 0 0 1px #666;
}

.toggle-button input:checked ~ .toggle-switch {
  left: calc(100% - 6px);
  transform: translateX(-100%);
  background: $primary;
}
.toggle-button input:checked ~ .toggle-on,
.toggle-button input:not(:checked) ~ .toggle-off {
  opacity: 1;
}
</style>
