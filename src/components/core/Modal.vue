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

        <article class="app-modal-body">
          <slot />
        </article>

        <footer class="app-modal-footer"></footer>
      </section>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@/components/core/Button.vue";

export default defineComponent({
  name: "AppModal",
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      required: true,
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
  padding: 16px;
}
.app-modal-header {
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
