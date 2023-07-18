import './carousel.css';

import ImagenUm from '../../assets/img/img-um.jpg';
import ImagenDois from '../../assets/img/img-dois.jpg';
import ImagenTres from '../../assets/img/img-tres.jpg';

import ImagenQuatro from '../../assets/img/dente-tratamento.jpg';
import ImagenCinco from '../../assets/img/dente-tratamento-2.jpg';
import ImagenSeis from '../../assets/img/dente-curado.jpg';

import ImagenSete from '../../assets/img/antes-depois.jpeg';
import ImagenOito from '../../assets/img/processo.jpeg';
import ImagenNove from '../../assets/img/processo-2.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel() {

    const lista = [
        { id: 1, src: ImagenUm },
        { id: 2, src: ImagenDois },
        { id: 3, src: ImagenTres },
        { id: 4, src: ImagenQuatro },
        { id: 5, src: ImagenCinco },
        { id: 6, src: ImagenSeis },
        { id: 7, src: ImagenSete },
        { id: 8, src: ImagenOito },
        { id: 9, src: ImagenNove },
    ]
    return (
        <section
            className='carousel'
            data-aos="fade-left"
            data-aos-duration='1500'
        >
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}

            >
                {lista.map((item) => (
                    <SwiperSlide
                        key={item.id}
                    >
                        <img src={item.src} alt='imagens caroussel' className='img-carousel' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}