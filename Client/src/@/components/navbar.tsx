import { Icon } from '@iconify/react/dist/iconify.js'
import ThemeSwitch from './theme-switch'

const Navbar = () => {
  return (
    <nav className="z-10 h-14 flex justify-between items-center w-full top-0 px-20 opacity-100">
          <h1 className="text-xl font-bold">mdsreformas</h1>
          <div className="flex items-center">
            <div className="flex items-center">
              <Icon icon="ic:round-whatsapp" width="30" height="30" />
              <Icon icon="mdi:instagram" width="30" height="30" />
            </div>
            <ThemeSwitch />
          </div>
        </nav>
  )
}

export default Navbar