import { useEffect, useState } from "react";
import { Switch } from "../components/ui/switch"
import { useTheme } from "./theme-provider";

const ThemeSwitch = () => {
  const [resolvedTheme, setResolvedTheme] = useState(false);
  const {setTheme} = useTheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setTheme(resolvedTheme ? "dark" : "light"), [resolvedTheme])

  
  return (
    <div className="mt-1 mx-2">
      <Switch checked={resolvedTheme} onCheckedChange={setResolvedTheme}/>
    </div>
  )
}

export default ThemeSwitch;