<template>
  <div class="attrs-child">
    测试儿子组件
  </div>
</template>

<script setup lang='ts'>
import {useAttrs,onMounted} from 'vue'
let $attrs = useAttrs()
onMounted(() => {
  console.log('useAttrs',$attrs.onClick)
})
</script>
<style lang="scss" scoped>
.attrs-child {
    background-color: blue;
    width: 100px;
    height: 200px;
}
</style>