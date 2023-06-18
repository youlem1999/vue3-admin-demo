export const storage = {
  set(key: string, value: any) {
    localStorage.setItem(
      key,
      JSON.stringify({
        time: +new Date(),
        value,
      }),
    )
  },
  get(key: string, cycle = 2592000000) {
    cycle = +cycle
    if (isNaN(cycle)) cycle = 2592000000
    let data = localStorage.getItem(key)
    if (!data) return null
    let { time, value } = JSON.parse(data)
    if (+new Date() - time > cycle) {
      storage.remove(key)
      return null
    }
    return value
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
}
