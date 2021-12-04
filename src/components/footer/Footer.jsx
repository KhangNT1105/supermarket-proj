import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__wrapper container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='footer__item'>
              <div className='footer__item__title'>
                <h5>LIÊN HỆ</h5>
              </div>
              <strong>THỰC PHẨM AMAZING</strong>
              <p>
                <a href='#'>
                  Địa chỉ mua hàng trực tiếp: 88/46 Nguyễn Khoái, P2, Q4, TP.
                  HCM
                </a>
              </p>
              <p>
                <a href='#'>
                  Địa chỉ mua hàng trực tiếp: 88/46 Nguyễn Khoái, P2, Q4, TP.
                  HCM
                </a>
              </p>
              <p>Số chứng nhận ĐKDK: 41D8010585</p>
              <p>Nơi cấp: UBND Q4</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='footer__item'>
              <div className='footer__item__title'>
                <h5>
                  THỜI GIAN LÀM VIỆC: 8H30-21H00 TẤT CẢ CÁC NGÀY TRONG TUẦN)
                </h5>
              </div>
              <strong>HỖ TRỢ KHÁCH HÀNG</strong>
              <ul>
                <li>
                  <a href='#'>Hướng dẫn chọn hàng & đặt hàng</a>
                </li>
                <li>
                  <a href='#'>Hướng dẫn về hình thức thanh toán</a>
                </li>
                <li>
                  <a href='#'>Hướng dẫn đổi trả hàng hoặc hoàn tiền</a>
                </li>
                <li>
                  <a href='#'>
                    Thời gian vận chuyển, giao nhận và chi phí giao nhận
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='footer__item'>
              <div className='footer__item__title'>
                <h5>FANPAGE</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
