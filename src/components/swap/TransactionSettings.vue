<template>
  <div ref="settingsContainer" class="settings-container">
    <button class="settings-toggler" @click="toggleSettingsPopup">
      <img
        class="svg-image-to-white"
        src="@/assets/images/icons/settings-icon.svg"
        alt="settings icon"
      />
    </button>
    <div class="settings-popup" v-if="showSettingsPopup">
      <h5 class="settings-title">
        Transaction Settings
      </h5>
      <div class="settings-item flex-wrap">
        <h6 class="item-title">
          Slippage tolerance
          <InfoTooltip
            text="Your transaction will revert if the price changes unfavorably by more than this percentage."
          />
        </h6>
        <div class="item-field">
          <Button
            variant="primary"
            rounded
            class="auto-button"
            @click="resetSlippageTolerance"
            >Auto</Button
          >
          <Input
            class="field-input"
            placeholder="0.10"
            v-model="settings.slippageTolerance"
          />
        </div>
      </div>
      <div class="settings-item flex-wrap">
        <h6 class="item-title">
          Transaction deadline
          <InfoTooltip
            text="Your transaction will revert if it is pending for more than this period of time."
          />
        </h6>
        <div class="item-field">
          <Input
            placeholder="30"
            class="field-input transaction-deadline-input"
            v-model="settings.transactionDeadline"
          />
          <label class="field-label">minutes</label>
        </div>
      </div>
      <h5 class="settings-title">
        Interface Settings
      </h5>
      <div class="settings-item">
        <h6 class="item-title">
          Auto Router
          <InfoTooltip
            text="Use the Uniswap Labs API to get better pricing through a more efficient route."
          />
        </h6>
        <div class="item-field">
          <SwitchInput size="small" v-model="settings.autoRouter" />
        </div>
      </div>
      <div class="settings-item">
        <h6 class="item-title">
          Expert Mode
          <InfoTooltip
            text="Allow high price impact trades and skip the confirm screen. Use at your own risk."
          />
        </h6>
        <div class="item-field">
          <SwitchInput size="small" v-model="settings.expertMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/core/Input.vue";
import Button from "@/components/core/Button.vue";
import SwitchInput from "@/components/core/SwitchInput.vue";
import InfoTooltip from "@/components/shared/InfoTooltip.vue";
export default {
  name: "TransactionSettings",
  components: {
    Input,
    Button,
    SwitchInput,
    InfoTooltip,
  },
  data() {
    return {
      showSettingsPopup: false,
      settings: {
        autoRouter: true,
        expertMode: false,
        slippageTolerance: null,
        transactionDeadline: null,
      },
    };
  },
  methods: {
    resetSlippageTolerance() {
      this.settings.slippageTolerance = null;
    },
    toggleSettingsPopup() {
      this.showSettingsPopup = !this.showSettingsPopup;
    },
    closeSettingsPopup() {
      this.showSettingsPopup = false;
    },
    clickOutsideEvent(event) {
      const el = this.$refs.settingsContainer;
      if (!el || !(el === event.target || el.contains(event.target))) {
        this.closeSettingsPopup();
      }
    },
  },
  beforeMount() {
    document.body.addEventListener("click", this.clickOutsideEvent);
  },
  unmounted() {
    document.body.removeEventListener("click", this.clickOutsideEvent);
  },
};
</script>

<style lang="scss" scoped>
.settings-container {
  position: relative;
  .settings-toggler {
    img {
      width: 20px;
    }
  }
  .settings-popup {
    display: grid;
    grid-auto-rows: auto;
    row-gap: 12px;
    position: absolute;
    right: 0;
    top: 100%;
    width: 290px;
    box-sizing: border-box;
    background-color: $darkBorderColor;
    border: 1px solid $darkBorderSecondaryColor;
    border-radius: 12px;
    padding: 16px;
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
      rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  }
  .settings-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.flex-wrap {
      flex-wrap: wrap;
      .item-field {
        margin-top: 8px;
      }
    }
    .item-field {
      display: flex;
      align-items: center;
      .auto-button {
        margin-right: 8px;
      }
      .field-input {
        text-align: right;
      }
      .transaction-deadline-input {
        width: 80px;
        margin-right: 8px;
      }
    }
  }
  .settings-title,
  .item-title {
    margin: 0;
    color: $grayText;
    font-size: 14px;
  }
  .settings-title {
    font-weight: 600;
  }
  .item-title {
    font-weight: 400;
  }
}
</style>
