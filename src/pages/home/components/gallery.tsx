import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { t } from "i18next";
import Img1 from "/src/assets/images/gallery/1.jpg";
import Img2 from "/src/assets/images/gallery/2.jpg";
import Img3 from "/src/assets/images/gallery/3.jpg";
import Img4 from "/src/assets/images/gallery/4.jpg";
import Img5 from "/src/assets/images/gallery/5.jpg";
import Img6 from "/src/assets/images/gallery/7.jpg";
import Img7 from "/src/assets/images/gallery/8.jpg";
import Img8 from "/src/assets/images/gallery/10.jpg";
import Img9 from "/src/assets/images/gallery/11.jpg";
import Img10 from "/src/assets/images/gallery/12.jpg";
import Img11 from "/src/assets/images/gallery/13.jpg";
import Img12 from "/src/assets/images/gallery/14.jpg";
import Img13 from "/src/assets/images/gallery/15.jpg";

// Import all 15 images
const images = [
  // "/src/assets/images/gallery/1.jpg",
  // "/src/assets/images/gallery/2.jpg",
  // "/src/assets/images/gallery/3.jpg",
  // "/src/assets/images/gallery/4.jpg",
  // "/src/assets/images/gallery/5.jpg",
  // "/src/assets/images/gallery/7.jpg",
  // "/src/assets/images/gallery/8.jpg",
  // "/src/assets/images/gallery/10.jpg",
  // "/src/assets/images/gallery/11.jpg",
  // "/src/assets/images/gallery/12.jpg",
  // "/src/assets/images/gallery/13.jpg",
  // "/src/assets/images/gallery/14.jpg",
  // "/src/assets/images/gallery/15.jpg",
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
];

const Gallery = () => {
  const swiperRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -20% 0px",
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      id="gallery"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref}
      className="font-jakarta pt-[120px] mb-[200px]"
    >
      <div>
        <h1 className="text-[32px] md:text-[50px] uppercase  pb-[27px] font-extrabold text-center leading-[100%]">
          {t("galleryTitle")}
        </h1>
        <div className="w-[156px] h-[8px] bg-[#F58215] mx-auto"></div>

        <p
          className="text-[18px] px-[20px] md:text-[22px] pt-[41px] text-center leading-[142%]"
          dangerouslySetInnerHTML={{ __html: t("galleryDescription") }}
        />
        <div className="py-12 max-w-[2000px] overflow-hidden mx-auto relative px-4">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            loop
            spaceBetween={24}
            navigation={{
              nextEl: ".right-arrow",
              prevEl: ".left-arrow",
            }}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              450: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {images.map((image, i) => (
              <SwiperSlide key={i}>
                <div
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-[9/16]"
                >
                  <div className="transition-all ease-in-out duration-300 cursor-pointer absolute top-0 left-0 w-full h-full"></div>
                  <img
                    src={image}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 🔍 Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg transition-transform duration-300 scale-100"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
          >
            &times;
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Gallery;
