import type { Ref } from 'vue'
import {ref, watch, h, Component} from 'vue'
import {MenuOption, NIcon} from 'naive-ui'
import { constantRoute as routes } from '@/router/routes'
import { RouteRecordRaw, useRoute, RouterLink } from 'vue-router'

export interface UserMenu {
  /**
   * 菜单选项
   */
  menuOptions: Ref<MenuOption[]>
  /**
   * 展开的子菜单标识符数组
   */
  expandKeys: Ref<string[]>
  /**
   * 更改子菜单标识符数组回调方法
   */
  updateExpandKeys: (keys: string[]) => void
  /**
   * 当前选中的菜单
   */
  currentMenu: Ref<string>
  /**
   * 修改选中菜单时的回调方法
   */
  updateValue: (key: string) => void
}


const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}


/**
 * 判断路由是否只有一个子路由
 * @param route  路由
 * @returns  如果该路由只有一个子路由，则返回 true；否则返回 false
 */
const isSingleChildren = (route: RouteRecordRaw): boolean => {
  return route?.children?.length === 1
}

/**
 * 过滤路由配置中需要在菜单中隐藏的路由
 * @param routes 路由列表
 * @returns 路由列表
 */
const filterHiddenRouter = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
  return routes.filter((item: RouteRecordRaw) => {
    return !item.meta?.hidden
  })
}

/**
 * 将路由信息转换为菜单信息
 * @param route  路由信息
 * @returns   菜单信息
 */
const getMenuOption = (route: RouteRecordRaw): MenuOption | undefined => {
  // @ts-ignore
  const routeInfo = isSingleChildren(route) ? route.children[0] : route
  const menuOption: MenuOption = {
    label: () => {
      if (routeInfo.children && Array.isArray(routeInfo.children)) {
        return routeInfo.meta?.title
      } else {
        return h(
          RouterLink,
          { to: { name: routeInfo.name } },
          {
            default: () => routeInfo.meta?.title,
          },
        )
      }
    },
    icon: routeInfo.meta?.icon ? renderIcon(routeInfo.meta?.icon as Component) : undefined,
    key: routeInfo.name as string,
  }
  if (routeInfo.children && routeInfo.children.length > 0) {
    menuOption.children = getMenuOptions(routeInfo.children)
  }
  return menuOption
}

const getMenuOptions = (routes: RouteRecordRaw[]): MenuOption[] => {
  let menuOptions: MenuOption[] = []
  filterHiddenRouter(routes).forEach((route: RouteRecordRaw) => {
    // @ts-ignore
    const menuOption = getMenuOption(route)
    if (menuOption) {
      menuOptions.push(menuOption)
    }
  })
  return menuOptions
}

export function useMenu(): UserMenu {
  const menus: MenuOption[] = getMenuOptions(routes)
  /**
   * 菜单选项
   */
  const menuOptions = ref(menus)

  /**
   * 展开的子菜单标识符数组
   */
  const expandKeys: Ref<string[]> = ref<string[]>([])

  /**
   * 当前菜单
   */
  const currentMenu: Ref<string> = ref<string>('')

  const route = useRoute()
  /**
   * 监听路由变化
   */
  watch(
    () => route.path,
    () => {
      routeChanged()
    },
    { immediate: true },
  )

  /**
   * 判断路由是否包含在菜单列表中
   *
   * @param routeName 路由名称
   * @param menuList  菜单列表
   * @returns 如果包含则返回 true；否则返回 false
   */
  function menuContains(routeName: string, menuList: MenuOption[]): boolean {
    for (let menu of menuList) {
      if (menu.key === routeName) {
        return true
      }
      if (menu.children && menu.children.length > 0) {
        const childMenuContains = menuContains(routeName, menu.children)
        if (childMenuContains) {
          return true
        }
      }
    }
    return false
  }

  /**
   * 路由发生变化时的回调
   */
  function routeChanged(): void {
    // 获取匹配到的路由列表
    const matched = route.matched
    // 获取匹配到路由名称
    const matchedNames = matched
      .filter((it) => menuContains(it.name as string, menus))
      .map((it) => it.name as string)
    const matchLen = matchedNames.length
    const matchExpandKeys = matchedNames.slice(0, matchLen - 1)
    const openKey = matchedNames[matchLen - 1]
    expandKeys.value = matchExpandKeys
    currentMenu.value = openKey
  }

  /**
   * 更改子菜单标识符数组回调方法
   */
  function updateExpandKeys(keys: string[]): void {
    expandKeys.value = keys
  }

  /**
   * 选中的菜单发生改变
   */
  function updateValue(key: string): void {
    currentMenu.value = key
  }

  return {
    menuOptions,
    expandKeys,
    updateExpandKeys,
    currentMenu,
    updateValue,
  } as UserMenu
}
