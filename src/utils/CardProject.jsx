import { useEffect, useState } from "react";
import Modal from 'react-modal';

import { motion } from 'framer-motion'
// import { BsCheck } from 'react-icons/bs'

import AOS from 'aos';
import 'aos/dist/aos.css';

// eslint-disable-next-line react/prop-types
const CardProject = ({ image, title, subtitle, phrase, left, modalTitle, items }) => {

    Modal.setAppElement('#root')

    const [showModalFoto, setShowModalFoto] = useState(false);

    const openModal = () => {
        setShowModalFoto(true)
    }

    const closeModal = () => {
        setShowModalFoto(false)
    }

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    console.log('items', items);
    return (
        <div className="flex flex-col items-center mb-16 md:flex-row  ">
            {
                left || window.innerWidth < 600 ? (
                    <>
                        <div className="w-full md:mx-4 lg:mx-20 flex flex-col items-center"
                            // data-aos={fade}
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <img src={image} alt={title} title={title} className="w-5/6 h-[100%]" />
                        </div>

                        <div className="w-full inline-block md:mx-4 "
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <h2 className="text-4xl text-brand-blue font-extrabold mb-6 md:mb-10 lg:w-96">
                                {title}
                            </h2>
                            <h3 className="text-base text-gray-500 font-light mb-6 max-w-[30rem] md:mb-10 z-10">
                                {subtitle}
                            </h3>
                            <button className="text-lg text-brand-lightBlue font-light p-2 border border-brand-lightBlue rounded-md cursor-pointer w-fit" onClick={openModal} >
                                {phrase}
                            </button>

                        </div>
                    </>

                ) : (
                    <>
                        <div className="w-full flex flex-col items-start md:mx-4 lg:ml-44"
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <h2 className="text-4xl text-brand-blue font-extrabold mb-6 md:mb-10 lg:w-96 text-start">
                                {title}
                            </h2>
                            <h3 className="text-base text-gray-500 font-light mb-6 max-w-[30rem] md:mb-10 text-start">
                                {subtitle}
                            </h3>
                            <button className="text-lg text-brand-lightBlue font-light p-2 border border-brand-lightBlue rounded-md cursor-pointer w-fit" onClick={openModal} >
                                {phrase}
                            </button>
                        </div>

                        <div className="w-full m-auto md:mx-4 lg:mr-44"
                            // data-aos={fade}
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <img src={image} alt={title} title={title} className="w-5/6 m-auto h-[100%]" />
                        </div>
                    </>
                )

            }

            <Modal
                isOpen={showModalFoto}
                contentLabel="Details Service"
                onRequestClose={() => setShowModalFoto(false)}
                appElement={document.getElementById('root')}
                className="mt-28 bg-white px-7 rounded-md md:w-3/5 mx-auto xl:w-2/4 max-h-[80vh] overflow-y-auto"
                overlayClassName="fixed inset-0 bg-black/70 z-40"
            >
                <motion.div
                    initial={{ opacity: 0 }}  // Estado inicial del modal (transparente)
                    animate={{ opacity: 1 }}  // Estado final del modal (visible)
                    exit={{ opacity: 0 }}     // Estado de salida del modal (transparente)
                    transition={{ duration: 0.4 }}
                >
                    <div className="relative pb-1 font-poppins ">
                        <span className="text-gray-500 font-extrabold text-lg text-end absolute top-6 right-0 float-right cursor-pointer" onClick={closeModal}>X</span>
                    </div>
                    <div className='flex flex-col mt-12 pb-6 text-center'>
                        <h3 className='mb-4 text-2xl font-semibold text-brand-title font-poppins'>{modalTitle}</h3>
                        {
                            // eslint-disable-next-line react/prop-types
                            items && items.map((item, index) => (
                                <div className="flex flex-col gap-2 mt-6 text-left" key={index}>
                                    {
                                        item.list ? (
                                            <>
                                                <p className='text-gray-70000 font-medium -mb-1 font-poppins'>{item.subtitle}</p>
                                                <ul className='list-disc pl-8 flex flex-col gap-y-2 font-poppins'>
                                                    {
                                                        item.items.map((item, index) => (
                                                            <li key={index} className='text-gray-500 leading-[1.5] font-normal'>{item}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </>
                                        ) : (
                                            item.items.map((item, index) => (
                                                <li key={index} className='text-gray-600 leading-[1.5] font-normal font-poppins'>{item}</li>
                                            ))
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </motion.div>
            </Modal>

        </div >
    )
}

// CardProject.propTypes = {
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     phrase: PropTypes.string.isRequired,
//     left: PropTypes.bool,
//     modalTitle: PropTypes.string.isRequired,
//     modalOptions: PropTypes.arrayOf(PropTypes.string),
//     items: PropTypes.arrayOf(PropTypes.shape({
//         list: PropTypes.bool.isRequired,
//         subtitle: PropTypes.string,
//         items: PropTypes.arrayOf(PropTypes.string).isRequired
//     })).isRequired
// };

export default CardProject