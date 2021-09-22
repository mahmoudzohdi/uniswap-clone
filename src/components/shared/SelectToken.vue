<template>
  <div>
    <Button
      class="select-token-button token-button"
      :variant="modelValue ? 'dark' : 'primary'"
      rounded
      @click="openModal"
    >
      <template v-if="modelValue">
        <img
          class="token-image"
          :src="selectedToken.logoURI"
          :alt="`${selectedToken.name} logo`"
        />
        <h3 class="token-name">
          {{ selectedToken.symbol }}
        </h3>
      </template>
      <template v-else>
        Select a token
      </template>
      <img
        class="svg-image-to-white select-token-icon"
        src="@/assets/images/icons/angle-bottom.svg"
      />
    </Button>
    <Modal ref="modal" title="Select a token" no-body-padding>
      <div class="tokens-filters">
        <input
          type="text"
          class="search-input"
          placeholder="Search name"
          v-model="searchText"
        />
        <div class="common-tokens-section">
          <h5 class="section-title">
            Common bases
            <InfoTooltip
              text="These tokens are commonly paired with other tokens."
            />
          </h5>
          <div class="section-body">
            <Button
              variant="outlined"
              class="token-button"
              v-for="token in commonTokens"
              :key="token.symbol"
              @click="selectToken(token)"
            >
              <img
                class="token-image"
                :src="token.logoURI"
                :alt="`${token.name} logo`"
              />
              <h3 class="token-name">
                {{ token.symbol }}
              </h3>
            </Button>
          </div>
        </div>
      </div>
      <ul class="currencies-list">
        <template v-for="token in tokens">
          <li
            class="token-item"
            @click="selectToken(token)"
            :key="token.symbol"
            v-if="
              !searchText ||
                token.name.toLowerCase().includes(searchText.toLowerCase())
            "
          >
            <img
              class="token-image"
              :src="token.logoURI"
              :alt="`${token.name} logo`"
            />
            <h3 class="token-name">
              {{ token.symbol }}
              <span class="full-name">{{ token.name }}</span>
            </h3>
          </li>
        </template>
      </ul>
      <template v-slot:footer>
        <Button
          class="manage-tokens-button"
          variant="text-primary"
          block
          no-padding
        >
          Manage Token Lists
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/core/Modal.vue";
import Button from "@/components/core/Button.vue";
import InfoTooltip from "@/components/shared/InfoTooltip.vue";
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("WalletModule");
export default {
  name: "SelectToken",
  components: {
    Modal,
    Button,
    InfoTooltip,
  },
  props: {
    modelValue: {
      type: String,
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    ...mapState(["tokens", "commonTokens"]),
    selectedToken() {
      return this.tokens.find((token) => token.symbol === this.modelValue);
    },
  },
  methods: {
    openModal() {
      this.$refs["modal"].show();
    },
    hideModal() {
      this.$refs["modal"].hide();
    },
    selectToken(token) {
      this.$emit("update:modelValue", token.symbol);
      this.hideModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.tokens-filters {
  padding: 0 15px 15px;
  .search-input {
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
}
.section-title {
  margin-bottom: 10px;
}
.currencies-list {
  max-height: 450px;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid $darkBorderColor;
}
.token-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: $darkBorderColor;
  }
}
.select-token-button {
  font-size: 18px;
}
.select-token-icon {
  width: 11px;
  margin-left: 10px;
}
.token-button {
  display: inline-flex;
  margin-right: 8px;
  margin-bottom: 8px;
  align-items: center;
}
.token-image {
  width: 24px;
  border-radius: 50%;
  margin-right: 15px;
}
.token-name {
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
  .full-name {
    font-size: 12px;
    color: $gray;
    display: block;
    font-weight: 400;
  }
}
.manage-tokens-button {
  font-size: 16px;
}
</style>
