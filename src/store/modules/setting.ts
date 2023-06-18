// layout相关配置的仓库
import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //控制菜单折叠还是收起
      refsh: false, //控制是否刷新页面
    }
  },
  actions: {},
  getters: {},
})

export default useLayOutSettingStore