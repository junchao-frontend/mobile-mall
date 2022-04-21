import { defineStore } from 'pinia'
export const useCounterStore = defineStore('mall', {
    state: () => {
        return {
            count: 0 // 购物车标记
        }
    },
    getters: {
        shopCounts(state) {
            return state.count
        }
    },
    actions: {
        increment() {
            this.count++
        },
        initCount(num: number){
            this.count = num
        }
    },
})