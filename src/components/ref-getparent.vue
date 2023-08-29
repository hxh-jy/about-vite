<template>
  <div>
      {{age}}
      <button @click="getFateherInstance($parent)">点我获取父组件实例</button>
  </div>
</template>

<script setup lang='ts'>
import {ref,onMounted} from 'vue'
let age = ref(0)
let getFateherInstance = (parent: any) => {
    age.value = parent.parent.age
    console.log('获取到的父组件实例',parent)
    setTimeout(() => {
        parent.updatePrentname()
        age.value = parent.parent.age
    },3000)
}
</script>
<style lang="scss" scoped>
</style>