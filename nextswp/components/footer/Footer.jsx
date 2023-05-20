import React from "react";
import classes from "./Footer.module.css"
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg_gray">
      <div className={classes.bg}>

      <div className="middle_footer">
       <div className={classes.textt}>
       <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="shopping_info">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="icon_box icon_box_style2">
                      <div className="icon">
                        <i className="flaticon-shipped" />
                      </div>
                      <div className="icon_box_content">
                        <h5>Miễn Phí vận chuyển</h5>
                        <p>
                        Miễn phí vận chuyển toàn quốc cho đơn hàng từ 600k.Ship nhanh trong vòng 2h các quận nội thành HCM, phí ship chỉ từ 15-30k.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon_box icon_box_style2">
                      <div className="icon">
                        <i className="flaticon-money-back" />
                      </div>
                      <div className="icon_box_content">
                        <h5>Dịch vụ sau bán hàng</h5>
                        <p>
                        Giải quyết các vấn đề liên quan đến hàng hóa trong vòng 3 ngày kể từ sau khi giao hàng thành công. 
                        </p>
                      </div>
                    </div>
                  </div>
                 
                 <div className="col-md-4">
                    <div className="icon_box icon_box_style2">
                    <div className="icon" >
                        <i className="flaticon-support" />
                      </div>
                      <div className="icon_box_content">
                        <h5 >hỗ trợ khách hàng 24/7</h5>
                        <p>
                        Hỗ trợ giải đáp thắc mắc về sản phẩm và giao hàng nhanh chóng.
                        </p>
                      </div>
                    </div>
                  </div>                
                </div>
              </div>
            </div>  
          </div>
        </div>
       </div>
      </div>

      </div>
      <div className="footer_top small_pt pb_20">
        <div className="container">
         <div className={classes.text_contact}>
         <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="widget">
                <div className="footer_logo">
                  <a>
                    <div className={classes.fontt}>
                   <div className={classes.flex}>
                   <img src="assets/images/image-141@2x.png" alt="logo" />
                   <h2 style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Pacifico', fontSize: '36px', fontWeight: 400, lineHeight: '34px',  textAlign: 'left' }}>Tiệm Homie</h2>
                   </div>
                    </div>
                  </a>
                </div>
                <h5 >Liên hệ với chúng tôi</h5>
                <ul className="contact_info">
                  <li>
                    <i className="ti-location-pin" />
                    <p>132 Bến Vân Đồn P6 Q4, TP. Hồ Chí Minh</p>
                  </li>
                  <li>
                    <i className="ti-email" />
                    <Link className="text-decoration-none" href="mailto:info@sitename.com">
                    chieunganvo88@gmail.com
                    </Link>
                  </li>
                  <li>
                    <i className="ti-mobile" />
                    <p>093 839 30 84</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="widget">
                <h6 className="widget_title">FAQS</h6>
                <ul className="widget_links">
                  <li>
                    <a href="#" className="text-decoration-none">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">FAQ</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">Location</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">Affiliates</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="widget">
                <h6 className="widget_title">about</h6>
                <ul className="widget_links">
                  <li>
                    <a href="#" className="text-decoration-none">About</a>
                  </li>
                  <li>
                    <a href="/about" className="text-decoration-none">Discount</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">Returns</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">Orders History</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">Order Tracking</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="widget">
                <h6 className="widget_title">Facebook</h6>
                <ul className="widget_links">
                 <div className={classes.link_img}>
                 <li>
                    <Link className="text-decoration-none" href="https://www.facebook.com/tiemhomie.sg">
                       <p >https://www.facebook.com/tiemhomie.sg</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" href="https://www.facebook.com/tiemhomie.sg">
                    <img src=".\assets\images\image-29@2x.png" alt="logo" />
                    </Link>
                  </li>
                 </div>
                  
                </ul>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>

      <div className="bottom_footer border-top-tran">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <p className="mb-lg-0 text-center">
              © 2020 All Rights Reserved by Tiệm Hommie
              </p>
            </div>
            <div className="col-lg-4 order-lg-first">
              <div className="widget mb-lg-0">
                <ul className="social_icons text-center text-lg-start">
                  <li>
                    <a href="#" className="sc_facebook">
                      <i className="ion-social-facebook" />
                    </a>
                  </li>
                   
                  <li>
                    <a href="#" className="sc_google">
                      <i className="ion-social-googleplus" />
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <ul className="footer_payment text-center text-lg-end">
                <li>
                  <a href="#">
                    <img src="assets/images/visa.png" alt="visa" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/discover.png" alt="discover" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/master_card.png"
                      alt="master_card"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/paypal.png" alt="paypal" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/amarican_express.png"
                      alt="amarican_express"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
