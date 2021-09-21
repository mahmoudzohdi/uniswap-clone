<template>
  <div :class="`loader size-${size}`"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Spinner",
  props: {
    size: {
      type: String,
      default: "medium",
      validator(value: string) {
        return ["large", "medium", "small"].includes(value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.loader {
  position: relative;
  left: auto;
  width: 40px;
  height: 40px;

  font-size: 20px;
  text-align: center;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border: 3px solid $primary;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border 1s linear infinite;
    box-sizing: border-box;
  }
  &.size {
    &-large {
      width: 80px;
      height: 80px;
    }
    &-small {
      width: 15px;
      height: 15px;
      &::after {
        border-width: 2px;
      }
    }
  }
}

@-webkit-keyframes spinner-border {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spinner-border {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
