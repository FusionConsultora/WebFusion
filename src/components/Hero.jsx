
const Hero = () => {
    return (
        <section className='bg-gradient-to-t from-white via-brand-lightBlue/30 to-brand-lightBG/90 md:bg-gradient-to-tr md:from-white md:via-brand-lightBG/30 md:to-brand-lightBG/90'>
            <div className='flex w-full max-w-5xl py-36 m-auto'>

                {/* <div className={`w-full m-auto max-w-6xl lg:flex p-4 lg:p-12 items-center justify-center`}>

                    <div className='w-full max-w-3xl m-auto sm:max-w-md'>
                        <h1 className=' text-[40px] leading-[1.1] text-brand-title font-semibold text-left sm:text-5xl'>
                            Impulsa tu negocio hacia el futuro con nosotros.
                        </h1>
                        <p className='p-1 pb-5 mt-12 text-lg font-light text-left text-brand-description'>
                            Potencia tu empresa con soluciones vanguardistas. Lleva tus proyectos más allá de los límites convencionales.
                        </p>
                    </div>
                    <div className='flex items-center justify-center w-full m-auto my-5 lg:justify-end'>
                        <img src='https://res.cloudinary.com/dkbp6rk0s/image/upload/v1686085114/pc2_b0nufs.png' alt='icono header' className='h- w-96 cursor-pointer' />

                    </div>
                </div> */}



                <div>
                    <div>
                        <h1 className=' text-4xl leading-[1.1] text-brand-title font-bold text-left sm:text-5xl'>
                            Impulsa tu negocio hacia el <br></br>
                            futuro con nosotros.
                        </h1>
                    </div>
                    <div className="flex justify-between" >
                        <p className='w-96 p-1 pb-5 mt-12 text-2xl leading-10 font-normal text-left text-brand-description'>
                            Potencia tu empresa con soluciones vanguardistas. Lleva tus proyectos más allá de los límites convencionales.
                        </p>
                        <div className="ml-48 -mt-10">
                            <img src='https://res.cloudinary.com/dkbp6rk0s/image/upload/v1686085114/pc2_b0nufs.png' alt='icono header' className=' w-[30rem] cursor-pointer' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero;