<template>
<div class="mdc-drawer-app-content" >
  <main class="main-content" id="main-content">
    <!-- Show a quote card for some motivation. -->
    <Quote></Quote>

    <!-- Show a card with the current checked in activity. -->
    <CurrentActivity v-for="c in this.current" :id="c" v-bind:key="c"></CurrentActivity>
  </main>
</div>
</template>

<script>
export default {
  mounted() {
    $.get('/current').done((data) => {
      this.current = data
    })
  },
  data: () => {
    return {
      current: []
    }
  }
}
</script>

<style>
main {
  margin: 8px 4px;
}
</style>
