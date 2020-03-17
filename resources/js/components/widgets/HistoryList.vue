<template>
  <v-card outlined>
    <v-card-text>
      <h2 class="text--primary">History of activities</h2>
    </v-card-text>

    <v-list>
      <v-list-item three-line v-for="time in this.times" v-bind:key="time.id">
        <v-list-item-content>
          <v-list-item-title>{{ time.activity.title }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ time.start + ' - ' + (time.end ? time.end : 'NOW') }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ time.notes }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="Object.keys(this.times).length == 0">
        <v-list-item-title>Nothing here to see, yet ...</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  mounted() {
    $.get('/times').done((data) => {
      this.times = data

      for (let time in this.times) {
        $.get('/activity', { id: this.times[time].activity }).done((data) => {
          this.times[time].activity = data
        })
      }
    })
  },
  data: () => {
    return {
      times: [],
    }
  }
}
</script>

<style scoped>

</style>
