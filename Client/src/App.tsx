import { ThemeProvider } from "./@/components/theme-provider";
import ThemeSwitch from "./@/components/theme-switch";

function App() {
  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <nav className="container h-14 flex justify-between items-center">
      <h1 className="text-xl font-bold ">mdsreformas</h1>
      <ThemeSwitch className=""/>
    </nav>
</ThemeProvider>
}

export default App;
