<template>
  <div>同层组件</div>
</template>

<script setup lang='ts'>
import mitt from 'mitt'
import {ref} from 'vue'
let count = ref(0)

const $emit = mitt()
$emit.emit('count',count)
</script>
<style lang="scss" scoped>
</style>