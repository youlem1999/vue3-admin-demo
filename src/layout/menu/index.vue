<template>
  <n-menu
    :collapsed="settingStore.fold"
    :options="menuOptions"
    :expanded-keys="expandKeys"
    :on-update:expanded-keys="updateExpandKeys"
    :value="currentMenu"
    :on-update:value="updateValue"
  />
</template>

<script lang="ts" setup>
import useUserStore from '@/store/modules/user'
import type { MenuOption } from 'naive-ui'
import { useRoute } from 'vue-router'
import { naiveui } from '@/utils/naiveui'
import useLayOutSettingStore from '@/store/modules/setting'
import { renderMenuLabel, renderIcon } from '@/utils/naiveui'
import { onMounted } from 'vue'
import { useMenu } from '@/utils/useMenu'

const { menuOptions, expandKeys, updateExpandKeys, currentMenu, updateValue } =
  useMenu()
let userStore = useUserStore()
const $route = useRoute()
let settingStore = useLayOutSettingStore()

const handleUpdateValue = (key: string, item: MenuOption) => {
  naiveui.message.info('[onUpdate:value]: ' + JSON.stringify(key))
  naiveui.message.info('[onUpdate:value]: ' + JSON.stringify(item))
}
</script>

<style lang="scss" scoped></style>
