<template>
  <span
    class="tooltip-holder"
    ref="tooltip-holder"
    @mouseenter="mouseenterHandler"
    @mouseleave="mouseleaveHandler"
  >
    <slot />
  </span>
  <p
    :class="['tooltip-content', { show: showTooltip }]"
    :style="{
      top: `${tooltipHolderPosition.top + tooltipHolderPosition.height}px`,
      left: `${tooltipHolderPosition.left + tooltipHolderPosition.width / 2}px`,
    }"
  >
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tooltipHolderPosition: {},
      showTooltip: false,
    };
  },
  methods: {
    mouseenterHandler() {
      this.updateTooltipHolderPosition();
      this.showTooltip = true;
    },
    mouseleaveHandler() {
      this.showTooltip = false;
    },
    updateTooltipHolderPosition() {
      this.tooltipHolderPosition = this.$refs[
        "tooltip-holder"
      ].getBoundingClientRect();
    },
  },
};
</script>

<style lang="scss" scoped>
.tooltip-holder {
  cursor: default;
}
.tooltip-content {
  position: fixed;
  transform: translateX(-50%);

  max-width: 220px;
  display: none;

  font-size: 16px;
  padding: 10px 16px;
  border-radius: 12px;
  background-color: $darkBackground;
  color: $grayText;
  font-weight: 400;
  border: 1px solid $darkBorderColor;
  z-index: 1;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 9px solid $darkBackground;
    border-right: 9px solid transparent;
    border-left: 9px solid transparent;
  }
  &:before {
    border-bottom-color: $darkBorderColor;
    border-width: 10px;
  }
  &.show {
    display: block;
  }
}
</style>
