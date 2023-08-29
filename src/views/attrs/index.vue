<template>
    <div class="father">
        <AttrsChild @click="handleClick" :count="count"/>
        <AttrsGrandSon :son="son"/>
        <br />
        <button @click="handleClick">点我{{count}}</button>
    </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'

import AttrsChild from '@/components/attrs-child.vue'
import AttrsGrandSon from '@/components/attrs-grandson.vue'
import $bus from '../../bus'

let count = ref(0)
let son = ref(0)
let handleClick = () => {
    count.value ++ 
    son.value --
}
</script>
<style lang="scss" scoped>
.father {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>