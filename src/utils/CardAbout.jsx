
// eslint-disable-next-line react/prop-types
const CardAbout = ({ image, title, subtitle, phrase, href, left }) => {
    return (
        <div className="flex flex-col items-center mb-16 md:flex-row ">
            {
                left || window.innerWidth < 600 ? (
                    <>
                        <div className="w-full md:mx-4 lg:mx-20 flex flex-col">
                            <img src={image} alt={title} className="w-full " />
                        </div>

                        <div className="w-full inline-block md:mx-4 lg:mx-20">
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
                        <div className="w-full flex flex-col items-start md:mx-4 lg:ml-44 ">
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

                        <div className="w-full  md:mx-4 lg:mr-44">
                            <img src={image} alt={title} className="w-full " />
                        </div>
                    </>
                )

            }

        </div>
    )
}

export default CardAbout