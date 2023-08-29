import { defineStore } from "pinia";

const useStore = defineStore('main',{
    state: () => {
        return {
            counter: Number(localStorage.getItem('counter')) || 0,
            name: 'Mr zhao'
        }
    },
    getters: {
        doubleCount(): number {
            return this.counter * 2
        }
    },
    actions: {
        decrement(): number {
            return this.counter --
        },
        storageCounter() {
            localStorage.setItem('counter',`${this.counter}`)
        }
    }
})
export default useStore