import { useEffect } from "react";
import style from "../../styles/clients.module.scss"

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
            className="mb-60"
            id="clients">

            <h3 className="mt-32 text-5xl font-bold text-center text-brand-blue">
                Nuestros clientes
            </h3>

            <div className={style.slider}>
                <div className={style.slideTrack}>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/calmicon_oh5tbm.webp" height="100" width="250" alt="calm" title="calm" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/mlf_dsh6zu.webp" height="100" width="250" alt="mlf" title="mlf" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/ecommyicon_vdbgch.webp" height="100" width="250" alt="ecommy" title="ecommy" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/yaydooicon_ejckic.webp" height="100" width="250" alt="yaydoo" title="yaydoo" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/grupo_mgyg_ppbyyx.webp" height="100" width="250" alt="horizon" title="horizon" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/mycicon_ycxd6t.webp" height="100" width="250" alt="myc" title="myc" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/Gemconex_kwybhi.webp" height="100" width="250" alt="vecchio" title="vecchio" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1721225805/LOGO_SERGIKIGAI_fondo_transparente-04_de3ku3.webp" height="100" width="100" alt="vecchio" title="vecchio" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1710968187/salvatuempresa/salvalogocolor_ote8it.webp" height="90" width="90" alt="vecchio" title="vecchio" />
                    </div>

                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/calmicon_oh5tbm.webp" height="100" width="250" alt="calm" title="calm" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/mlf_dsh6zu.webp" height="100" width="250" alt="mlf" title="mlf" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/ecommyicon_vdbgch.webp" height="100" width="250" alt="ecommy" title="ecommy" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/yaydooicon_ejckic.webp" height="100" width="250" alt="yaydoo" title="yaydoo" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/grupo_mgyg_ppbyyx.webp" height="100" width="250" alt="horizon" title="horizon" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686167790/fusionWeb/mycicon_ycxd6t.webp" height="100" width="250" alt="myc" title="myc" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686342371/fusionWeb/Gemconex_kwybhi.webp" height="100" width="250" alt="vecchio" title="vecchio" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1721225805/LOGO_SERGIKIGAI_fondo_transparente-04_de3ku3.webp" height="100" width="100" alt="vecchio" title="vecchio" />
                    </div>
                    <div className={style.slide}>
                        <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1710968187/salvatuempresa/salvalogocolor_ote8it.webp" height="90" width="90" alt="vecchio" title="vecchio" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients