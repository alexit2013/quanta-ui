import Header from './components/header'
import Menu from './components/menu'
import MenuItem from './components/menu-item'

const components = [Header, Menu, MenuItem]

const install = function (Vue, options = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export {
  install,
  Header,
  Menu,
  MenuItem
}

export default {
  install
}
