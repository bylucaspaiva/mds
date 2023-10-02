import { useEffect, useState } from "react";
import { Switch } from "../components/ui/switch"
import { useTheme } from "./theme-provider";

const ThemeSwitch = () => {
  const [resolvedTheme, setResolvedTheme] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => setTheme(resolvedTheme ? "dark" : "light"), [resolvedTheme])

  
  console.log(theme)
  return (
    <div className="mt-1">
      <Switch checked={resolvedTheme} onCheckedChange={setResolvedTheme}/>
    </div>
  )
}

export default ThemeSwitch;