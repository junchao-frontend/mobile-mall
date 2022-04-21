<template>
  <sHeader name="商品详情" />
  <div class="image">
    <van-image fit="contain" width="80%" height="80%" :src="goodsForm.goodsCoverImg" />
  </div>
  <div class="goods">
    <div class="goods-name">{{ goodsForm.goodsName }}</div>
    <div class="goods-kuaidi">免邮费 顺丰快递</div>
    <div class="goods-price">{{ "￥" + goodsForm.sellingPrice }}</div>
    <div class="product-intro">
      <ul>
        <li>概述</li>
        <li>参数</li>
        <li>安装服务</li>
        <li>常见问题</li>
      </ul>
      <div class="product-content" v-html="goodsForm.goodsDetailContent || ''"></div>
    </div>
  </div>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" />
    <van-action-bar-icon :badge="counter.shopCounts == 0 ? '' : counter.shopCounts" icon="cart-o" text="购物车" />
    <van-action-bar-button type="warning" @click="addShop" text="加入购物车" />
    <van-action-bar-button type="danger" text="立即购买" />
  </van-action-bar>
</template>
<script lang="ts">
import { useCounterStore } from "../store/index";
import { onMounted, defineComponent, reactive, toRefs, ref } from "vue";
import { useRoute } from "vue-router";
import { getDetail } from "../api/good";
import { addCart } from "../api/cart";
import sHeader from "./header.vue";
import { InitData } from "../types/product";
import { Toast } from 'vant'
export default defineComponent({
  components: {
    sHeader,
  },
  setup() {
    const route = useRoute();
    const data = reactive(new InitData());
    const counter = useCounterStore(); // 获取pinia实例
    let proId = route.params.id;
    onMounted(() => {
      let id = proId;
      getDetail(id).then((res) => {
        if (res.data.resultCode === 200) {
          const proData  = res.data.data
          data.goodsForm.goodsCoverImg = proData.goodsCoverImg;
          data.goodsForm.goodsDetailContent = proData.goodsDetailContent;
          data.goodsForm.goodsName = proData.goodsName;
          data.goodsForm.sellingPrice = proData.sellingPrice;
        }


      });
    });
    const addShop = () => {
      let data = {
        goodsCount: 1,
        goodsId: proId,
      };
      addCart(data).then(res => {
        if (res.data.resultCode === 200) {
          Toast.success('添加成功')
          counter.increment();
        }

      })
    };
    return {
      ...toRefs(data),
      counter,
      addShop,
    };
  },
});
</script>
<style lang="less" scoped>
@import "../common/style/mixin";

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
}

.product-intro {
  width: 100%;
  padding-bottom: 50px;

  ul {
    .fj();
    width: 100%;
    margin: 10px -12px;

    li {
      flex: 1;
      padding: 5px 0;
      text-align: center;
      font-size: 15px;
      border-right: 1px solid #999;
      box-sizing: border-box;

      &:last-child {
        border-right: none;
      }
    }
  }

  .product-content {
    padding: 0 10px;

    img {
      width: 100%;
    }
  }
}

.goods {
  margin-top: -20px;
  margin-left: 10px;

  &-name {
    padding: 5px;
    text-align: left;
    font-size: 18px;
  }

  &-kuaidi {
    padding: 5px;

    text-align: left;
    color: #999;
    font-size: 14px;
  }

  &-price {
    padding: 5px;
    text-align: left;
    font-size: 17px;
    color: red;
  }
}
</style>