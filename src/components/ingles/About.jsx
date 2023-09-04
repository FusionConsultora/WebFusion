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
                <h3 className='text-3xl xs:text-4xl xl:text-[44px] mb-4 leading-[3rem] font-medium text-white'>
                    Our team.
                </h3>
                <p className='mt-6 text-base text-white xs:text-lg  font-light'>
                    We are a team of experts with more than 15 years of experience advising small, medium and large companies.
                    Our commitment and responsibility motivate us to train and update our knowledge continuously, prepared to develop tools, strategies and consultancies based on the highest standards of quality, safety, ethics and good practices.
                </p>
                {/* <InvertedButton label='Get expert advice ' /> */}
            </div>
        </section>
    )
}

export default About