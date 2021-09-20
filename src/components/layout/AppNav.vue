<template>
  <nav class="app-nav">
    <ul>
      <li v-for="(link, index) in navLinks" :key="index">
        <a v-if="link.href" :href="link.href" target="_blank">
          {{ link.text }}
          <sup>↗</sup>
        </a>
        <router-link v-else :to="link.to">
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavLink } from "@/types/header";
export default defineComponent({
  name: "AppNav",
  data() {
    return {
      navLinks: [
        {
          to: "/swap",
          text: "Swap",
        },
        {
          to: "/pool",
          text: "Pool",
        },
        {
          to: "/vote",
          text: "Vote",
        },
        {
          href: "https://info.uniswap.org/",
          text: "Charts",
        },
      ] as NavLink[],
    };
  },
});
</script>

<style lang="scss" scoped>
.app-nav {
  ul {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    margin: 0;
    padding: 4px;
    background-color: $darkBackground;
    border-radius: 16px;
  }
  li {
    list-style: none;
    display: inline-block;
    color: #c3c5cb;
    display: inline-flex;
    align-items: center;
    &:first-child {
      margin-left: 0;
    }
    a {
      display: flex;
      text-decoration: none;
      padding: 8px 12px;
      &.router-link-exact-active {
        color: #fff;
        background-color: $darkSecondaryBackground;
        padding: 8px 12px;
        border-radius: 12px;
      }
    }
  }
}
</style>
