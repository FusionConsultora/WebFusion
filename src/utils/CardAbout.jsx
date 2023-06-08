import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

// eslint-disable-next-line react/prop-types
const CardAbout = ({ image, title, subtitle, phrase, href, left, fade }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className="flex flex-col items-center mb-16 md:flex-row ">
            {
                left || window.innerWidth < 600 ? (
                    <>
                        <div className="w-full md:mx-4 lg:mx-20 flex flex-col"
                            data-aos={fade}
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <img src={image} alt={title} className="w-full " />
                        </div>

                        <div className="w-full inline-block md:mx-4 lg:mx-20"
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <h3 className="text-4xl text-brand-blue font-extrabold mb-6 md:mb-10 lg:w-96">
                                {title}
                            </h3>
                            <p className="text-base text-gray-500 font-light mb-6 max-w-[30rem] md:mb-10 z-10">
                                {subtitle}
                            </p>
                            <a href={href} target="_blank" rel="noreferrer" className="text-lg text-brand-lightBlue font-light p-2 border border-brand-lightBlue rounded-md cursor-pointer w-fit" >
                                {phrase}
                            </a>

                        </div>
                    </>

                ) : (
                    <>
                        <div className="w-full flex flex-col items-start md:mx-4 lg:ml-44"
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <h3 className="text-4xl text-brand-blue font-extrabold mb-6 md:mb-10 lg:w-96 text-start">
                                {title}
                            </h3>
                            <p className="text-base text-gray-500 font-light mb-6 max-w-[30rem] md:mb-10 text-start">
                                {subtitle}
                            </p>
                            <a href={href} target="_blank" rel="noreferrer" className="text-lg text-brand-lightBlue font-light p-2 border border-brand-lightBlue rounded-md cursor-pointer w-fit" >
                                {phrase}
                            </a>
                        </div>

                        <div className="w-full  md:mx-4 lg:mr-44"
                            data-aos={fade}
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <img src={image} alt={title} className="w-full " />
                        </div>
                    </>
                )

            }

        </div>
    )
}

export default CardAbout