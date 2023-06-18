<template>
  <div class="container">
    <div class="login-box">
      <div class="login-left">
        <img style="width: 100px" src="@/assets/images/vite.svg" alt="" />
      </div>
      <n-form
        ref="formRef"
        :inline="false"
        :label-width="80"
        :model="formValue"
        :rules="rules"
      >
        <n-form-item label="用户名" label-placement="left" path="name">
          <n-input placeholder="请输入用户名" v-model:value="formValue.name" />
        </n-form-item>
        <n-form-item label="密码" label-placement="left" path="password">
          <n-input
            placeholder="请输入您的密码"
            type="password"
            v-model:value="formValue.password"
          />
        </n-form-item>
        <n-form-item>
          <n-button color="#ff69b4" @click="handleValidateClick">登录</n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import {useRouter} from "vue-router";
import { FormInst } from 'naive-ui'
import type { loginFormData } from '@/api/user/type'
import useUserStore from '@/store/modules/user'
import {naiveui} from '@/utils/naiveui'

let $router = useRouter()
let userStore = useUserStore()
const formRef = ref<FormInst | null>(null)
let formValue = reactive<loginFormData>({
  name: 'admin',
  password: '123456',
})

let rules = {
  name: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: ['input', 'blur'],
  },
}

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      try {
        await userStore.userLogin(formValue)
        $router.push('/')
        naiveui.notification['success']({
          content: '欢迎',
          meta: '登陆成功',
          duration: 2000,
          keepAliveOnHover: true,
        })
      } catch (error) {
        naiveui.notification['error']({
          content: '登陆失败',
          meta: (error as Error).message,
          duration: 2000,
          keepAliveOnHover: true,
        })
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    width: 600px;
    height: 300px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    background: rgb(255 255 255 / 0.2);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: (0 0 #000, 0 0 #000), (0 0 #0000, 0 0 #0000),
      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    .login-left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .n-form {
      flex: 1.5;
      :deep(.n-form-item-label) {
        text-align: left;
      }
      .n-button {
        margin: 0 0 0 100px;
        width: 200px;
      }
    }
  }
}
</style>
