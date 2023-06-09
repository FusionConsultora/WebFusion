import { useEffect } from "react";
import style from "../styles/clients.module.scss"

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
            className="mb-96"
            id="clients">

            <h2 className="mt-32 text-5xl font-bold text-center text-brand-blue">
                Nuestros clientes
            </h2>

            <div className={style.slider}>
                <div className={style.slideTrack}>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/calmicon_oh5tbm.webp" height="100" width="250" alt="calm" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/mlf_dsh6zu.webp" height="100" width="250" alt="calm" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/ecommyicon_vdbgch.webp" height="100" width="250" alt="ecommy" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/yaydooicon_ejckic.webp" height="100" width="250" alt="yaydoo" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/grupo_mgyg_ppbyyx.webp" height="100" width="250" alt="horizon" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/mycicon_ycxd6t.webp" height="100" width="250" alt="myc" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/Gemconex_kwybhi.webp" height="100" width="250" alt="vecchio" />
                    </div>

                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/calmicon_oh5tbm.webp" height="100" width="250" alt="calm" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/mlf_dsh6zu.webp" height="100" width="250" alt="calm" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/ecommyicon_vdbgch.webp" height="100" width="250" alt="ecommy" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/yaydooicon_ejckic.webp" height="100" width="250" alt="yaydoo" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/grupo_mgyg_ppbyyx.webp" height="100" width="250" alt="horizon" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/mycicon_ycxd6t.webp" height="100" width="250" alt="myc" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/Gemconex_kwybhi.webp" height="100" width="250" alt="vecchio" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients