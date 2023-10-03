import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

const MessageForm = () => {
  return (
    <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>Faça um orçamento</CardTitle>
        <CardDescription>É sem compromisso 😅</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu Nome" type='text'/>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Seu Email" type='email'/>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" placeholder="Seu Whats" type='tel' />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Descrição do orçamento" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Enviar</Button>
      </CardFooter>
    </Card>
  )
}

export default MessageForm