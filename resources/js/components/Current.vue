<template>
<div class="mdc-drawer-app-content">
  <main class="main-content" id="main-content">
    <Quote></Quote>
    <v-card
      outlined
    >
      <v-card-text>
        <div>Current task</div>
        <p class="display-1 text--primary">Webapp developen</p>
        <p>1:51:19</p>
        <!-- <div class="text--primary"></div> -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="blue darken-4"
        >
          See more
        </v-btn>
      </v-card-actions>
    </v-card>
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
