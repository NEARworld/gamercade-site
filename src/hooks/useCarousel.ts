import { useState } from "react";

interface IParams {
  length: number;
}

export default function useCarousel({length}: IParams) {
  const [threshold, setThreshold] = useState(length);
  
  function handleSlide(direction: 'right' | 'left') {
    const slide = document.getElementById('slide')!;
    const imageArray = document.getElementById('image-array')!;
    const thumbnail = document.getElementsByClassName('carousel-thumbnail')[0]!;
    const thumbnailWidth = thumbnail.clientWidth;
    const GAP = 10;
    const THRESHOLD = slide.clientWidth / (thumbnailWidth + GAP);
    let left = parseInt(imageArray.style.left);
    if (isNaN(left) || left === 0) {
      imageArray.style.left = '0px';
      left = 0;
    }
    if (direction === 'right' && threshold >= THRESHOLD) {
      setThreshold(threshold - 1);
      imageArray.style.left = `${left - (thumbnailWidth + GAP)}px`;
    }
    else if (direction === 'left' && left !== 0){
      console.log(threshold, left);
      setThreshold(threshold + 1);
      imageArray.style.left = `${left + (thumbnailWidth + GAP)}px`;
    }
    console.log(imageArray.style.right);
  }
  
  return {
    handleSlide,
  }
};