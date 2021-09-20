<template>
  <SwapBox />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SwapBox from "@/components/swap/SwapBox.vue";

export default defineComponent({
  name: "Swap",
  components: {
    SwapBox,
  },
});
</script>
