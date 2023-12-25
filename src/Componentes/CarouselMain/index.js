import './style.css'
import gestao from '../../assets/eco_parailustrar_copia.jpg'
import logistica from '../../assets/logistica-reversa.webp'
import maquina from '../../assets/Descaracterizacao-de-Residuos.webp'
import logo from '../../assets/logo-conecta.png'
import Carousel from 'react-bootstrap/Carousel';

//import ExampleCarouselImage from '/components/ExampleCarouselImage';

function Slide(){
    return(
       
            <Carousel className='carousel'>
      <Carousel.Item interval={1000}>

        <img className='img-carousel' src={gestao} alt='logo'></img>
       
        <Carousel.Caption className='carousel-second'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img className='img-carousel logistica' src={logistica} alt='logo'></img>
        
        <Carousel.Caption className='carousel-second'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-carousel maquina' src={maquina} alt='logo'></img>
        
        <Carousel.Caption className='carousel-second    '>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
        
    )
}

export default Slide