<template>
  <section class="swap-box">
    <header class="box-header">
      <h3 class="box-title">Swap</h3>
      <div class="box-settings">
        <button class="settings-toggler">
          <img
            src="@/assets/images/icons/settings-icon.svg"
            alt="settings icon"
          />
        </button>
      </div>
    </header>
  </section>
</template>

<style lang="scss" scoped>
.swap-box {
  width: 100%;
  max-width: 480px;
  padding: 8px;
  background-color: $darkBackground;
  border-radius: 24px;
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  .box-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
  }
  .box-title {
    font-size: 16px;
    margin: 0;
  }
  .settings-toggler {
    img {
      width: 20px;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(316deg)
        brightness(109%) contrast(109%);
    }
  }
}
</style>
