import { ThemeProvider } from "./@/components/theme-provider";

function App() {
  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <nav className="container h-14 flex">
      <h1 className="text-3xl font-bold underline">MDS Reformas</h1>
      <h1>teste</h1>

    </nav>
</ThemeProvider>
}

export default App;
