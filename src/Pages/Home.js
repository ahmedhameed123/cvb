import React, { useEffect, useRef } from "react";
import Typical from 'react-typical'

import { Link } from 'react-router-dom';
import { gsap } from "gsap/all";

const steps = [
    'Hello 👋', 1000,
    'I am react-typical', 1000,
    'I can support emoji 👌', 1000,
    'I can only delete what needs deleting', 1000,
    'I can pause', 4000,
    'I can loop', 1000,
    'I can wait', 3000,
    'I can vary typing speed', 2000,
    'Install me now', 1000,
    'npm install --save react-typical'
];
function Home() {
     let head = useRef(null);
    let subhead = useRef(null);
    let subhea = useRef(null);
    useEffect(() => {
       	 
        gsap.from([head], 0.5, {delay: 0.4,   ease: "power3.out", x: -100, autoAlpha: 0   })
        gsap.from(subhead, 0.5, {delay: 0.9, x: 100, autoAlpha: 0 ,opacity:0 }, "-=0.25")
        gsap.from(subhea, 0.5, {delay: 0.6,  autoAlpha: 0 ,opacity:0 }, "-=0.25")
     }, [head,subhead,subhea ]);

    return (
        <div className="bg-bgapp text-white lg:max-w-sho sm:max-w-3/4 sm:px-8 lg:pl-56 ">
            <div className=" flex flex-row  justify-between items-center flex-wrap-reverse  sm:h-full lg:h-screen  w-full">
                {/* write text info */}
                <div className="sm:w-full lg:w-4/12 sm:text-center lg:text-left">
                    <h1 ref={h1 => (head = h1)} className="text-6xl font-Poppins font-bold ">I'M Ahmed Hmeed</h1>
                    <h3 className="text-4xl mt-6  font-Poppins font-bold"ref={h1 => (subhea = h1)}><span className="text-primary">A</span> <Typical wrapper="span" steps={steps} loop={1} /></h3>
                    <p className="mt-6 text-2xl" ref={h1 => (subhead = h1)}>In a professional context it often happens that private clients corder a publication to be made.</p>
                    <div className="flex my-16  sm:mx-48 lg:mx-px">
                        <Link to="/"> <img src={require('../assets/img/facebook.svg')} alt='Main Logo' className="w-8 mr-8" /></Link>
                        <Link to="/"><img src={require('../assets/img/twitter.svg')} alt='Main Logo' className=" w-8 mr-8 " /></Link>
                        <Link to="/"> <img src={require('../assets/img/github.svg')} alt='Main Logo' className=" w-8 mr-8 " /></Link>
                        <Link to="/"><img src={require('../assets/img/linkedin.svg')} alt='Main Logo' className="w-8 mr-8  " /></Link>
                    </div>
                </div>

                {/*my image*/}
                <div className="sm:w-full lg:w-8/12  sm:mt-32 lg:mt-px xsm:w-64">
<div className=" ">
{/* <img src={require('../assets/img/bg.png')} alt='Main vb' className=" pic w-4/12 h-9/12   " /> */}

<img src={require('../assets/img/my1.jpg')} alt='Main Logo'
    className="rounded-full  lg:w-3/5 sm:w-full items-center mx-auto   " />
</div>
                    


                </div>

            </div>
        </div>

    )
}

export default Home
