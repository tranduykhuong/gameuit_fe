import React from 'react';
import Slider from './slider/slider';
import Button from './button/button';
import './serviceVip.css'
function serviceVip() {
    return (
        <div>
            <div className='container_introduction'>
                <h1 className='title_introduction' >Cover-green hỗ trợ tư vấn và lắp đặt ở quy mô lớn như tòa nhà, công ty, sân vườn</h1>
                <p className='description_introduction'>Khi bạn liên hệ cover-green để sử dụng dịch vụ vip. Chúng tôi sẽ tư vấn cho bạn những loại cây và cách bố trí thích hợp với sở thích, 
                    không gian và các yếu tố khác. Sau khi đạt được thỏa thuần, nhân viên của Cover-green sẽ đến tận nơi để bố trí và lắp đặt
                </p>
            </div>
           
            <p className='text_style'>
                After <p> and </p>Before 
            </p>
            <Slider/>
            <Button/>
        </div>
    );
}

export default serviceVip;