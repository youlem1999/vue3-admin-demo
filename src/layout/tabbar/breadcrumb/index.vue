<template>
  <n-icon
    size="25"
    :component="settingStore.fold ? MenuOpenFilled : MenuFilled"
    @click="changeIcon"
  ></n-icon>
  <n-breadcrumb>
    <n-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
    >
      <router-link :to="item.path">
        <n-icon :component="item.meta.icon" />
        <span style="margin: 0 3px; vertical-align: middle">
          {{ item.meta.title }}
        </span>
      </router-link>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script lang="ts" setup>
import { MenuFilled, MenuOpenFilled } from '@vicons/material'
import { useRoute } from 'vue-router'
import useLayOutSettingStore from '@/store/modules/setting'

let $route = useRoute()
let settingStore = useLayOutSettingStore()
const changeIcon = () => {
  settingStore.fold = !settingStore.fold
}
</script>

<style lang="scss" scoped>
.n-icon{
  cursor: pointer;
  margin-right: 6px;
  color: $dark-fontColor;
}
</style>
