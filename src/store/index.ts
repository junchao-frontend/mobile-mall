import {defineStore} from 'pinia'
enum Names {
    Test = 'test'
}

export const Test = defineStore(Names.Test, {
    state: () => {
        return {
            num: 1
        }
    },
    getters: {},
    actions: {}
})