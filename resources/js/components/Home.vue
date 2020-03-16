<template>
  <v-app>
    <v-content>
      <!-- Layout -->
      <!-- <Header></Header>
      <Drawer></Drawer> -->
      
      <!-- Main content -->
        <div class="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
          <main class="main-content" id="main-content">
            <div class="mdc-layout-grid">
              <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3">
                </div>
                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3">
                </div>
                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3">
                </div>
                <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3">
                </div>
              </div>
            </div>
          </main>
        </div>

      <!-- Snackbars -->
      <!-- <GameDone></GameDone> -->
    </v-content>

    <!-- Bottom navigation bar -->
    <NavigationBar></NavigationBar>
  </v-app>
</template>

<script>
export default {
  mounted() {
    
  },
  data() {
    return {}
  }
};
</script>

<style scoped>

</style>
