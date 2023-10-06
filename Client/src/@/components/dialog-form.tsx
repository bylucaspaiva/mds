import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";

const DialogForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
          <Button className="h-10">
             <h1 className="hidden sm:block">Faça um orçamento</h1> 
             <Icon icon="ic:sharp-message" className="sm:ml-2" width={24} /> 
          </Button>
      </DialogTrigger>

      <DialogContent>
        <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-[450px]">
          <CardHeader>
            <CardTitle>Faça um orçamento</CardTitle>
            <CardDescription>É sem compromisso 😅</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="px-4 md:px-0 w-full items-center gap-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu Nome" type="text" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Seu Email" type="email" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="Seu Whats" type="tel" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Descrição do orçamento" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between mt-2 sm:md-4">
            <Button className="ml-auto">Enviar</Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
