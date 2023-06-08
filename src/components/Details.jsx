import { motion } from 'framer-motion'

const Details = () => {

    const spring = {
        type: 'spring',
        damping: 10,
        stiffness: 100
    }

    return (
        <div className='flex justify-center'>

            <motion.div
                initial={{ opacity: 0, y: '2%' }}
                whileInView={{ opacity: 1, y: '0%' }}
                viewport={{ once: false }}
                transition={spring}
                className={`w-11/12 lg:w-4/5 2xl:w-3/5 flex flex-col lg:flex-row mx-auto shadow-lg py-14 px-10 rounded-md `}
            >
                <div className='flex flex-col w-full mt-12 lg:w-1/2 lg:mt-0'>
                    {/* <h1 className='mb-10 text-2xl font-medium font-rubik text-brand-title'>{item.name}</h1> */}
                    <h3 className='mb-10 text-2xl  font-medium text-brand-title'>What’s included in this package</h3>
                    <ul className='flex flex-col items-start justify-center gap-6
                  [&>li]:text-brand-description [&>li]:text-lg [&>li]:flex  [&>li]:gap-2
                  [&>li>span]:text-brand [&>li>span]:text-3xl'
                    >
                        {/* <li>
                    <span><BsCheck /></span>
                    <i>Market sizing and share analysis</i>
                  </li>
                  <li>
                    <span><BsCheck /></span><i>Product value proposition analysis</i>
                  </li>
                  <li>
                    <span><BsCheck /></span><i>Identify strategic partnership</i>
                  </li>
                  <li>
                    <span><BsCheck /></span><i>Implementation milestone review</i>
                  </li>
                  <li>
                    <span><BsCheck /></span><i>Innovation opportunities</i>
                  </li>
                  <li>
                    <span><BsCheck /></span><i>Distribution channel opportunities</i>
                  </li> */}
                        {item.benefits?.map((benefit, index) => (
                            <li key={index}>
                                <span><BsCheck /></span>
                                <i className='text-brand-description  font-light'>{benefit}</i>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col w-full mt-12 lg:w-1/2 lg:mt-0'>
                    <h3 className='mb-10 text-2xl  font-medium text-brand-title'>Business approach -</h3>
                    <p className='mb-7 text-brand-description  font-light'>Our experts follow the business strategy to grow up your business and engage more customers to your door.</p>
                    <ul className='flex flex-col items-start justify-start gap-6 pb-4'>
                        {/* <li className='flex gap-2 text-lg text-brand-text'>
                    <span className='text-3xl text-red-600'><BsCheck /></span><i>Getting to know your business vision and the key strategic drivers.</i>
                  </li>
                  <li className='flex gap-2 text-lg text-brand-text'>
                    <span className='text-3xl text-red-600'><BsCheck /></span><i>Detailed research of the business environment, target market, and marketing as well as growth opportunities.</i>
                  </li> */}
                        {item.businessApproach?.map((approach, index) => (
                            <li key={index} className='flex gap-2 text-lg text-brand-description'>
                                <span className='text-3xl text-brand'><BsCheck /></span><i className='text-brand-description  font-light'>{approach}</i>
                            </li>
                        ))}
                    </ul>

                </div>
            </motion.div>

        </div>
    )
}

export default Details