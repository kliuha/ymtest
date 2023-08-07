<template>
    <div>SSSSSSSSSSSSSSSSSSSSSSasd  {{ movieId }}</div>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const movieId: any = ref('')

    onMounted(() => {
    const id = route.params.movieId
    movieId.value = id
    })
</script>