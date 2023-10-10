import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Separator } from '@radix-ui/react-separator'
// import ImageContainer from './image-container'
import ImageBlock from './image-block'

import porcelanato from './../../assets/materialsImages/porcelanato.jpg'
import revestimento from './../../assets/materialsImages/revestimentos.jpg'
import churrasqueira from './../../assets/materialsImages/churrasqueira.jpg'
import escada from './../../assets/materialsImages/escadas.jpg'
import sacada from './../../assets/materialsImages/sacadas.jpg'
import banheiro from './../../assets/materialsImages/banheiro.jpg'

// const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface Props {
  className: string
}

const MainContent = ({className}: Props) => {
  return (
    <main className={className}>
              <Card className="mb-4 shadow-md">
                <CardHeader>
                  <CardTitle className="mx-auto">
                    Tudo em reformas e acabamentos
                  </CardTitle>
                  <CardDescription className="mx-auto">
                    Equipe formada por profissionais de qualidade
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className='shadow-md'>
                <CardHeader>
                  <h1 className="md:mx-auto lg:mx-auto mb-4 sm:text-base md:text-lg lg:text-xl font-semibold">
                    Entregamos soluções em
                  </h1>
                  <CardContent className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                    <ImageBlock url={porcelanato} description='Porcelanato'/>
                    <ImageBlock url={revestimento} description='Revestimento'/>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card className="mt-4 shadow-md">
                <CardHeader>
                  <h1 className="mx-auto mb-4 sm:text-base md:text-lg lg:text-xl font-semibold">
                    Reforma de imóveis e ambientes
                  </h1>
                  <CardContent className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                    <ImageBlock url={sacada} description='Sacadas'/>
                    <ImageBlock url={churrasqueira} description='Churrasqueiras'/>
                    <ImageBlock url={escada} description='Escadas'/>
                    <ImageBlock url={banheiro} description='Banheiros'/>
                  </CardContent>
                </CardHeader>
              </Card>
            <Separator className="my-4" />

              {/* <Card className="p-4 shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                
                {urls.map((i) => (
                    <ImageContainer id={i} key={i} />
                ))}
              </Card> */}
          </main>
  )
}

export default MainContent