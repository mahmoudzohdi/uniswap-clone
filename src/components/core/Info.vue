<template>
  <p class="app-info">
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Info",
});
</script>

<style lang="scss" scoped>
.app-info {
  background-color: $darkSecondaryBackground;
  border: 1px solid $darkBorderColor;
  color: $grayText;
  padding: 16px;
  border-radius: 16px;
  font-size: 14px;
}
</style>
