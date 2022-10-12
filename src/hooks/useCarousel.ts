import { useState } from "react";

interface IParams {
  length: number;
}

export default function useCarousel({length}: IParams) {
  const [threshold, setThreshold] = useState(length);
  
  function handleSlide(direction: 'right' | 'left') {
    const imageArray = document.getElementById('image-array')!;
    let left = parseInt(imageArray.style.left);
    if (isNaN(left) || left === 0) {
      imageArray.style.left = '0px';
      left = 0;
    }
    if (direction === 'right' && threshold >= 5) {
      setThreshold(threshold - 1);
      imageArray.style.left = `${left - 100}px`;
    }
    else if (direction === 'left' && left !== 0){
      console.log(threshold, left);
      setThreshold(threshold + 1);
      imageArray.style.left = `${left + 100}px`;
    }
  }
  
  return {
    handleSlide,
  }
};