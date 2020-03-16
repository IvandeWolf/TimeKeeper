<template>
<div class="mdc-drawer-app-content">
  <main class="main-content" id="main-content">
    <!-- Show a quote card for some motivation. -->
    <Quote></Quote>

    <!-- Show a card with the current checked in activity. -->
    <CurrentActivity></CurrentActivity>
  </main>
</div>
</template>

<script>
export default {

}
</script>

<style>
main {
  margin: 8px;
}

.v-card {
  margin-bottom: 8px;
}
</style>
