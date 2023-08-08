<template>
    <div>
        <v-table
            fixed-header
            v-if="movieId && mappedSessions"
        >
            <thead>
                <tr>
                    <th class="text-left">
                        Дата
                    </th>
                    <th class="text-left">
                        Час сеансу
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in mappedSessions"
                    :key="item.showdate"
                >
                    <td>{{ item.showdate }}</td>
                    <td>
                        <v-chip 
                            v-for="time in item.dayTime" 
                            :key="time"
                            class="ma-2"
                            color="green"
                            text-color="white"
                        >
                            <div
                                :class="item.showdate"
                                @click="openSelectedDate"
                            >
                                {{ time }}
                            </div>
                        </v-chip>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <v-overlay v-model="isOverlayShown" contained
                    class="align-center justify-center">
                    <PlaceSelect
                        :id="Number(movieId)"
                        :daytime="daytime"
                        :showdate="showdate"
                        @back="closeOverlay"
                        @succesful-book="openNotification"
                    />
        </v-overlay>
        <div class="text-center">
            <v-snackbar
                v-model="isNotificationShown"
                :timeout="timeout"
            >
                {{ text }}
            </v-snackbar>
    </div>
    </div> 
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue';
    import { storeToRefs } from 'pinia'
    import { useRoute } from 'vue-router'

    import PlaceSelect from '@/components/PlaceSelect.vue';

    import { useAppStore } from '@/store/app'

    const appStore = useAppStore()
    const route = useRoute()

    const { movieShows } = storeToRefs(appStore);

    const movieId = ref('')
    const daytime = ref()
    const showdate = ref()
    const isOverlayShown = ref(false)
    const isNotificationShown = ref(false)
    
    const timeout = ref(10000)
    const bookedTicket = ref()

    const text = computed(() => {
        return `Ви успішно забронювали місце, ваш ticket-id: ${bookedTicket.value}`
    })

    const mappedSessions = computed(() => {
        if (!movieShows.value.data) return
        return movieShows.value?.data[movieId.value]?.map((item) => {
            const formattedDate = new Date(item.showdate).toLocaleDateString('en-GB');
            const arrWithTime = item.daytime.split(';')
            return {dayTime: arrWithTime, showdate: formattedDate}
        })
    })

    const openSelectedDate = (e: Event) => {
        const chip = e.target as HTMLElement;
        daytime.value = chip.innerText
        showdate.value = chip.classList[0]
        isOverlayShown.value = !isOverlayShown.value
    }

    const closeOverlay = () => {
        isOverlayShown.value = !isOverlayShown.value
    }

    const openNotification = (bookResult: string) => {
        bookedTicket.value = bookResult
        closeOverlay()
        isNotificationShown.value = true
    }

    onMounted( async() => {
        movieId.value = route.params.movieId as string
        await appStore.searchForSession(Number(movieId.value))
    })
</script>