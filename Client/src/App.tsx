import { ThemeProvider } from "./@/components/theme-provider";

import Navbar from "./@/components/navbar";
import MainContent from "./@/components/main-content";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Card } from "./@/components/ui/card";

function App() {
  // const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar className="px-4 md:px-20 shadow-md bg-background sticky top-0 z-50 h-14 flex justify-between items-center w-full opacity-100" />
        <div className="lg:mx-20 md:mx-14 mx-6">
          <MainContent className="mt-4 sm:col-span-7 col-span-5 z-0 " />
        </div>
        <Card className="fixed right-6 bottom-4 md:right-14  lg:right-20 ">
            <div className="flex items-center pl-2">
              <h1>Fale com um especialista</h1>
            <a href="https://api.whatsapp.com/send?phone=5541992242842&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento" target="_blank">
            <Icon icon="logos:whatsapp-icon" width="50" height="50" />
          </a>
            </div>
        </Card>
        
      </ThemeProvider>
    </>
  );
}

export default App;
