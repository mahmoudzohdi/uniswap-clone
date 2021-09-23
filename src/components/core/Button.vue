<template>
  <button
    :class="[
      'app-button',
      `variant-${variant}`,
      `size-${size}`,
      { 'no-padding': noPadding },
      { 'full-width': block },
      { rounded: rounded },
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "default",
      validator(value: string) {
        return [
          "default",
          "text",
          "text-primary",
          "outlined",
          "primary",
          "primary-text",
          "primary-outlined",
          "success",
          "success-text",
          "success-outlined",
          "error",
          "error-text",
          "error-outlined",
          "dark",
          "dark-secondary",
        ].includes(value);
      },
    },
    block: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
      validator(value: string) {
        return ["default", "large"].includes(value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.app-button {
  background: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid transparent;
  background-color: $gray;
  color: #fff;
  line-height: 1;
  &.no-padding {
    padding: 0;
  }
  &:hover:not(:disabled) {
    opacity: 0.85;
  }
  &.full-width {
    width: 100%;
  }
  &.rounded {
    border-radius: 30px;
    padding-right: 10px;
    padding-left: 10px;
  }
  &.size-large {
    padding: 16px;
    font-size: 16px;
    border-radius: 20px;
  }
  &[class*="variant-text"] {
    background: none;
  }

  &.variant-outlined {
    background-color: transparent;
    border-color: $darkBorderSecondaryColor;
    &:hover {
      background-color: $darkBorderColor;
    }
  }
  &.variant-text-primary {
    color: $primary;
  }
  &.variant-primary {
    background-color: $primary;
    &-outlined {
      background-color: transparent;
      color: $primary;
      border-color: $primary;
    }
    &-text {
      background-color: $primaryTransparent;
      color: $primaryLight;
      border-color: $primaryTransparent;
    }
  }
  &.variant-success {
    background-color: $success;
    &-outlined {
      background-color: transparent;
      color: $success;
      border-color: $success;
    }
    &-text {
      background-color: $successTransparent;
      color: $success;
    }
  }
  &.variant-error {
    background-color: $error;
    &-outlined {
      background-color: transparent;
      color: $error;
      border-color: $error;
    }
    &-text {
      background-color: $errorTransparent;
      color: $error;
    }
  }
  &.variant-dark {
    background-color: $darkBackground;
    &-outlined {
      background-color: transparent;
      color: $darkBackground;
      border-color: $darkBackground;
    }
  }
  &.variant-dark-secondary {
    background-color: $darkSecondaryBackground;
    &-outlined {
      background-color: transparent;
      color: $darkSecondaryBackground;
      border-color: $darkSecondaryBackground;
    }
  }
  &:disabled {
    cursor: default;
    background-color: $darkBorderColor;
    color: $grayText;
    border-color: transparent;
  }
}
</style>
