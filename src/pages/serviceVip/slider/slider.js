import React from 'react';
import {useState}  from "react";
import Slide1 from './slide1';
import Slide2 from './slide2';
import './slider.css';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const moveDot = (index) => {
        setSlideIndex(index)
    }
    return (
        <div>
             <div className="slide_list--items" onMouseDown={()=>{
                setSlideIndex(1-slideIndex);
            }}>
                <div className={slideIndex === 0 ? "slide active-anim" : "slide"}>
                    <Slide1/>
                </div>
                <div className={slideIndex === 1 ? "slide active-anim" : "slide"}>
                    <Slide2/>
                </div>   
             </div>     
             <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div onClick={() => moveDot(index )}
                        className={slideIndex === index  ? "dot active" : "dot"}  >
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;