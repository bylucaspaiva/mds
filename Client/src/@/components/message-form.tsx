import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

interface Props {
  className: string
}


const MessageForm = ({className}: Props) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Faça um orçamento</CardTitle>
        <CardDescription>É sem compromisso 😅</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className=" w-full items-center gap-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu Nome" type='text'/>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Seu Email" type='email'/>
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" placeholder="Seu Whats" type='tel' />
            </div>
            <div className="space-y-1">
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