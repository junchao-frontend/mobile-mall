<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in carouselsData" :key="index">
      <van-image :src="item.carouselUrl" fit="contain" />
    </van-swipe-item>
  </van-swipe>
  <van-grid :border="false" :column-num="5">
    <van-grid-item @click="clickIcon" v-for="item in iconList" :key="item.categoryId">
      <van-image class="iconImg" width="35" height="35" :src="item.imgUrl" />
      <span>{{ item.name }}</span>
    </van-grid-item>
  </van-grid>
  <div class="good">
    <header class="good-header">新品上线</header>
    <div class="good-box">
      <div class="good-item" v-for="item in newGoodsesData" :key="item.goodsId" @click="goToDetail(item)">
        <img :src="item.goodsCoverImg" alt="" />
        <div class="good-desc">
          <div class="title">{{ item.goodsName }}</div>
          <div class="price">¥ {{ item.sellingPrice }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="good">
    <header class="good-header">热门商品</header>
    <div class="good-box">
      <div class="good-item" v-for="item in hotGoodsesData" :key="item.goodsId" @click="goToDetail(item)">
        <img :src="$filters.prefix(item.goodsCoverImg)" alt="" />
        <div class="good-desc">
          <div class="title">{{ item.goodsName }}</div>
          <div class="price">¥ {{ item.sellingPrice }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="good" :style="{ paddingBottom: '100px' }">
    <header class="good-header">最新推荐</header>
    <div class="good-box">
      <div class="good-item" v-for="item in recommendGoodsesData" :key="item.goodsId" @click="goToDetail(item)">
        <img :src="$filters.prefix(item.goodsCoverImg)" alt="" />
        <div class="good-desc">
          <div class="title">{{ item.goodsName }}</div>
          <div class="price">¥ {{ item.sellingPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getHome } from "../../api/home";
import { onMounted, toRefs, reactive } from "vue";
import { InitData, GoodsesInt } from "../../types/home";
import { Toast } from "vant";
import { useRouter } from 'vue-router'
export default {
  components: {},
  setup(props: any, ctx: any) {
    const router = useRouter()
    const data = reactive(new InitData());
    const clickIcon = () => {
      Toast("敬请期待");
    };
    // 点击商品
    const goToDetail = (item: GoodsesInt) => {
      console.log(item);
      router.push({ path: `/product/${item.goodsId}` })
    };
    onMounted(() => {

      let params = {};
      getHome(params).then((res) => {
        if (res.data.resultCode === 200) {
          const homeData = res.data.data     
          data.carouselsData = homeData.carousels;
          data.newGoodsesData = homeData.newGoodses;
          data.hotGoodsesData = homeData.hotGoodses;
          data.recommendGoodsesData = homeData.recommendGoodses;
        }
      });
    });
    return {
      ...toRefs(data),
      clickIcon,
      goToDetail,
    };
  },
};
</script>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
  height: 100%;
  // line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
}

.iconImg {
  margin-bottom: 3px;
}

.good-header {
  background: #f9f9f9;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #1baeae;
  font-size: 16px;
  font-weight: 500;
}

.good {
  .good-header {
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #1baeae;
    font-size: 16px;
    font-weight: 500;
  }

  .good-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .good-item {
      box-sizing: border-box;
      width: 50%;
      border-bottom: 1px solid #e9e9e9;
      padding: 10px 10px;

      img {
        display: block;
        width: 120px;
        margin: 0 auto;
      }

      .good-desc {
        text-align: center;
        font-size: 14px;
        padding: 10px 0;

        .title {
          color: #222333;
        }

        .price {
          color: #1baeae;
        }
      }

      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
    }
  }
}
</style>