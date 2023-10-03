import { Icon } from '@iconify/react/dist/iconify.js'
import ThemeSwitch from './theme-switch'

const Navbar = () => {
  return (
    <nav className="h-14 flex justify-between items-center w-full fixed top-0 z-10 px-20 shadow-md opacity-95">
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