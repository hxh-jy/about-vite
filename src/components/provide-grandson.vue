<template>
  <div>孙子组件接收数据{{count}}</div>
</template>

<script setup lang='ts'>
import {inject} from 'vue'
let count = inject('count')
</script>
<style lang="scss" scoped>
</style>