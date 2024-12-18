import React, { useState } from "react";
import people from "./data";
import "./reviews.css"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0); 
  const { id, name, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX); // Get the initial touch position
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX; // Get the final touch position
    if (touchStart - touchEnd > 50) {
      nextPerson(); // Swipe left to go to the next review
    }
    if (touchStart - touchEnd < -50) {
      prevPerson(); // Swipe right to go to the previous review
    }
  };

  const minIndex=0;
  const maxIndex=people.length-1;

  
  // const getRandomPerson=()=>{
  //   const getRandomIntInclusive=(min, max) =>{
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  //   }

  //   let randomIndex=getRandomIntInclusive(minIndex, maxIndex);
  //   if (randomIndex===index){
  //     randomIndex=index+1
  //   }
  //   setIndex(checkNumber(randomIndex));

  // }
  

  return (
    <article className="review" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="img-container">
      
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <img src="/images/5star.jpg" alt={name} className="stars-img" />
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
