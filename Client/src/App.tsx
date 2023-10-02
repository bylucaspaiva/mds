import MessageForm from "./@/components/message-form";
import { ThemeProvider } from "./@/components/theme-provider";
import ThemeSwitch from "./@/components/theme-switch";
import { Icon } from "@iconify/react";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container">
        <nav className="h-14 flex justify-between items-center">
          <h1 className="text-xl font-bold ">mdsreformas</h1>
          <div className="flex items-center">
            <div className="flex items-center">
              <Icon icon="mdi:instagram" width="30" height="30" />
            </div>
            <ThemeSwitch />
          </div>
        </nav>
        <main className="grid grid grid-cols-7">
          <div className="col-span-5">
            <h1>Acabamento profissional</h1>
            <p>Porcelanato</p>
            <p>Pinturas</p>
          </div>
          <div className="col-span-2">
            <MessageForm />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
