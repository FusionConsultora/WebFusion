import { useEffect } from "react";
import "../../styles/clients.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mb-28"
            id="clients">

            <h3 className="mt-32 text-5xl font-bold text-center text-brand-blue">
                Our clients
            </h3>

            <div className='p-4 lg:p-24'>
                <div className="wrapper">
                    <div className="item item1">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/calmicon_oh5tbm.webp' />
                    </div>
                    <div className="item item2">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/mlf_dsh6zu.webp' />
                    </div>
                    <div className="item item3">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/ecommyicon_vdbgch.webp' />
                    </div>
                    <div className="item item4">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/yaydooicon_ejckic.webp' />
                    </div>
                    <div className="item item5">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/grupo_mgyg_ppbyyx.webp' />
                    </div>
                    <div className="item item6">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/mycicon_ycxd6t.webp' />
                    </div>
                    <div className="item item7">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/Gemconex_kwybhi.webp' />
                    </div>
                    <div className="item item8">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1728957019/logocapri_gl3bbk_ybgs0x.webp' />
                    </div>

                </div>

                <div className="wrapper">
                    <div className="itemw item1">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/yaydooicon_ejckic.webp' />
                    </div>
                    <div className="itemw item2">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/grupo_mgyg_ppbyyx.webp' />
                    </div>
                    <div className="itemw item3">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/mycicon_ycxd6t.webp' />
                    </div>
                    <div className="itemw item4">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/Gemconex_kwybhi.webp' />
                    </div>
                    <div className="itemw item5">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1728957019/logocapri_gl3bbk_ybgs0x.webp' />
                    </div>
                    <div className="itemw item6">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/calmicon_oh5tbm.webp' />
                    </div>
                    <div className="itemw item7">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/mlf_dsh6zu.webp' />
                    </div>
                    <div className="itemw item8">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/ecommyicon_vdbgch.webp' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Clients