import { Separator } from "@radix-ui/react-separator";
import MessageForm from "./@/components/message-form";
import { ThemeProvider } from "./@/components/theme-provider";
import ThemeSwitch from "./@/components/theme-switch";
import { Icon } from "@iconify/react";
import ImageContainer from "./@/components/image-container";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./@/components/ui/scroll-area";

const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
        <main className="grid grid-cols-7">
          <div className="col-span-5">
            <h1>Acabamento profissional</h1>
            <p>Porcelanato</p>
            <p>Pinturas</p>
            <Separator className="my-4" />
            <ScrollArea>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-3">
                {urls.map((i) => (
                  <ImageContainer id={i} key={i} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
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
