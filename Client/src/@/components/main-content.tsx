import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Separator } from '@radix-ui/react-separator'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import ImageContainer from './image-container'
import { ScrollBar } from './ui/scroll-area'
import ImageBlock from './image-block'

import porcelanato from './../../assets/materialsImages/porcelanato.jpg'
import revestimento from './../../assets/materialsImages/revestimentos.jpg'
import churrasqueira from './../../assets/materialsImages/churrasqueira.jpg'
import escada from './../../assets/materialsImages/escadas.jpg'
import sacada from './../../assets/materialsImages/sacadas.jpg'
import banheiro from './../../assets/materialsImages/banheiro.jpg'




const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const MainContent = () => {
  return (
    <div className=" col-span-5 mx-3 pl-9">
            <div className="grid grid-cols-1">
              <Card className="col-span-1 p-auto mb-4">
                <CardHeader>
                  <CardTitle className="mx-auto">
                    Tudo em reformas e acabamentos
                  </CardTitle>
                  <CardDescription className="mx-auto">
                    Equipe formada por profissionais de qualidade
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="mx-auto mb-4">
                    Entregamos soluções em
                  </CardTitle>
                  <CardContent className="grid grid-cols-2 lg-grid-cols-4 md-grid-cols-2 sm-grid-cols-1">
                    <ImageBlock url={porcelanato} description='Porcelanato'/>
                    <ImageBlock url={revestimento} description='Revestimento'/>
                    {/* <CardDescription className="col-span-1 mx-auto">Drywall</CardDescription>  */}
                    {/* <CardDescription className="col-span-1 mx-auto">Gesso</CardDescription> */}
                  </CardContent>
                </CardHeader>
              </Card>

              <Card className="col-span-1 mt-4">
                <CardHeader>
                  <CardTitle className="mx-auto mb-4">
                    Reforma de imóveis e ambientes
                  </CardTitle>
                  <CardContent className="grid grid-cols-4 lg-grid-cols-4 md-grid-cols-2 sm-grid-cols-1">
                    <ImageBlock url={sacada} description='Sacadas'/>
                    <ImageBlock url={churrasqueira} description='Churrasqueiras'/>
                    <ImageBlock url={escada} description='Escadas'/>
                    <ImageBlock url={banheiro} description='Banheiros'/>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
            <Separator className="my-4" />
            <ScrollArea>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {urls.map((i) => (
                  <ImageContainer id={i} key={i} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
                {urls.map((i) => (
                  <ImageContainer id={i} key={i} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
  )
}

export default MainContent