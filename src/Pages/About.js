import React from 'react'
import Slider from "react-slick"
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'

function About() {
    var settings = {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay:true,
        dots:true,
        dotsClass: "button__bar",
    }
    return (

        <div className="w-full   bg-bgapp   text-white     lg:max-w-sho sm:max-w-3/4 sm:px-8 lg:pl-56">
            <h1 className="text-6xl  font-Poppins font-bold text-center pt-32 ">About <span className="text-primary">Me</span></h1>
            <p className="text-2xl  font-Poppins font-bold text-center pt-8 ">In a professional context it often happens that private <br /> clients corder a publication to be made.</p>

            <div className=" flex flex-wrap justify-between   w-full pt-24">
                <div className="sm:w-full lg:w-2/4 ">
                    <img src={require('../assets/img/about-01.jpg')} alt='Main Logo' className="rounded-lg shadow-sh" />
                </div>
                <div className="sm:w-f lg:w-2/4">
                    <h1 className="sm:text-3xl sm:pt-16 lg:pt-px lg:text-5xl font-Poppins font-bold"> <span className="text-primary">UI/UX </span> Designer & Web Developer</h1>
                    <div className="flex w-full  ">

                        <div className="sm:w-1/4 lg:w-2/4 mr-32 ">
                            <ul className=" list-none ">
                                <li className="text-3xl pt-8"><span>Birthday :</span>1 April 1990</li>
                                <li className="text-3xl pt-6"><span>Website : </span>www.retrina.com</li>
                                <li className="text-3xl pt-6"><span>Phone :</span>+131 656 7890</li>
                                <li className="text-3xl pt-6"><span>City :</span> New York, USA</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 lg:w-2/4">
                            <ul className=" list-none ">
                                <li className="text-3xl pt-8"><span>Birthday :</span>1 April 1990</li>
                                <li className="text-3xl pt-6"><span>Website : </span>www.retrina.com</li>
                                <li className="text-3xl pt-6"><span>Phone :</span>+131 656 7890</li>
                                <li className="text-3xl pt-6"><span>City :</span> New York, USA</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex pt-16 ">
                        <div className="p-6 mr-16 rounded-full shadow-sh hover:shadow-nav text-primary  font-Poppins   text-1xl "><Link to='/'>Download Cv</Link></div>
                        <div className="p-6   rounded-full shadow-sh hover:shadow-nav text-primary  font-Poppins   text-1xl"><Link to='/'>Hire Me</Link></div>

                    </div>
                </div>
            </div>


            <div className="rounded-lg shadow-sh my-32 mx-auto flex justify-between flex-wrap  items-center w-full">
                <div className="sm:w-1/2 lg:w-3/12  py-16 text-center">
                    <img src={require('../assets/img/folder.svg')} alt='Main Logo' className=" w-16  mx-auto" />
                    <h1 className="text-4xl  font-Poppins font-bold     pt-8 ">286</h1>
                    <h2 className="text-2xl  font-Poppins font-bold    pt-8 ">Files Download</h2>
                </div>
                <div className="sm:w-1/2 lg:w-3/12  py-16 text-center">
                    <img src={require('../assets/img/project.svg')} alt='Main Logo' className=" w-16  mx-auto" />
                    <h1 className="text-4xl  font-Poppins font-bold     pt-8 ">6549</h1>
                    <h2 className="text-2xl  font-Poppins font-bold    pt-8 ">Project Done</h2>
                </div>
                <div className="sm:w-1/2 lg:w-3/12  py-16 text-center">
                    <img src={require('../assets/img/medal.svg')} alt='Main Logo' className=" w-16  mx-auto" />
                    <h1 className="text-4xl  font-Poppins font-bold     pt-8 ">786</h1>
                    <h2 className="text-2xl  font-Poppins font-bold    pt-8 ">Get Award</h2>
                </div>
                <div className="sm:w-1/2 lg:w-3/12  py-16 text-center">
                    <img src={require('../assets/img/happy.svg')} alt='Main Logo' className=" w-16  mx-auto" />
                    <h1 className="text-4xl  font-Poppins font-bold     pt-8 ">286</h1>
                    <h2 className="text-2xl  font-Poppins font-bold    pt-8 ">Happy Client</h2>
                </div>
            </div>

            <h1 className="text-4xl  font-Poppins font-bold text-center  ">What I'm Doing</h1>

            <div className="flex justify-between items-center w-full my-16 flex-wrap">
                <div className="flex sm:full lg:w-box py-10  bg-boxone rounded-lg sm:my-6 lg:my-px">
                    <div className="px-6">
                        <img src={require('../assets/img/idea.svg')} alt='Main Logo' className=" w-32   " />
                    </div>
                    <div className="pr-16 ">
                        <h3 className="text-4xl">Graphic Design</h3>
                        <p className="text-2xl pt-6">In a professional context it often happens that private clients corder a publication to be made.</p>
                    </div>
                </div>
                <div className="flex sm:full lg:w-box py-10  bg-boxtow rounded-lg sm:my-6 lg:my-px">
                    <div className="px-6">
                        <img src={require('../assets/img/idea.svg')} alt='Main Logo' className=" w-32   " />
                    </div>
                    <div className="pr-16 ">
                        <h3 className="text-4xl">Graphic Design</h3>
                        <p className="text-2xl pt-6">In a professional context it often happens that private clients corder a publication to be made.</p>
                    </div>
                </div>
                <div className="flex sm:full lg:w-box py-10  bg-primary rounded-lg sm:my-6 lg:my-px">
                    <div className="px-6">
                        <img src={require('../assets/img/idea.svg')} alt='Main Logo' className=" w-32   " />
                    </div>
                    <div className="pr-16 ">
                        <h3 className="text-4xl">Graphic Design</h3>
                        <p className="text-2xl pt-6">In a professional context it often happens that private clients corder a publication to be made.</p>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-between items-center w-full my-16 flex-wrap">
                <div className="flex sm:full lg:w-box py-10  bg-boxtow rounded-lg sm:my-6 lg:my-px">
                    <div className="px-6">
                        <img src={require('../assets/img/idea.svg')} alt='Main Logo' className=" w-32   " />
                    </div>
                    <div className="pr-16 ">
                        <h3 className="text-4xl">Graphic Design</h3>
                        <p className="text-2xl pt-6">In a professional context it often happens that private clients corder a publication to be made.</p>
                    </div>
                </div>
                <div className="flex sm:full lg:w-box py-10  bg-primary rounded-lg sm:my-6 lg:my-px">
                    <div className="px-6">
                        <img src={require('../assets/img/idea.svg')} alt='Main Logo' className=" w-32   " />
                    </div>
                    <div className="pr-16 ">
                        <h3 className="text-4xl">Graphic Design</h3>
                        <p className="text-2xl pt-6">In a professional context it often happens that private clients corder a publication to be made.</p>
                    </div>
                </div>
                <div className="flex sm:full lg:w-box py-10  bg-boxone rounded-lg sm:my-6 lg:my-px">
                    <div className="px-6">
                        <img src={require('../assets/img/idea.svg')} alt='Main Logo' className=" w-32   " />
                    </div>
                    <div className="pr-16 ">
                        <h3 className="text-4xl">Graphic Design</h3>
                        <p className="text-2xl pt-6">In a professional context it often happens that private clients corder a publication to be made.</p>
                    </div>
                </div>
            </div>




            <h1 className="text-4xl  font-Poppins font-bold text-center  ">Client Says</h1>

            {/* <div className="flex justify-between items-center w-full mt-16 pb-16 flex-wrap "> */}
            <Slider {...settings}  >
                <div className="flex sm:full lg:w-slid py-10  rounded-lg shadow-sh rounded-lg sm:my-6 lg:my-px relative">
                    <div className="  shadow-sh   slidpg ">
                        <img src={require('../assets/img/man-avator.png')} alt='Main Logo' className=" w-32 rounded-full  " />
                    </div>
                    <div className="pt-10 px-16 ">
                    <p className="text-2xl pt-6">" In a professional
                         context it often that 
                        private or corporate clients publication
                         to be made.In a professional context it often happens that private."</p>
                        <h3 className="text-2xl py-6">John Doe,<span> CEO Management</span></h3>
                   
                    </div>
                </div>
                <div className="flex sm:full lg:w-slid py-10  rounded-lg shadow-sh rounded-lg sm:my-6 lg:my-px relative">
                    <div className="  shadow-sh   slidpg ">
                        <img src={require('../assets/img/man-avator.png')} alt='Main Logo' className=" w-32 rounded-full  " />
                    </div>
                    <div className="pt-10 px-16 ">
                    <p className="text-2xl pt-6">" In a professional
                         context it often that 
                        private or corporate clients publication
                         to be made.In a professional context it often happens that private."</p>
                        <h3 className="text-2xl py-6">John Doe,<span> CEO Management</span></h3>
                   
                    </div>
                </div>
                <div className="flex sm:full lg:w-slid py-10  rounded-lg shadow-sh rounded-lg sm:my-6 lg:my-px relative">
                    <div className="  shadow-sh   slidpg ">
                        <img src={require('../assets/img/man-avator.png')} alt='Main Logo' className=" w-32 rounded-full  " />
                    </div>
                    <div className="pt-10 px-16 ">
                    <p className="text-2xl pt-6">" In a professional
                         context it often that 
                        private or corporate clients publication
                         to be made.In a professional context it often happens that private."</p>
                        <h3 className="text-2xl py-6">John Doe,<span> CEO Management</span></h3>
                   
                    </div>
                </div>
                
                </Slider >

            {/* </div> */}

        </div>
    )
}

export default About
