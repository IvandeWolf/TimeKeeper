<template>
  <!-- <aside class="mdc-drawer mdc-drawer--modal"> -->
  <aside class="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust mdc-drawer--open">
    <div class="mdc-drawer__header">
      <h3 class="mdc-drawer__title">{{ name }}</h3>
      <h6 class="mdc-drawer__subtitle">{{ type }}</h6>
    </div>
    <!-- <hr class="mdc-list-divider"> -->
    <div class="mdc-drawer__content">
      <nav class="mdc-list">
        <a class="mdc-list-item" v-bind:class="{ 'mdc-list-item--activated' : pathname == '/dashboard' }" href="/dashboard">
          <i class="material-icons  mdc-list-item__graphic" aria-hidden="true">dashboard</i>
          <span class="mdc-list-item__text">Dashboard</span>
        </a>

        <a class="mdc-list-item" v-bind:class="{ 'mdc-list-item--activated' : pathname == '/modules' }" href="/modules">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">view_module</i>
          <span class="mdc-list-item__text">Modules</span>
        </a>
        <a class="mdc-list-item" v-bind:class="{ 'mdc-list-item--activated' : pathname == '/statistics' }" href="/statistics">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">equalizer</i>
          <span class="mdc-list-item__text">Statistics</span>
        </a>

        <hr class="mdc-list-divider">
        <h6 class="mdc-list-group__subheader">Configuration</h6>
        <a class="mdc-list-item" v-bind:class="{ 'mdc-list-item--activated' : pathname == '/games' }" href="/games">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">pages</i>
          <span class="mdc-list-item__text">Games</span>
        </a>
        <a class="mdc-list-item" v-bind:class="{ 'mdc-list-item--activated' : pathname == '/settings' }" href="/settings">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">settings</i>
          <span class="mdc-list-item__text">Settings</span>
        </a>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  mounted() {
    $.get("/api/config", {}).done(data => {
      data = JSON.parse(data)

      this.name = data.module.name
      this.type = data.module.type
    })
  },
  data() {
    return {
      name: "",
      type: "",
      pathname: window.location.pathname
    };
  }
};
</script>
