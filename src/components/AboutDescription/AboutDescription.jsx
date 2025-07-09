import React, { useState, useEffect } from 'react'
import "./AboutDescription.css"
import Button from '../Button/Button'
import { aboutImages } from '../../constants/constants'

export default function AboutDescription() {
  const [displayedImages, setDisplayedImages] = useState([]);
  useEffect(() => {
    // Assign initial z-index values (e.g., based on their original order)
    const initialImages = aboutImages.map((image, index) => ({
      ...image,
      originalIndex: index, // Keep track of original index if needed
      // Higher zIndex for images appearing later in the array, making last one on top
      zIndex: aboutImages.length - index
    }));
    setDisplayedImages(initialImages);
  }, []); // Run only once on mount

  // Function to reorder z-indices on click
  const handleImageCycle = () => {
    // This approach moves the "bottom" image to the "top" by adjusting zIndex
    // and effectively rotating the array for display order.

    setDisplayedImages(prevImages => {
      // Find the image that currently has the highest z-index (is on top)
      const topImageZIndex = Math.max(...prevImages.map(img => img.zIndex));

      // Create a new array with updated z-indices
      const newImages = prevImages.map(image => {
        let newZIndex = image.zIndex - 1; // Decrease z-index of all images

        // If this image was at z-index 1 (the current bottom),
        // move it to the top of the stack (highest z-index)
        if (image.zIndex === 1) {
          newZIndex = topImageZIndex;
        }
        return { ...image, zIndex: newZIndex };
      });

      // Sort the new array by zIndex for consistent rendering order in JSX
      // This is crucial because map renders in array order, not z-index order
      return newImages.sort((a, b) => a.zIndex - b.zIndex);
    });
  };
  return (
    <div className='description-container'>
      <section className='overlap-image'>
      {displayedImages.map((image,index) => {
        return <img key={index} src={image.img} alt="About Image" style={{transform:`rotate(${image.rotate})`, zIndex:`${image.zIndex}`, transition:"all 0.3s ease-in-out"}}/>
      })}
      </section>
      <section className='about-description'>
        <h1>A front-end developer, UI designer, and all-around doodler who enjoys developing accessible, usable and engaging websites & apps that bring your products to life.</h1>
        <p>My expertise and passion for technology drive me to craft solutions that are both asthetically pleasing and functional. With years of experience, I excel in creating unique webistes that meet the needs of your clients.</p>
        <Button labelName="MORE PHOTOS" classname="more-photos-btn" clickHandler={handleImageCycle}/>
      </section>
    </div>
  )
}
