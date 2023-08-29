<template>
  <button @click="handleClick">点我加一:{{store.counter}}</button>
  <button @click="handleInit">重置: $reset</button>
  <span>乘{{store.doubleCount}}</span>
  <button @click="handleDecement">减一</button>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue'
import useStore from '../../store/store'

let store = useStore()
let handleClick = () => {
    store.counter ++
    store.storageCounter()
    console.log(store.doubleCount)
}

let handleInit = () => {
    store.$reset()
}
let handleDecement = () => {
  store.decrement()
}
</script>
<style lang="scss" scoped>
</style>