import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delet, messege, selectoraccont } from '../../../redux/counterSlice'
import './Fav.css'
import photo from '../desert-landscape.jpg';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
const Fav = () => {
    const accont=useSelector(selectoraccont)
    const dispatch=useDispatch()

    const remove=(item)=>{
        dispatch(delet(item))
    }

return (
    <>
{accont.length !==0? accont.map((item)=>{
    return(
<div className='card' key={item.id}>
    <div className="top">
        <div className="img">
        <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={item.img}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img} />
        </SwiperSlide>
      </Swiper>
        </div>
        <div className="information">   
        <div className="description">{item.description}</div>
        <div className="PropertySize">{item.PropertySize}sqm</div>
        </div>
        </div>
        <div className="button">
                  <div className="phone btn-danger btn">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                    <span>Call</span>
                  </div>
                  <div
                    className="email btn-danger btn" onClick={()=>{dispatch(messege())}}
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                  </div>
                  <div className="whatsapp btn btn-success">
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </div>
                  <div className="heart">
                  <i class="fa-sharp fa-solid fa-heart" onClick={()=>{remove(item)}}></i>
                  </div>
        </div>

      
</div>
    )
})
: 
<div className="col-lg-6 col-sm-12 empity">
<div className="empty-img">
  <img src={photo} alt="" />
</div>
<div className="No-saved">
  <h3>No Saved Properties</h3>
</div>
</div>
    }

    </>
  )
}

export default Fav
