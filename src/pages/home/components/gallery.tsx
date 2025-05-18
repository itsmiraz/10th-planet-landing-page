import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import Img1 from "@/assets/images/gallery/img1.jpg";
import Img2 from "@/assets/images/gallery/img2.jpg";
import Img3 from "@/assets/images/gallery/img3.jpg";
import Img4 from "@/assets/images/gallery/img4.jpg";
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'

const testimonials = [Img4,Img1, Img2, Img3, Img4, Img2, Img3,Img1, ];
const Gallery = () => {
  const swiperRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
        <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    
    ref={ref} className="font-jakarta pt-[40px] mb-[200px]">
      <div>
        <h1 className="text-[32px] md:text-[50px] uppercase  pb-[27px] font-extrabold text-center leading-[100%]">
          GALLERY
        </h1>
        <div className="w-[96px] h-[8px]  bg-[#F58215] mx-auto"></div>
        <p className="text-[18px] px-[20px] md:text-[22px] pt-[41px] text-center leading-[142%]">
          Lorem ipsum dolor sit amet consectetur. Euismod id tellus quis
          vulputate in <br className="md:block hidden" /> fermentum lacinia pharetra aliquet. Nullam eget
          lacus est arcu sceler
        </p>

        <div className="py-12 max-w-[2000px] overflow-hidden mx-auto relative px-4">
        
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Navigation, Autoplay]}
            // slidesPerView={1.2}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            // centeredSlides
            loop
            spaceBetween={24}
            navigation={{
              nextEl: ".right-arrow",
              prevEl: ".left-arrow",
            }}
            // loop={true}
            autoplay={{
              delay: 2000, // 5000ms = 5 seconds
              // disableOnInteraction: false, // keeps autoplay running after manual swipe
            }}
            breakpoints={{
              450: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="relative ">
                  <div className="bg-black/50 hover:bg-black/0 transition-all ease-in-out duration-300 cursor-pointer absolute top-0 left-0 w-full h-full">

                  </div>
                  <img src={t} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
