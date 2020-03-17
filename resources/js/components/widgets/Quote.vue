<template>
  <v-card outlined @click="change">
    <v-card-text class="headline font-weight-bold blue--text text--darken-4">
      "{{ quote }}"
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  mounted() {
    this.change()
  },
  methods: {
    change() {
      this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)]
    }
  },
  data: () => {
    return {
      quote: '',
      quotes: [
        'Don\'t ask what the world needs, ask what makes you come alive. Because what the world needs most, is more people who come alive. - Howard Thurman',
        'All our dreams can come true, if we have the courage to pursue them. - Walt Disney',
        'If you only do what you can do, you will never be more than who you are. - Master Shifu',
        'Seek discomfort - Yes Theory',
        'I may not have gone where I intended to go, but I think I have ended up where I needed to be. - Douglas Adams',
        'Oh yes, the past can hurt. But, the way I see it, you can either run from it… or learn from it. — Rafiki',
        'Some people are worth melting for. - Olaf',
        'Remember you’re the one who can fill the world with sunshine. - Snow White',
        'Life is a journey to be experienced, not a problem to be solved. - Pooh',
        'You are braver than you believe, stronger than you seem, and smarter than you think. - Christopher Robin',
        'You must not let anyone define your limits because of where you come from. Your only limit is your soul. - Gusteau',
        'Our fate lives within us. You only have to be brave enough to see it. - Merida',
        'Don’t just fly, soar. - Dumbo',
        'Venture outside your comfort zone. The rewards are worth it. - Rapunzel',
        'First, think. Second, dream. Third, believe. And finally, dare. - Walt Disney',
        'If you can dream it, you can do it. - Walt Disney'
      ]
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-bottom: 8px;
}
</style>
