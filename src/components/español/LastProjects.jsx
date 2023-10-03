import { useEffect } from "react";
import ProjectsUtil from "../../utils/ProjectsUtil.json";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const LastProjects = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mb-40"
            id="last">

            <h3 className="mt-32 mb-10 text-5xl font-bold text-center text-brand-blue">
                Últimos Proyectos
            </h3>

            <div className='w-[95%] mx-auto'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#000000',
                        '--swiper-pagination-color': '#000000',
                    }}
                    loop
                    navigation
                    slidesPerView={1.4}
                    spaceBetween={300}
                    breakpoints={{
                        740: {
                            slidesPerView: 1.7,
                            spaceBetween: 300
                        },
                        1240: {
                            slidesPerView: 2,
                            spaceBetween: 180
                        },
                        1700: {
                            slidesPerView: 3,
                            spaceBetween: 12
                        }
                    }}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        ProjectsUtil && ProjectsUtil.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col w-[26rem] sm:w-[37rem] xl:w-[37rem] h-[23.5rem] sm:h-[29rem] p-4 rounded-[32px] bg-sky-200/40">
                                    <img src={item.image} alt="projectImage" className="mt-2 rounded-lg mx-auto aspect-[16/9] select-none" />
                                    <p className="mt-4 text-3xl font-poppins font-semibold text-center text-brand-title">
                                        {item.name}
                                    </p>
                                    {
                                        item.deploy && (
                                            <a href={item.deploy} target="_blank" className="font-poppins font-normal text-center text-brand-title bg-brand-lightBlue cursor-pointer w-fit px-2 rounded mx-auto mt-3" rel="noreferrer">
                                                Visitar
                                            </a>
                                        )
                                    }
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </section>
    )
}

export default LastProjects