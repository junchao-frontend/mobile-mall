<template>
  <div class="login-box">
    <s-header name="登录"></s-header>
    <van-image
      class="login-img"
      width="150"
      height="150"
      src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
      fit="contain"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script lang="ts">
import sHeader from "../../components/productDetail.vue";
import { reactive, toRefs, ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import md5 from "js-md5"
import {login} from '../../api/user'
export default defineComponent({
  components: {
    sHeader,
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      username: '',
      password: ''
    })
    const onSubmit = () => {
      const loginData = {
        loginName: data.username,
        passwordMd5: md5(data.password)
      }
      login(loginData).then(res => {
        const token = res.data
        sessionStorage.setItem('token',token)
        router.push('/')
      })
    }
    return {
      ...toRefs(data),
      onSubmit
    };
  },
});
</script>
<style scoped>
.login-img {
  position: relative;
  left: 50%;
  margin-top: 90px;
  margin-left: -60px;
}
.van-button{
  border: unset;
  color: #fff;
  background-color: #1baeae;
}
</style>