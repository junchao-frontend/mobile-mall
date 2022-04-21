<template>
  <div>
    <div>
      <router-view />
    </div>
    <div class="app-bottom">
      <van-tabbar route v-model="active">
        <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart" :badge="counter.shopCounts == 0 ? '' : counter.shopCounts">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script lang="ts">
import { useCounterStore } from "../store/index";
import { ref } from "vue";
export default {
  setup() {
    const counter = useCounterStore(); // 获取pinia实例
    const active = ref(0);
    return {
      active,
      counter
    };
  },
};
</script>
<style scoped>
.app-bottom {
  padding-bottom: 30px;
}
</style>