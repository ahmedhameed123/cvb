import React from 'react'

function Contact() {
    return (
        <div className="w-full   bg-bgapp   text-white h-full    lg:max-w-sho sm:max-w-3/4 sm:px-8 lg:pl-56">
            <h1 className="text-6xl  font-Poppins font-bold text-center pt-32 ">Get  <span className="text-primary">in Touch</span></h1>
            <p className="text-2xl  font-Poppins font-bold text-center pt-8 ">In a professional context it often happens that private <br /> clients corder a publication to be made.</p>

            <div className="flex justify-between items-center flex-wrap w-full pt-16 ">
                <div className="sm:w-full sm:pt-16 lg:w-3/12 text-center">
                    <img src={require('../assets/img/phone.svg')} alt='Main Logo' className="text-center w-20 h-sm mx-auto" />
                    <h2 className="text-2xl pt-6"> Call Us On</h2>
                    <p className="text-1xl pt-6">+123 456 7890</p>
                </div>
                <div className="sm:w-full sm:pt-16 lg:w-3/12 text-center">
                    <img src={require('../assets/img/location.svg')} alt='Main Logo' className="text-center w-20 h-sm mx-auto" />
                    <h2 className="text-2xl pt-6"> 24 Street, New York, United State.</h2>
                    <p className="text-1xl pt-6">24 Street, New York, United State.</p>
                </div>
                <div className="sm:w-full sm:pt-16 lg:w-3/12 text-center">
                    <img src={require('../assets/img/send.svg')} alt='Main Logo' className="text-center w-20 h-sm mx-auto" />
                    <h2 className="text-2xl pt-6">Email Us At</h2>
                    <p className="text-1xl pt-6">abc@gmail.com</p>
                </div>
            </div>
            <div className="mt-16 ">
                        <form action="">
                            <div className="mt-16 flex justify-between items-center flex-wrap ">
                                <input className="shadow-nav bg-bgapp  rounded-full text-gray-700 text-sm font-bold placeholder-gray-700 sm:w-full lg:w-5/12 p-4 outline-none h-20   " type="text" placeholder="Your Name*" />
                                <input className="shadow-nav bg-bgapp  rounded-full text-gray-700 text-sm font-bold placeholder-gray-700 sm:w-full sm:mt-8 lg:mt-px lg:w-5/12 p-4 outline-none h-20   " type="text" placeholder="Your Email*" />
                            </div>
                            <div className="mt-8">
                            <input className="shadow-nav bg-bgapp  rounded-full text-gray-700 text-sm font-bold placeholder-gray-700 w-full p-4 outline-none h-20   " type="text" placeholder="Sbiject*" />
                            </div>
                            <div className="my-8">
                                <textarea className="shadow-nav bg-bgapp  rounded-lg text-gray-700 text-sm font-bold placeholder-gray-700 w-full p-4 outline-none h-64" type="textarea" placeholder="Your Massage*"></textarea>
                            </div>
                            <button className="shadow-sh bg-bgapp  rounded-full p-8 text-white">register now</button>

                        </form>
                    </div>
                    <h1 className="text-center text-boxone text-2xl pt-16 pb-6">Copyright © 2019. Template has been designed by Retrina</h1>
        </div>
    )
}

export default Contact
