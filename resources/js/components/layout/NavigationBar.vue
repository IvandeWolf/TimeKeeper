<template>
  <div>
    <v-bottom-navigation
      app
      grow
      color="blue darken-4"
      v-model="bottomNav"
    >
      <v-btn value="history" to="/history">
        <span>History</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="current" to="/current">
        <span>Current</span>
        <v-icon>mdi-timelapse</v-icon>
      </v-btn>

      <v-btn
        fab
        color="white"
        top
        absolute
        value="add"
        to="/add"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-btn value="summary" to="/summary">
        <span>Summary</span>
        <v-icon>mdi-table</v-icon>
      </v-btn>

      <v-btn value="settings" to="settings">
        <span>Settings</span>
        <v-icon>mdi-settings-outline</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'current',
      }
    },
  }
</script>

<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
  height: inherit;
  min-width: inherit; 
  padding: inherit;
}

.v-btn--fab.v-btn--fixed, .v-btn--fab.v-btn--absolute {
  z-index: 4 !important;
}

.v-btn--fab.v-btn--contained {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12) !important;
}

.v-btn--round {
  border-radius: 50% !important;
}

.v-btn--icon, .v-btn--fab {
  min-height: 0 !important;
  min-width: 56px !important;
  max-width: 56px !important;
  padding: 0 !important;
}
</style>
