import { ThemeProvider } from "./@/components/theme-provider";

import Navbar from "./@/components/navbar";
import MainContent from "./@/components/main-content";

function App() {
  // const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="px-20">
          <Navbar className="bg-background sticky top-0 z-50 h-14 flex justify-between items-center w-full opacity-100" />
          <MainContent className=" top-14 sm:col-span-7 col-span-5 z-0 " />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
