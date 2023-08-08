<template>
    <v-overlay
        :model-value="isLoading"
        class="align-center justify-center"
    >
        <v-progress-circular
            indeterminate
            color="purple"
            :size="70"
        ></v-progress-circular>
    </v-overlay>
</template>

<script lang="ts" setup>
    defineProps<{
        isLoading: boolean
    }>()
</script>