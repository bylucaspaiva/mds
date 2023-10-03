import MessageForm from "./@/components/message-form";
import { ThemeProvider } from "./@/components/theme-provider";

import Navbar from "./@/components/navbar";
import MainContent from "./@/components/main-content";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        
        <Navbar />
        <div className="grid grid-cols-7 px-20 z-0">
          <MainContent className="col-span-5 z-0 mr-4" />
          <MessageForm className="col-span-2 z-0 lg:fixed sm:relative top-14 right-20 lg:w-1/4 " />
        </div>
        <footer></footer>
    </ThemeProvider>
  );
}

export default App;
