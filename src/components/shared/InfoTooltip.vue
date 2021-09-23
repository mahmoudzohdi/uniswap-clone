<template>
  <Tooltip :text="text">
    <span class="question-mark-icon">?</span>
  </Tooltip>
</template>

<script>
import Tooltip from "@/components/core/Tooltip.vue";
export default {
  name: "InfoTooltip",
  components: {
    Tooltip,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.question-mark-icon {
  width: 18px;
  height: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  border-radius: 50%;
  background-color: $darkBorderColor;
  color: $grayText;
  &:hover {
    opacity: 0.7;
  }
}
</style>
