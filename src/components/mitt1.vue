<template>
  <div>同层组件{{count}}</div>
  <button @click="handleClick">点我加一</button>
</template>

<script setup lang='ts'>
import {ref,onMounted} from 'vue'
import $bus from '../bus'

let count = ref(23)
const handleClick = () => {
  count.value ++
  $bus.emit('add',count.value)
}
onMounted(() => {
  $bus.emit('add',count.value)
})
</script>
<style lang="scss" scoped>
</style>