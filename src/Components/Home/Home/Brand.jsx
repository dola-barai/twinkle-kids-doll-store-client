import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Brand = () => {
    return (

            <section className='bg-sky-900 align-middle py-6'>
                <Swiper
                     spaceBetween={50}
                     slidesPerView={5}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img className='transition hover:scale-110 ease-in duration-200 delay-0 ' src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Daraz_Logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition hover:scale-110 ease-in duration-200 delay-0 ' src="https://freepngimg.com/thumb/nike/28258-8-nike-logo-transparent-background.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition hover:scale-110 ease-in duration-200 delay-0 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ford-Motor-Company-Logo.png/1200px-Ford-Motor-Company-Logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition hover:scale-110 ease-in duration-200 delay-0 ' src="https://seeklogo.com/images/B/bkash-logo-250D6142D9-seeklogo.com.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition hover:scale-110 ease-in duration-200 delay-0 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ford-Motor-Company-Logo.png/1200px-Ford-Motor-Company-Logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition hover:scale-110 ease-in duration-200 delay-0 ' src="https://freepngimg.com/thumb/nike/28258-8-nike-logo-transparent-background.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition hover:scale-110 ease-in duration-200 delay-0 ' src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Daraz_Logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition hover:scale-110 ease-in duration-200 delay-0 ' src="https://freepngimg.com/thumb/nike/28258-8-nike-logo-transparent-background.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition hover:scale-110 ease-in duration-200 delay-0 ' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c535.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
    )
}
export default Brand;