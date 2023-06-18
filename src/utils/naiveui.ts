import type { DialogApiInjection } from 'naive-ui/es/dialog/src/DialogProvider'
import type { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider'
import type { NotificationApiInjection } from 'naive-ui/es/notification/src/NotificationProvider'
import type{LoadingBarApiInjection} from "naive-ui/es/loading-bar/src/LoadingBarProvider";
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {h, Component } from 'vue'

interface NaiveUI {
  message: MessageApiInjection
  dialog: DialogApiInjection
  notification: NotificationApiInjection
  loadingBar:LoadingBarApiInjection
}
export const naiveui: NaiveUI = {
  //@ts-ignore
  message: {},
  //@ts-ignore
  dialog: {},
  //@ts-ignore
  notification: {},
  //@ts-ignore
  loadingBar:{},
}

export function renderMenuLabel(route: any) {
  if (route.meta.url) {
    return h(
      'a',
      {
        href: route.meta.url,
        target: '_black',
      },
      { default: () => route.meta.title },
    )
  }
  return h(
    RouterLink,
    {
      to: {
        name: route.children ? '' : route.name,
      },
    },
    { default: () => route.meta.title },
  )
}

export function renderIcon(route:any) {
  return h(NIcon, null, { default: () => h(route.meta.icon as Component) })
}

export const rendericon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

