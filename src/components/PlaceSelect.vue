<template>
    <v-table
        fixed-header
        v-if="appStore.sessionPlaces.data"
    >
        <thead>
            <tr>
                <th class="text-left">
                    Виберіть місце
                </th>
                <th 
                    class="text-right"
                    @click="$emit('back')"
                    >
                    Назад
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="seatsAndRows in mappedSeats"
            :key="seatsAndRows.row"
            >
                <td>{{ seatsAndRows.row }}</td>
                <td>
                    <v-chip
                        v-for="place in seatsAndRows.seats"
                        :key="place.seat"
                        class="ma-1"
                        :color="place.is_free ? 'green' : 'grey'"
                        text-color="white"
                    >
                        <div
                            :class="seatsAndRows.row.toString()"
                            @click="bookSeats(place.is_free, $event)"
                        >
                            {{ place.seat }}
                        </div>
                    </v-chip>
                </td>
            </tr>
        </tbody>
        <TheSpinner v-if="isLoading" :is-loading="isLoading" />
  </v-table>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue';

    import TheSpinner from './TheSpinner.vue';

    import { SeatPlace, SeatRow, BookingData } from '@/types/Api'
    import { useAppStore } from '@/store/app'

    const props = defineProps<{
       id: number,
       daytime: string,
       showdate: string
    }>()
    const emit = defineEmits(['succesfulBook'])

    const appStore = useAppStore()

    const isLoading = ref(false)
    
    const mappedSeats = computed(() => {
        return appStore.sessionPlaces.data.map((item) => {
            const row = (item[0] as SeatRow).row
            return {row: row, seats: item[1] as unknown as SeatPlace[]}
        })
    })

    const bookSeats = async (isFree: boolean, e: Event) => {
        if (!isFree) return
        const seatChip = e.target as HTMLElement;
        const fetchObj: BookingData = {
            movie_id: props.id,
            row: Number(seatChip.classList[0]),
            seat: Number(seatChip.innerText),
            showdate: props.showdate,
            daytime: props.daytime,
        }
        isLoading.value = true
        await appStore.bookSessionPlace(fetchObj)
        isLoading.value = false
        emit('succesfulBook', appStore.bookResult.data.ticketkey)
    }

    onMounted( async() => {
        isLoading.value = true
        await appStore.checkFreePlaces(props.id, props.daytime, props.showdate)
        isLoading.value = false
    })
</script>

<style lang="scss" scoped>
.v-table {
    padding-top: 12em;
}
</style>