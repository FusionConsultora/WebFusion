import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className='w-full bg-brand-blue'
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            id="about">
            <div className='flex flex-col items-center justify-center max-w-5xl p-2 py-20 m-auto text-center '>
                <h3 className='text-3xl xs:text-4xl xl:text-5xl mb-4 leading-[3rem] font-medium text-white'>
                    Our team.
                </h3>
                <p className='text-lg tracking-tight md:text-xl text-left text-white font-light'>
                    Our team of expert consultants combines proven experience in various industries with deep local and international knowledge. From process optimization and the implementation of growth strategies to organizational development and human talent management, each of our services is designed to maximize performance and positive impact on your company.
                </p>

                <p className='text-lg tracking-tight md:text-xl text-left text-white font-medium mt-10'>
                    Contact us today and discover why we are the preferred choice for business consulting and human resources in Argentina.
                </p>
                {/* <InvertedButton label='Get expert advice ' /> */}
            </div>
        </section>
    )
}

export default About