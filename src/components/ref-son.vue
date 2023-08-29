<template>
  <div>
      姓名: {{person.name}}
      年龄: {{person.age}}
  </div>
  <button @click="addAge">点我年龄+1</button>
</template>

<script setup lang='ts'>
import {reactive,defineExpose} from 'vue'
interface Person {
    name: string,
    age: number
}
let person: Person = reactive({
    name: 'Mr zhao',
    age: 31
})

defineExpose(person)
const addAge = () => {
    person.age ++
}
</script>
<style lang="scss" scoped>
</style>