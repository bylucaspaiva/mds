import { useEffect, useState } from "react";
import { Switch } from "../components/ui/switch"
import { useTheme } from "./theme-provider";

interface Props {
  className: string;
}

const ThemeSwitch = ({className}: Props) => {
  const [resolvedTheme, setResolvedTheme] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => setTheme(resolvedTheme ? "dark" : "light"), [resolvedTheme])

  
  console.log(theme)
  return (
    <div>
      <Switch className={className} checked={resolvedTheme} onCheckedChange={setResolvedTheme}/>
    </div>
  )
}

export default ThemeSwitch;