import React, { useRef, useState } from "react";


export default function Gallery({images}){

    const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    sliderRef.current.isDown = true;
    sliderRef.current.startX = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeftStart = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    sliderRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    sliderRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!sliderRef.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - sliderRef.current.startX) * 2; // Increase multiplier for faster scroll
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeftStart - walk;
  };

  return (
    <div
      className="slider-container"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="slider">
        <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="Placeholder 1" />
        <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="Placeholder 2" />
        <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="Placeholder 3" />
        <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="Placeholder 4" />
        <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="Placeholder 5" />
      </div>
    </div>
  )


    // const sliderRef = useRef(null);
    // const [isDragging, setIsDragging] = useState(false);
    // const [startX, setStartX] = useState(0);
    // const [scrollLeft, setScrollLeft] = useState(0);
  
    // const startDrag = (e) => {
    //   setIsDragging(true);
    //   setStartX(e.pageX || e.touches[0].pageX);
    //   setScrollLeft(sliderRef.current.scrollLeft);
    // };
  
    // const stopDrag = () => {
    //   setIsDragging(false);
    // };
  
    // const handleDrag = (e) => {
    //   if (!isDragging) return;
    //   e.preventDefault();
    //   const x = e.pageX || e.touches[0].pageX;
    //   const walk = (x - startX) * 2; // Adjust scroll speed
    //   sliderRef.current.scrollLeft = scrollLeft - walk;
    // };


    // return (
    //     <div className="gallery">
    //         <div 
    //             className="slider"
    //             ref={sliderRef}
    //             onMouseDown={startDrag}
    //             onMouseMove={handleDrag}
    //             onMouseUp={stopDrag}
    //             onMouseLeave={stopDrag}
    //             // onTouchStart={startDrag}
    //             // onTouchMove={handleDrag}
    //             // onTouchEnd={stopDrag}
    //         >
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //             <div className="slider-img-container">
    //                 <img src="https://images.squarespace-cdn.com/content/v1/59a04de337c581c5e1bcd854/1710998377547-DWXDZA5WIX8Q9VKFF0WC/AAA01567.jpg?format=1500w" alt="" />
    //             </div>
    //         </div>
    //     </div>
    // )
}