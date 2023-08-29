<template>
  <div>
      我是子组件，给父组件传一个自定义事件 {{person.name}}
      <button @click="handleClick">点我</button>
  </div>
</template>

<script setup lang='ts'>
/**
 *  reactive不允许传入原始值，并没有和ref一样检测到原始类型之后做对应的转换
 * reactive 检测的是对象和数组
 * ref 即可以检测原始类型，也可以检测对象类型
 * ref 检测对象后内部相当于调用的是reactive的逻辑
 * ref 响应使用的是Object.defineProperty 的get set方式
 * reactive 响应使用的是proxy方式
 */
import {defineEmits, reactive} from 'vue'
let person = reactive({
    name: 'Mr zhao',
    sex: 'male',
    age: 23
})
let $emit = defineEmits()
let handleClick = () => {
    $emit('handleClick',person)
}
</script>
<style lang="scss" scoped>
</style>