import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import CarouselPage from './CarouselPage.jsx'
import About from './About.jsx'
import Quote from './Quote.jsx'
import Gallery from './Gallery.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  

    <div className="Header">
      <header id="header">
        <Header />
      </header>
      </div>

      <main>
      <CarouselPage/>
      <About/>
      <Quote/>
      <Gallery/>
   
   
      </main>

     


  </React.StrictMode>,
)
