
import Carousel from 'react-bootstrap/Carousel';
import hero1 from './assets/hero1.jpg';
import hero2 from './assets/hero2.jpg';
import hero3 from './assets/hero3.jpg';




function CarouselPage (){
    return(

        <div>
        <Carousel sm={6}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero1}
            alt="First slide"
          />
          <Carousel.Caption>
            
           <a className="btn btn-primary" href={CarouselPage.link}>Experience Virtual Tour <i className="fas fa-chevron-right"></i></a>
    
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero2}
            alt="Second slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero3}
            alt="Third slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></div>
    )

}

export default CarouselPage