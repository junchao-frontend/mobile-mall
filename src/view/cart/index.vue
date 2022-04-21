<template>
    <sHeader name="购物车" />
    <div class="shopcart">
        <div v-if="counter.shopCounts > 0">
            <van-checkbox-group v-model="result" ref="checkboxGroup" @change="groupChange">
                <van-swipe-cell v-for="item in list" :key="item.goodsId" class="shop">
                    <van-checkbox :name="item.cartItemId"></van-checkbox>
                    <van-card :price="item.sellingPrice" :title="item.goodsName" class="goods-card"
                        :thumb="item.goodsCoverImg">
                        <template #footer>
                            <van-stepper v-model="item.goodsCount" />
                        </template>
                    </van-card>
                    <template #right>
                        <van-button square text="删除" type="danger" class="delete-button" />
                    </template>
                </van-swipe-cell>
            </van-checkbox-group>
        </div>
        <div v-else class="shopcart-img">
            <van-image fit="contain" width="200" height="200"
                src="https://s.yezgea02.com/1604028375097/empty-car.png" />
            <div class="shopcart-text">
                <span>购物车空空如也</span>
                <van-button round @click="toHome()">前往选购</van-button>
            </div>
        </div>
        <van-submit-bar :price="3000" button-text="提交订单">
            <van-checkbox v-model="checked" @click="allCheck()">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>
<script lang="ts">
import sHeader from '../../components/header.vue'
import { InitData } from '../../types/cart';
import { useCounterStore } from "../../store/index";
import { getCart, deleteCartItem, modifyCart } from '../../api/cart'
import { onMounted, defineComponent, reactive, toRefs, ref } from "vue";
import { useRouter } from 'vue-router';
export default defineComponent({
    components: {
        sHeader
    },
    setup(props, ctx) {
        const counter = useCounterStore()
        const router = useRouter()
        const data = reactive(new InitData())
        onMounted(() => {
            let params = {
                pageNumber: 1
            }
            getCart(params).then(res => {
                if (res.data.resultCode === 200) {
                    const cartData = res.data.data
                    data.list = cartData
                }
            })
        })
        const toHome = () => {
            router.push('/')
        }
        const allCheck = () => {
            if (data.checked) {
                data.list.forEach(item => {
                    data.result.push(item.cartItemId)
                })
            }else{
                data.result = []
            }
        }
        const groupChange = (res: any) => {
            console.log(res);
            
        }
        return {
            counter,
            toHome,
            allCheck,
            groupChange,
            ...toRefs(data)
        }
    }
})
</script>
<style scoped lang="less">
/deep/ .van-card__footer {
    margin-top: -25px;
}

.goods-card {
    margin: 0;
    background-color: #fff;
}

.delete-button {
    height: 100%;
}

.shopcart {
    margin-top: 15%;

    &-img {
        text-align: center;
    }

    &-text {
        span {
            font-size: 16px;
            margin-bottom: 15px;
        }

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .van-button {
            background-color: #1baeae;
            color: #fff;
            width: 130px;
        }
    }
}
</style>