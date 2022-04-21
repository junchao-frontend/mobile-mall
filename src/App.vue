
<template>
  <router-view />
</template>


<script lang="ts">
import { getCart } from "./api/cart";
import { onMounted } from "vue";
import { useCounterStore } from "./store/index";
export default {
  setup() {
    const counter = useCounterStore(); // 获取pinia实例
    onMounted(() => {
      let params = {
        pageNumber: 1
      }
      getCart(params).then(res => {
        if (res.data.resultCode === 200) {
          const cartData = res.data.data
          let shopCount = cartData.length
          counter.initCount(shopCount)
          
        }
      })
    })
    
  }
};
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
