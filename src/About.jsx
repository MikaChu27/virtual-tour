import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './App.css';



import img1 from './assets/img1.jpg';

const About = () => {


    return ( 
      <section id="about" className='background'> 
    <Container fluid className='background'>
        <div className='title-holder'>
            <h2>About Us</h2>
            <div className='subtitle'>
            learn more about us
        </div>
        </div>
        
      <Row>
        <Col sm={6}>
            <Image src={img1}/>
        </Col>
        <Col sm={6}>
              <p>Welcome to 4K Garden Resort, where luxury meets nature in perfect harmony. Nestled amidst lush greenery and 
                breathtaking landscapes, our resort offers an unparalleled escape from the hustle and bustle of everyday life. Whether you're seeking a tranquil 
                retreat, an adventure-filled getaway, or a romantic rendezvous, our resort caters to 
                all tastes and desires. </p>
                <p>With world-class amenities, impeccable service, and an eco-conscious ethos,
                 we strive to provide an unforgettable experience for every guest. Come explore our oasis of
                serenity and create memories that will last a lifetime at 4K Garden Resort.</p>
                
            </Col>
      </Row>
    </Container>
      </section>
     );
}
 
export default About;