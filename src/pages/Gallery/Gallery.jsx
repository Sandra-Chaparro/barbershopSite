import { React, useEffect } from "react";
import "./Gallery.css";

export default function Gallery() {
    const images = [
        "/images/client1.jpg",
        "/images/client2.jpg",
        "/images/client3.jpg",
        "/images/client4.jpg",
        "/images/client5.jpg",
        "/images/client6.jpg",
        "/images/client7.jpg",
        "/images/client8.jpg",
        "/images/client9.jpg",
        "/images/client10.jpg",
        "/images/client12.jpg",
        "/images/client13.jpg",
        "/images/client14.jpg",
        // Add more image paths
      ];
      useEffect(() => {
        const galleryItems = document.querySelectorAll(".gallery-item");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("active");
              } else {
                entry.target.classList.remove("active");
              }
            });
          },
          { threshold: 0.5 } // Trigger when 50% of the image is visible
        );
    
        galleryItems.forEach((item) => observer.observe(item));
    
        return () => {
          galleryItems.forEach((item) => observer.unobserve(item));
        };
      }, []);
  return (
    <div className="galleryContainer">
       <h3 className='gallery-title'>Gallery</h3>
      <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery item ${index + 1}`} className="gallery-image" />
        </div>
      ))}
    </div>
  </div>
  )
}
