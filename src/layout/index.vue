<template>
  <div>
    <div>
      <router-view />
    </div>
    <div class="app-bottom">
      <van-tabbar route v-model="active">
        <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
};
</script>
<style scoped>
.app-bottom {
  padding-bottom: 30px;
}
</style>