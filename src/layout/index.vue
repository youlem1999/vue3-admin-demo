<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <n-scrollbar class="scrollbar">
        <Menu></Menu>
      </n-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div
      class="layout_tabbar"
      :class="{ fold: settingStore.fold ? true : false }"
    >
      <Tabbar></Tabbar>
    </div>
    <!-- 内容区 -->
    <div
      class="layout_main"
      :class="{ fold: settingStore.fold ? true : false }"
    >
      <Tabs></Tabs>
      <Main></Main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import Tabbar from '@/layout/tabbar/index.vue'
import Main from '@/layout/main/index.vue'
import Tabs from '@/layout/tabs/index.vue'
import useLayOutSettingStore from '@/store/modules/setting'

let settingStore = useLayOutSettingStore()
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $dark-bgColor;
    transition: all 0.3s;
    overflow: hidden;
    .scrollbar {
      width: 100%;
      //background-color: $dark-bgColor;
      height: calc(100vh - $base-menu-logo-height);
    }
  }
  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.3s;
    background-color: $dark-bgColor;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100vw - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    background-color: $dark-bgColor;
    padding: 20px;
    // 加滚动条
    overflow: auto;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
