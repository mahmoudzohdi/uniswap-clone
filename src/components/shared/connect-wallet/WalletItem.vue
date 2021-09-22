<template>
  <div class="wallet-item" @click="walletItemClickHandler">
    <h4 class="item-name">
      <Spinner v-if="loading" size="small" class="loader" />
      {{ walletInfo.name }}
    </h4>
    <img
      class="item-image"
      :src="walletInfo.image"
      :alt="`${walletInfo.name} logo`"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { WalletProviderItem } from "@/types/wallet";
import Spinner from "@/components/shared/Spinner.vue";
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("WalletModule");

export default defineComponent({
  name: "WalletItem",
  components: {
    Spinner,
  },
  props: {
    walletInfo: {
      type: Object as PropType<WalletProviderItem>,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapActions(["setAccounts"]),
    walletItemClickHandler() {
      this.loading = true;
      this.walletInfo.onClick &&
        this.walletInfo
          .onClick()
          .then((accounts: string[]) => {
            this.setAccounts(accounts);
            this.$emit("connected");
          })
          .finally(() => {
            this.loading = false;
          });
    },
  },
});
</script>

<style lang="scss" scoped>
.wallet-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 16px;
  background-color: $darkBorderColor;
  border: 1px solid $darkBorderSecondaryColor;
  border-radius: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    border-color: $primary;
  }
  .item-name {
    margin: 0;
  }
  .item-image {
    width: 24px;
  }
  .loader {
    margin-right: 15px;
  }
}
</style>
