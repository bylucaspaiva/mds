import MessageForm from "./@/components/message-form";
import { ThemeProvider } from "./@/components/theme-provider";

import Navbar from "./@/components/navbar";
import MainContent from "./@/components/main-content";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <div className="container">
        <main className="grid grid-cols-7 m-0 relative sm-grid-cols-1 top-14 z-0">
          <MainContent />
          <div className="col-span-2 m-0 md:fixed md:top-0 md:right-0 md:mt-10 md:mr-4 md:p-4 hidden md:block">
            <MessageForm />
          </div>
        </main>
        <footer></footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
