<template>
  <v-app-bar
    class="app-bar"
    flat 
    color="teal-darken-4"
    image="https://www.grandsierraresort.com/hs-fs/hubfs/recreation/Grand-Sierra-Cinema-view-of-auditorium_q085_1920x1080.jpg?width=575&name=Grand-Sierra-Cinema-view-of-auditorium_q085_1920x1080.jpg"
    @click="redirectToHome"
    >
      <template v-slot:image>
        <v-img cover
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-title>
      <v-icon icon="mdi-theater" />
        YM cinema
      </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const redirectToHome = () => {
    router.push({name: 'Home'})
  }
</script>

<style lang="scss" scoped>
.app-bar {
  cursor: pointer;
}
</style>