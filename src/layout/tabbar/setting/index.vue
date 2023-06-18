<template>
  <n-button circle @click="updateRefsh">
    <template #icon>
      <n-icon :component="RefreshRound"></n-icon>
    </template>
  </n-button>
  <n-button circle  @click="fullScreen">
    <template #icon>
      <n-icon :component="FullscreenRound"></n-icon>
    </template>
  </n-button>
  <n-button circle>
    <template #icon>
      <n-icon :component="SettingsOutlined"></n-icon>
    </template>
  </n-button>
  <img class="userAva" src="@/assets/images/锅巴.gif" alt="" />
  <n-dropdown :options="options" :show-arrow="true" @select="handleSelect">
    <n-button icon-placement="right">
      <template #icon>
        <n-icon :component="KeyboardArrowDownRound"></n-icon>
      </template>
      <span>admin</span>
    </n-button>
  </n-dropdown>
</template>

<script lang="ts" setup>
import {
  RefreshRound,
  FullscreenRound,
  SettingsOutlined,
  KeyboardArrowDownRound,
  LogOutOutlined,
} from '@vicons/material'
import { rendericon,naiveui } from '@/utils/naiveui'
import useLayOutSettingStore from "@/store/modules/setting";

let settingStore = useLayOutSettingStore()
const options = [
  {
    label: '退出登录',
    key: 'logout',
    icon: rendericon(LogOutOutlined),
  },
]

// 刷新
const updateRefsh =() => {
  settingStore.refsh = !settingStore.refsh
}

// 全屏
const fullScreen = () => {
  // document.fullscreenElement 如果是全屏则返回true,反之false
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const handleSelect = (key:string|number) => {
  naiveui.message.success('退出成功')
}
</script>

<style lang="scss" scoped>
.n-button {
  margin-left: 5px;
}
.userAva {
  width: 24px;
  height: 24px;
  margin: 0 10px;
  border-radius: 50%;
}
</style>
