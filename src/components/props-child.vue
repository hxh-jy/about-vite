<template>
  <div>
      我是子组件通过props获取父组件传过来的值
      {{count}}
  </div>
</template>

<script setup lang='ts'>
import {defineProps,watch} from 'vue'
let props = defineProps({
    count: {
        type: Number,
        default: 0
    }
})

watch(props,(val) => {
    console.log('监听数据的变化*** 侦听器可以是返回值的getter函数也可以直接是ref',val)
},{immediate: true,deep: true})
</script>
<style lang="scss" scoped>
</style>