<template>
  <v-card outlined>
    <v-card-text class="headline font-weight-bold">
      "{{ quote }}"
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  mounted() {
    this.quote += this.quotes[Math.floor(Math.random() * this.quotes.length)]
  },
  data: () => {
    return {
      quote: '',
      quotes: [
        'Don\'t ask what the world needs, ask what makes you come alive. Because what the world needs most, is more people who come alive. - Howard Thurman',
        'All our dreams can come true, if we have the courage to pursue them. - Walt Disney',
        'If you only do what you can do, you will never be more than who you are. - Master Shifu',
        'Seek discomfort - Yes Theory',
        'I may not have gone where I intended to go, but I think I have ended up where I needed to be. - Douglas Adams'
      ]
    }
  }
}
</script>

<style>

</style>
