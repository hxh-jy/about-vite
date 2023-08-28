<template>
    <div class="father">
        <MittChild />
        <br />
        <MittTwo />
    </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'

import MittOne from '@/components/mitt1.vue'
import MittTwo from '@/components/mitt2.vue'

</script>
<style lang="scss" scoped>
.father {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>