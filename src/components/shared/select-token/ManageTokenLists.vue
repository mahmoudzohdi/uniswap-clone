<template>
  <div class="tabs-buttons">
    <div class="buttons-holder">
      <Button
        class="tab-button"
        v-for="tab in tabs"
        :key="tab.key"
        :variant="tab.key === activeTab ? 'dark-secondary' : 'text'"
        @click="setActiveTab(tab.key)"
      >
        {{ tab.name }}
      </Button>
    </div>
  </div>

  <template v-if="activeTab === 'lists-tab'">
    <div class="search-input-holder">
      <Input
        size="large"
        placeholder="Search name or paste address"
        v-model="searchText"
      />
    </div>
    <ul class="token-providers-list">
      <li
        class="item"
        v-for="provider in tokensProviders"
        :key="provider.name.replace(/ /g, '-')"
      >
        <img class="item-image" :src="provider.logoURI" :alt="provider.name" />
        <div class="item-name-holder">
          <h5 class="item-name">{{ provider.name }}</h5>
          <p class="tokens-count">
            28 tokens
          </p>
        </div>
        <SwitchInput
          class="toggle-provider"
          :model-value="provider.enabled"
          @update:modelValue="
            updateTokensProvider({ ...provider, enabled: $event })
          "
        />
      </li>
    </ul>
  </template>
  <template v-if="activeTab === 'tokens-tab'">
    <div class="search-input-holder">
      <Input size="large" placeholder="0x0000" v-model="customTokenAddress" />
    </div>
    <div class="custom-tokens">
      <p class="note">
        0 Custom Tokens
      </p>
    </div>
    <p class="tip">
      Tip: Custom tokens are stored locally in your browser
    </p>
  </template>
</template>

<script>
import Button from "@/components/core/Button.vue";
import Input from "@/components/core/Input.vue";
import SwitchInput from "@/components/core/SwitchInput.vue";

import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("WalletModule");

export default {
  name: "ManageTokenLists",
  components: {
    Button,
    Input,
    SwitchInput,
  },
  data() {
    return {
      searchText: "",
      customTokenAddress: "",
      tabs: [
        {
          name: "Lists",
          key: "lists-tab",
        },
        {
          name: "Tokens",
          key: "tokens-tab",
        },
      ],
      activeTab: "lists-tab",
    };
  },
  computed: {
    ...mapState({
      modalVisibility: (state) => state.manageTokenListsModal.visibility,
      tokensProviders: (state) => state.manageTokenListsModal.providers,
    }),
  },
  methods: {
    ...mapActions(["closeManageTokenListsModal", "updateTokensProvider"]),

    hide() {
      this.$refs.modal.hide();
    },
    setActiveTab(tabKey) {
      this.activeTab = tabKey;
    },
  },
  watch: {
    modalVisibility(newValue) {
      this.$refs.modal[newValue ? "show" : "hide"]();
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-buttons {
  padding: 20px 20px 0;
  border-top: 1px solid $darkBorderColor;
  .buttons-holder {
    background-color: $darkBorderSecondaryColor;
    border-radius: 12px;
    padding: 6px;
    display: flex;
    justify-content: space-between;
  }
  .tab-button {
    width: calc(50% - 10px);
    padding: 10px;
    font-size: 16px;
  }
}
.search-input-holder {
  padding: 20px;
}
.token-providers-list {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
  max-height: 450px;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 16px 16px 80px;
  border-top: 1px solid $darkBorderColor;
  .item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px;
    border-radius: 20px;
    background-color: $darkBorderColor;
  }
  .item-image {
    width: 40px;
    margin-right: 16px;
  }
  .item-name-holder {
    margin-right: auto;
  }
  .item-name {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }
  .tokens-count {
    font-size: 12px;
    margin: 4px 0 0;
  }
  .toggle-provider {
    justify-self: flex-end;
  }
}
.custom-tokens {
  min-height: 200px;
  max-height: 450px;
  padding: 20px;
  border-top: 1px solid $darkBorderColor;
  .note {
    margin: 0;
    color: $grayText;
  }
}
.tip {
  border-top: 1px solid $darkBorderColor;
  color: #8f96ac;
  padding: 20px;
  text-align: center;
  margin: 0;
}
</style>
