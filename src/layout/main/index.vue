<template>
  <router-view v-slot="{ Component }">
    <transition appear name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { watch, ref, nextTick } from 'vue'
import useLayOutSettingStore from '@/store/modules/setting'

let settingStore = useLayOutSettingStore()

let flag = ref(true)
// 监听仓库的refsh是否发生变化,刷新页面
watch(
  () => settingStore.refsh,
  () => {
    flag.value = false
    // 使用nextTick,dom结构变化后调用
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
