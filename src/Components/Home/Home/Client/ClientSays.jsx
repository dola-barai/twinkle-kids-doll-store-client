import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,  A11y } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@smastrom/react-rating/style.css'
import './Revies.css'

const ClientSays = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://twinkle-kids-doll-store-server.vercel.app/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="md:mx-20 my-12 bgImageD">
      <div className="bg pb-12">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center text-white md:mx-32">
                <Rating className="mb-4 pt-16" style={{ maxWidth: 100 }} value={review.rating} readOnly />
                <p className="text-center mb-2">{review.review_text}</p>
                <img className="rounded-full h-16" src={review.image_url} alt="" />
                <h3 className="text-2xl mb-12 text-yellow-600">{review.user}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSays;
