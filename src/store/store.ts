import { defineStore } from "pinia";

const useStore = defineStore('main',{
    state: () => {
        return {
            count: 0,
            name: 'Mr zhao'
        }
    }
})
export default useStore