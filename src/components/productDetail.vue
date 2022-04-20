<template>
    <sHeader name="商品详情" />
</template>
<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import {getDetail} from '../api/good'
import sHeader from './header.vue'
export default defineComponent({
    components: {
        sHeader
    },
    setup() {
        onMounted(() => {
            let id = 10925
            getDetail(id).then(res => {
                // console.log(res);
                
            })
        })
    }
})
</script>