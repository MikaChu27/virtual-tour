import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
import img10 from './assets/img10.jpg';




const imagesList = [
    {
      id: 1,
      src: img2,
      alt: "Image 1",
      subtitle: 'Branding'
    },
    {
      id: 2,
      src: img3,
      alt: "Image 2",
      subtitle: 'Branding'
    },
    {
      id: 3,
      src: img4,
      alt: "Image 3",
      subtitle: 'Branding'
    },
    {
        id: 4,
        src: img5,
        alt: "Image 3",
        subtitle: 'Branding'
      },
      {
        id: 5,
        src: img6,
        alt: "Image 3",
        subtitle: 'Branding'
      },
      {
        id: 6,
        src: img7,
        alt: "Image 3",
        subtitle: 'Branding'
      },
      {
        id: 7,
        src: img8,
        alt: "Image 3",
        subtitle: 'Branding'
      },
      {
        id: 8,
        src: img9,
        alt: "Image 3",
        subtitle: 'Branding'
      },
      {
        id: 9,
        src: img10,
        alt: "Image 3",
        subtitle: 'Branding'
      },
  ];

const Gallery = () => {
    return ( 

       
        <section id="gallery" className="block works-block">
        <Container fluid>
          <div className="title-holder">
            <h2 className='gallery-title'>Gallery</h2>
          </div>
          
         

          <Row className='portfoliolist'>
          {
            imagesList.map(Gallery => {
              return (
                <Col sm={4} key={imagesList.id}>
               
                <div className='portfolio-wrapper'>
                <img key={Gallery.id} src={Gallery.src} alt={Gallery.alt} />
                     <div className='label text-center'>
                       
                            <h3>{Gallery.subtitle}</h3>
                    
                        
                        </div>
                   
                        
                </div>
                    
                 
                </Col>
              );
            })
          }
        </Row>
    </Container>  
    </section>
         
        
              
     );

    }

 
export default Gallery;