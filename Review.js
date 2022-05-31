import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  console.log(people);
  const {name, job, image, text} = people[index];
  const surpriseMe = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    while(newIndex == index){
      newIndex = Math.floor(Math.random() * people.length);
    }
    setIndex(newIndex);
  }
  
  const nextReview = () => {
    setIndex(index === people.length - 1 ? 0 : index + 1);
  }

  const prevReview = () => {
    setIndex(!index ? people.length - 1 : index - 1);
  } 
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => prevReview()}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className='next-btn' onClick={() => nextReview()}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className='random-btn' onClick={() => surpriseMe()}>Surprise Me</button>
    </article>
    
  )
};

export default Review;
