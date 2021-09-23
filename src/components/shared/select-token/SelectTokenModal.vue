<template>
  <div>
    <Button
      class="select-token-button"
      :variant="modelValue ? 'dark' : 'primary'"
      rounded
      @click="openModal"
    >
      <template v-if="modelValue && selectedToken">
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
      <template v-if="manageTokenListsVisibility" v-slot:headerTitle>
        <Button
          class="back-to-select-token-button svg-image-to-white"
          variant="text"
          noPadding
          @click="closeManageTokenLists"
        >
          <img src="@/assets/images/icons/arrow-left.svg" />
        </Button>
        <h3 class="header-title">
          Manage
        </h3>
      </template>
      <ManageTokenLists v-if="manageTokenListsVisibility" />

      <SelectToken
        v-if="!manageTokenListsVisibility"
        :model-value="modelValue"
        @selectToken="selectToken"
      />
      <template v-if="!manageTokenListsVisibility" v-slot:footer>
        <Button
          class="manage-tokens-button"
          variant="text-primary"
          block
          no-padding
          @click="openManageTokenLists"
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
import SelectToken from "@/components/shared/select-token/SelectToken.vue";
import ManageTokenLists from "@/components/shared/select-token/ManageTokenLists.vue";

import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("WalletModule");
export default {
  name: "SelectTokenModal",
  components: {
    Modal,
    Button,
    SelectToken,
    ManageTokenLists,
  },
  props: {
    modelValue: {
      type: String,
    },
  },
  data() {
    return {
      manageTokenListsVisibility: false,
    };
  },
  computed: {
    ...mapGetters(["allTokens"]),
    selectedToken() {
      return this.allTokens.find((token) => token.address === this.modelValue);
    },
  },
  methods: {
    openModal() {
      this.manageTokenListsVisibility = false;
      this.$refs["modal"].show();
    },
    hideModal() {
      this.$refs["modal"].hide();
    },
    openManageTokenLists() {
      this.manageTokenListsVisibility = true;
    },
    closeManageTokenLists() {
      this.manageTokenListsVisibility = false;
    },
    selectToken(token) {
      if (token.address !== this.modelValue) {
        this.$emit("update:modelValue", token.address);
        this.hideModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-title {
  margin: 0;
}
.back-to-select-token-button {
  img {
    width: 24px;
  }
}
.select-token-icon {
  width: 11px;
  margin-left: 10px;
}
.select-token-button {
  display: inline-flex;
  margin-right: 8px;
  margin-bottom: 8px;
  align-items: center;
  font-size: 18px;

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
}
</style>
