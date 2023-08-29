<template>
  <div>
      接受子组件 pinia中count的值: {{store.counter}}
      <RefSon ref="son"/>
      <br/>

      <RefGetparent/>
  </div>
</template>

<script setup lang='ts'>
/**
 * 导入
 */
import {onMounted,ref,defineExpose,reactive} from 'vue'
import RefSon from '@/components/ref-son.vue'
import RefGetparent from '@/components/ref-getparent.vue'

import useStore from '../../store/store'
let store = useStore()
/**
 * 定义属性
 */

let son = ref()
interface Parent {
    name: string,
    age: number,
    relation: string
}
let parent: Parent = reactive({
    name: 'Zhao ba',
    age: 62,
    relation: 'father'
})
/**
 * 方法
 * 选项式api中对一些属性进行了绑定实例操作，
 * 组合式api中的setup函数的执行没有绑定实例
 * 因此组合式api中不可以用this 要通过导入的方式
 */
let updatePrentname = () => {
    parent.age = 65
}

defineExpose({
    parent,
    updatePrentname
})
/**
 * 生命周期函数
 */
onMounted(() => {
  console.log('测试ref属性',store,son.value.age)  
})
</script>
<style lang="scss" scoped>
</style>