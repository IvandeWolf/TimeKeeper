<template>
  <v-app>
    <v-content>      
      <!-- Main content -->
      <router-view></router-view>

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

<style>
.v-application p {
  margin-bottom: 0;
}
</style>
