import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeSwitch from "./theme-switch";
import DialogForm from "./dialog-form";

interface Props {
  className: string;
}

const Navbar = ({ className }: Props) => {
  return (
    <nav className={className}>
      <h1 className="text-xl font-bold">mdsreformas</h1>
      <div className="flex items-center">
        <div className="flex items-center">
            <Icon icon="mdi:instagram" width="30" height="30" />   
        </div>
        <ThemeSwitch />
        <DialogForm />
      </div>
    </nav>
  );
};

export default Navbar;
