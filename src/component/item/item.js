import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { AdditemInfavpage, selectoritem,messege } from "../../redux/counterSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar1 from "../home/Navbar1";

import "./item.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Footer from "../footer/footer";

const Item = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const item = useSelector(selectoritem);
  const dispatch=useDispatch();

  const favicon=(item)=>{
dispatch(AdditemInfavpage(item))
  }
  return (
    <div>
      <Navbar1 />
      {item.map((item) => {
        return (
          <div className="" key={item.id}>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.img} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="details-contact">
              <div className="details">
                <div className="des">{item.description}</div>
                <div className="simpledetails">
                  <div className="Property-type">
                    Property type: <span>{item.type}</span>
                  </div>
                  <div className="Bedrooms">
                    Bedrooms: <span>{item.Bedrooms}</span>
                  </div>
                  <div className="Property-size">
                    Property size: <span>{item.PropertySize}m</span>
                  </div>
                  <div className="Bathrooms">
                    Bathrooms: <span> {item.Bathrooms}</span>
                  </div>
                </div>
              </div>
              <div className="contact">
                <div className="price">{item.price}</div>
                <div className="call">
                  <div className="phone btn-danger btn">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                    <span>Call</span>
                  </div>
                  <div
                    className="email btn-danger btn"
                    onClick={() => {
                      dispatch(messege());
                    }}
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                  </div>
                  <div className="whatsapp btn btn-success">
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </div>
                </div>
                <div className="fav btn btn-primary form-control"  onClick={()=>{favicon(item)}}>
                  <i className="fa-sharp fa-solid fa-heart"></i>
                  <span>Save To shortlist</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Item;
