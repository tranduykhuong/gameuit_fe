import React, { useState } from 'react';
import './serviceFree.css'
import { Link } from 'react-router-dom';
import ButtonCT from './../../components/buttonCT/ButtonCT';
import Tag from './Tag/Tag';
import { Tree } from '../../assets/imgs';

const ServiceFree = () => {
  const [type, setType] = useState('tree');

  return (
    <div className='serviceFree'>
      <div className='serviceFree__heading'>
        <h3 className='text-3xl text-white font-semibold'>TRANG TRÍ NHÀ NGAY</h3>
        <div>
          <Link to='/home' className='text-lg text-slate-200 pr-2'>HOME</Link>
          <Link to='/services/premium' className='text-lg text-amber-500 pl-2' style={{borderLeft: '1px solid #ccc', color: '#FFDE68'}}>DỊCH VỤ TƯ VẤN</Link>
        </div>
      </div>

      <div className='serviceFree__content'>
          <ul className='serviceFree__navbar'>
            <li className={`${type === 'tree' ? 'navbar-active': ''}`} onClick={() => setType('tree')}>Chọn cây</li>
            <li className={`${type === 'room' ? 'navbar-active': ''}`} onClick={() => setType('room')}>Bố trí phòng</li>
          </ul>

          <div className='serviceFree__workspace'>
            <div className='workspace__item'>
              <h6>Nhập mong muốn của bạn về cây</h6>
              <input type="text" />

              <div className='workspace__item'>
                <h6>Loại cây</h6>
                
              </div>


              <ButtonCT className='workspace__item-btn' primary large>Xem gợi ý ngay</ButtonCT>
            </div>
            <div className='workspace__item'>
              <h6>Tags đã chọn</h6>
              <div className='tags-list'>
                <Tag content='đỏ' icon />
                <Tag content='xanh' />
                <Tag content='vàng' />
              </div>
            </div>
          </div>

          <div className='serviceFree__result'>
            <h6>Kết quả gợi ý</h6>
            <div className='result__list'>
              <div className='result__item'>
                <img src={Tree} alt="" />
                <div className='result__item-description'>
                  <h3>Cây phát tài</h3>
                  <ul className='description__list'>
                    <li className='description__list-item'>
                      <span>Môi trường sống: </span>
                      <p>Đón nắng</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Loại lá: </span>
                      <p>lá tròn</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Nơi bán: </span>
                      <p>Cửa hàng cây cảnh Minh Tân</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='result__item'>
                <img src={Tree} alt="" />
                <div className='result__item-description'>
                  <h3>Cây phát tài</h3>
                  <ul className='description__list'>
                    <li className='description__list-item'>
                      <span>Môi trường sống: </span>
                      <p>Đón nắng</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Loại lá: </span>
                      <p>lá tròn</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Nơi bán: </span>
                      <p>Cửa hàng cây cảnh Minh Tân</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='result__item'>
                <img src={Tree} alt="" />
                <div className='result__item-description'>
                  <h3>Cây phát tài</h3>
                  <ul className='description__list'>
                    <li className='description__list-item'>
                      <span>Môi trường sống: </span>
                      <p>Đón nắng</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Loại lá: </span>
                      <p>lá tròn</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Nơi bán: </span>
                      <p>Cửa hàng cây cảnh Minh Tân</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='result__item'>
                <img src={Tree} alt="" />
                <div className='result__item-description'>
                  <h3>Cây phát tài</h3>
                  <ul className='description__list'>
                    <li className='description__list-item'>
                      <span>Môi trường sống: </span>
                      <p>Đón nắng</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Loại lá: </span>
                      <p>lá tròn</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Nơi bán: </span>
                      <p>Cửa hàng cây cảnh Minh Tân</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='result__item'>
                <img src={Tree} alt="" />
                <div className='result__item-description'>
                  <h3>Cây phát tài</h3>
                  <ul className='description__list'>
                    <li className='description__list-item'>
                      <span>Môi trường sống: </span>
                      <p>Đón nắng</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Loại lá: </span>
                      <p>lá tròn</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Nơi bán: </span>
                      <p>Cửa hàng cây cảnh Minh Tân</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='result__item'>
                <img src={Tree} alt="" />
                <div className='result__item-description'>
                  <h3>Cây phát tài</h3>
                  <ul className='description__list'>
                    <li className='description__list-item'>
                      <span>Môi trường sống: </span>
                      <p>Đón nắng</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Loại lá: </span>
                      <p>lá tròn</p>
                    </li>
                    <li className='description__list-item'>
                      <span>Nơi bán: </span>
                      <p>Cửa hàng cây cảnh Minh Tân</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default ServiceFree;
