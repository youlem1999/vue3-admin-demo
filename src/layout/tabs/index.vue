<template>
  <n-tag
    type="success"
    closable
    v-for="(item, index) in tagRoutes"
    :key="index"
    @close="handleClose"
    @click="handleClick"
  >
    {{item}}
  </n-tag>
</template>

<script lang="ts" setup>
import { watch, onMounted, ref, computed, nextTick, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { naiveui } from '@/utils/naiveui'

let $route = useRoute()

let tagRoutes = ref<any>([])
const filterTags = () => {
  tagRoutes.value.push($route.matched
    .filter((item) => item.children.length < 1)
    .map((item) => item.meta.title)[0])
}

watch(
  () => $route.fullPath,
  () => {
    nextTick(() => {
      filterTags()
    })
  },
)

const handleClose = () => {
  naiveui.message.info('我被关闭了')
}

const handleClick = () => {
  naiveui.message.info('我被点了')
}
</script>

<style lang="scss" scoped></style>
