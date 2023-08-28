<template>
  <div>父组件count值：{{count}}</div>
  <button @click="handleClick">点我加一</button>
  <PropsChild :count="count"/>
</template>

<script setup lang='ts'>
import {ref} from 'vue'

import PropsChild from '@/components/props-child.vue'

let count = ref(0)
const handleClick = () => {
  count.value ++
}
</script>
<style lang="scss" scoped>
</style>