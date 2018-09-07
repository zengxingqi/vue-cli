import LS from './ls'
const setLs = (name, value, expiry = 72000000) => {
  LS.set(name, value, expiry)
}
const getLs = (name) => LS.get(name)
const removeLs = (name) => {
  LS.remove(name)
}
const clearLs = () => {
  LS.clear()
}
export default {
  setLs,
  getLs,
  removeLs,
  clearLs
}
