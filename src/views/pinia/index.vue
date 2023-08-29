<template>
  <button @click="handleClick">点我加一:{{store.count}}</button>
  <button @click="handleInit">重置: $reset</button>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue'
import useStore from '../../store/store'

let store = useStore()
let handleClick = () => {
    store.count ++
}

let handleInit = () => {
    store.$reset()
}

</script>
<style lang="scss" scoped>
</style>