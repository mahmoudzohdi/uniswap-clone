<template>
  <div>
    <Button variant="primary" @click="openModal">Select a token</Button>
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
              class="common-currency"
              v-for="token in commonTokens"
              :key="token.symbol"
            >
              <img
                class="currency-image"
                :src="token.logoURI"
                :alt="`${token.name} logo`"
              />
              <h3 class="currency-name">
                {{ token.symbol }}
              </h3>
            </Button>
          </div>
        </div>
      </div>
      <ul class="currencies-list">
        <template v-for="token in tokens">
          <li
            class="currency-item"
            :key="token.symbol"
            v-if="
              !searchText ||
                token.name.toLowerCase().includes(searchText.toLowerCase())
            "
          >
            <img
              class="currency-image"
              :src="token.logoURI"
              :alt="`${token.name} logo`"
            />
            <h3 class="currency-name">
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
  name: "SelectCurrency",
  components: {
    Modal,
    Button,
    InfoTooltip,
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    ...mapState(["tokens", "commonTokens"]),
  },
  methods: {
    openModal() {
      this.$refs["modal"].show();
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
.currency-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: $darkBorderColor;
  }
}
.common-currency {
  display: inline-flex;
  margin-right: 8px;
  margin-bottom: 8px;
  align-items: center;
}
.currency-image {
  width: 24px;
  border-radius: 50%;
  margin-right: 15px;
}
.currency-name {
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
