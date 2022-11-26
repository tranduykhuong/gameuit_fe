import React from 'react';
import SliderImage1 from '../../../assets/imgs/slide/slide4.png';
import SliderImage2 from '../../../assets/imgs/slide/slide5.png';
import SliderImage3 from '../../../assets/imgs/slide/slide6.png';
import './slideItem.css';
function slider1() {
    return (
        <div className='slider'>
            <img src={ SliderImage1} alt="slick_1" className="" />
            <img src={ SliderImage2} alt="slick_2" className="" />
            <img src={ SliderImage3} alt="slick_3" className="" />
        </div>
    );
}

export default slider1;