<template>
  <div>
      实现隔辈组件传递数据
      <ProvideSon />
  </div>
</template>

<script setup lang='ts'>
import {ref,provide} from 'vue'
import ProvideSon from '@/components/provide-son.vue'

let count = ref(25)
provide('count',count)
</script>
<style lang="scss" scoped>
</style>