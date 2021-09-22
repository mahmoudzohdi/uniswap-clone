<template>
  <transition name="fade">
    <div class="app-modal" v-if="isVisible" @click.self="hide">
      <section class="app-modal-content">
        <header class="app-modal-header">
          <h3 class="header-title">
            {{ title }}
          </h3>
          <Button class="close-modal-button" variant="text" @click="hide">
            <img
              class="svg-image-to-white"
              src="@/assets/images/icons/close-icon.svg"
              alt="close modal icon"
            />
          </Button>
        </header>

        <article
          :class="[
            'app-modal-body',
            { 'no-body-padding': noBodyPadding, 'no-footer': !$slots.footer },
          ]"
        >
          <slot />
        </article>

        <footer v-if="$slots.footer" class="app-modal-footer">
          <slot name="footer"></slot>
        </footer>
      </section>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@/components/core/Button.vue";

export default defineComponent({
  name: "Modal",
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    noBodyPadding: {
      type: Boolean,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    show() {
      this.isVisible = true;
      this.$emit("onShow");
    },
    hide() {
      this.isVisible = false;
      this.$emit("onHide");
    },
  },
});
</script>

<style lang="scss" scoped>
.app-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
}
.app-modal-content {
  width: 100%;
  max-width: 400px;
  border: 1px solid $darkSecondaryBackground;
  border-radius: 20px;
  background-color: $darkBackground;
  overflow: hidden;
}
.app-modal-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  .header-title {
    margin: 0;
  }
  .close-modal-button {
    width: 20px;
    padding: 0;
  }
}
.app-modal-body {
  &:not(.no-body-padding) {
    padding: 0 16px;
    &.no-footer {
      padding-bottom: 16px;
    }
  }
}
.app-modal-footer {
  padding: 16px;
  background-color: $darkSecondaryBackground;
  border-top: 1px solid $darkBorderColor;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
