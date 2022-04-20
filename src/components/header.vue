<template>
  <header class="simple-header van-hairline--bottom">
    <van-icon name="arrow-left" class="icon" @click="goBack" />
    <!-- <i v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> -->
    <div class="simple-header-name">{{ name }}</div>
    <van-icon name="ellipsis" />
  </header>
</template>
<script lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  setup(props, ctx) {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    return {
      goBack,
    };
  },
};
</script>
<style lang="less" scoped>
@import "../common/style/mixin";
.simple-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  .fj();
  .wh(100%, 44px);
  line-height: 44px;
  padding: 0 10px;
  .boxSizing();
  color: #252525;
  background: #fff;
  .simple-header-name {
    font-size: 14px;
  }
  .van-icon {
    line-height: 44px;
    font-size: 16px;
  }
}
</style>