import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Quotebackground2 from './assets/Quotebackground2.jpg';
import Quotebackground3 from './assets/Quotebackground3.jpg';

const Quote = () => {
    return ( 
  
  <section className='quote' >

   <Container fluid>
              
    <Carousel className='block about-block'>
      
      <Carousel.Item className='quote-img'>
        <img
          className="d-block w-100"
          src={Quotebackground2}
          alt="Quote background for 4K Garden"
        />
        <Carousel.Caption>
        <h5>Experience the grandeur of 4K Garden Resort swimming experience!</h5>
          <p>Relax your body and mind through our crystal blue swimming pools. It's never too late for peace and relaxation.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Quotebackground3}
          alt="Quote background for 4K Garden"
        />
        <Carousel.Caption>
        <h5>Experience the grandeur of 4K Garden Resort swimming experience!</h5>
          <p>Relax your body and mind through our crystal blue swimming pools. It's never too late for peace and relaxation.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </Container>
    <div>
    
    </div>
    </section>
       
     );
}
 
export default Quote;