<template>
  <div>
      通过自定义事件实现组件之间的通信
      <CustomChild @handleClick="handleClick"/>
  </div>
</template>

<script setup lang='ts'>
import CustomChild from '@/components/custom-child.vue'
let handleClick = (person: any) => {
  person.name = 'hxh'
  console.log('接收自定义事件的相关数据',person)
}
</script>
<style lang="scss" scoped>
</style>