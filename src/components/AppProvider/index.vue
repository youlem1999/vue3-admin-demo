<template>
  <n-config-provider :theme="darkTheme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot></slot>
            <NaiveProviderContent />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { defineComponent, h } from 'vue'
import { darkTheme } from 'naive-ui'
import { useLoadingBar, useDialog, useMessage, useNotification } from 'naive-ui'
import { naiveui } from '@/utils/naiveui'

function setupNaiveTools() {
  naiveui.message = useMessage()
  naiveui.notification = useNotification()
  naiveui.dialog = useDialog()
  naiveui.loadingBar = useLoadingBar()
}

const NaiveProviderContent = defineComponent({
  setup() {
    setupNaiveTools()
  },
  render() {
    return h('div')
  },
})
</script>

<style scoped></style>
