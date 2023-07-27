import React, { useState, useEffect } from "react";
import './carosel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getMovies } from "../../utilis/utilities";
import { Carousel } from 'react-responsive-carousel';
const IMAGE_BASE_URL= process.env.REACT_APP_IMAGE_BASE_URL;





const Carousels = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index){
      setCurrentIndex(index)
    }
    useEffect(() => {
      (async() => {
        const images = await getMovies();
        setImages(images.results.slice(0, 4));
         console.log({ images });
      })();
    }, []);
    const carouselSlides = images.map((image) =>(
      <div className="resize" key={image.alt}>
        <img  className="we"
          src={`${IMAGE_BASE_URL}${image.poster_path}`} alt={image.title}/>
           <p className="title">{image.title}</p>
         <p>{image.overview}</p>
         <p>{image.release_date}</p>
      </div>
    ))
    return (
  <Carousel
  showArrows={true}
  autoPlay ={true}
  infiniteLoop ={true}
   selectedItem={images[currentIndex]}
  onChange={handleChange}
  showThumbs={false} 
  className="caro">
    {carouselSlides}
  </Carousel>
  );
  };
  export default Carousels;