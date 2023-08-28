<template>
  <div>{{count}}</div>
</template>

<script setup lang='ts'>
import {onMounted,ref} from 'vue'
import $bus from '../bus'
let count = ref(0)
onMounted(() => {
    $bus.on('add',(e) => {
        count.value = e
        console.log('获取单个事件总线',e)
    })
})
console.log($bus)
</script>
<style lang="scss" scoped>
</style>