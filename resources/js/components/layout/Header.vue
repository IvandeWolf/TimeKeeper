<template>
  <header class="mdc-top-app-bar app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
        <span class="mdc-top-app-bar__title">{{ title }}</span>
        <v-spacer></v-spacer>
        <!-- <v-icon @click="invert()">invert_colors</v-icon> -->
      </section>
    </div>
  </header>
</template>

<script>
import { MDCDrawer } from "@material/drawer";
import { MDCTopAppBar } from "@material/top-app-bar/index";

export default {
  mounted() {
    // console.log("Header mounted");

    const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
    const topAppBarElement = document.querySelector(".mdc-top-app-bar");
    const topAppBar = new MDCTopAppBar(topAppBarElement);

    topAppBar.setScrollTarget(document.getElementById("main-content"));
    topAppBar.listen("MDCTopAppBar:nav", () => {
      drawer.open = !drawer.open;
    });
  },
  data() {
    return {
      title: window.location.pathname.substring(1)
    };
  },
  methods: {
    invert() {
      window.$Vuetify.framework.theme.dark = !window.$Vuetify.framework.theme.dark
    }
  }
};
</script>

<style>
.mdc-top-app-bar__title {
  text-transform: capitalize;
}
</style>
