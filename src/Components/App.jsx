import { Button, ButtonImg, DivConte, DivImg, DivPreco, DivPrincipal, Img, Preco, Span, Texto, TextoInicio, TituloPrincipal } from "../style/App";
import Img1 from '../../images/image-product-desktop.jpg'
import Icon from '../../images/icon-cart.svg'

const App = () => {
    return(
       <DivPrincipal>
         <DivImg>
         <Img src={Img1}></Img>
         </DivImg>
         <DivConte>
            <TextoInicio>P E R F U M E</TextoInicio>
            <TituloPrincipal>Gabrielle Essence Eau <br></br> De Parfum</TituloPrincipal>
            <Texto>A floral, solar and voluptuous interpretation composed by lorem, ipsum dolor sit amet consectetur adipisicing elit. </Texto>
            <DivPreco>
            <Preco>$149.99</Preco>
            <Span>$169.99</Span>
            </DivPreco>
            <Button><ButtonImg src={Icon}></ButtonImg> Add to Cart</Button>
         </DivConte>

       </DivPrincipal>
    )
}

export default App;