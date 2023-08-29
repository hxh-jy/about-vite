<template>
  <div>{{count}}</div>
</template>

<script setup lang='ts'>
import {onMounted,ref,onBeforeMount} from 'vue'
import $bus from '../bus'
let count = ref()
onBeforeMount(() => {
    $bus.on('add',(data) => {
        count.value = data
    })
})
</script>
<style lang="scss" scoped>
</style>