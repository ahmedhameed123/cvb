import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuActive, setMenuState] = useState(true);
 
    return (
        <>          
          <div className={` bg-primary lg:block    fixed shadow-sh top-0 right-0 z-50 rounded-full my-6 mr-8 ${menuActive ? 'hidden' : 'block'}`}>
                <button className="p-4 text-white"> <i className="fa fa-user text-white text-3xl"></i> </button>
            </div>
            <div className={` bg-primary   fixed shadow-sh top-0 left-0 z-50 rounded-full my-6 sm:block lg:hidden  ${menuActive ? 'ml-6' : 'ml-32'}`}>
                {menuActive ? <i className="fa fa-align-justify text-3xl text-white p-6" onClick={() => setMenuState(!menuActive)}></i> :
                    <i className="fa fa-times-circle text-3xl text-white p-6" onClick={() => setMenuState(!menuActive)}></i>
                }
            </div>
            <div className={` lg:block ${menuActive ? 'hidden' : 'block'}`}>
                <div className="sm:w-24 lg:w-sho bg-bgapp h-screen fixed shadow-sh top-0 left-0 z-50 rounded-sh ">

                    <img src={require('../assets/img/faricon.png')} alt='Main Logo' className="w-32  " />

                    <ul className="list-none  text-center menu w-full pt-24" id="menu">
                        <li className="pt-6 ">
                            <Link className="text-primary font-muil font-bold ml-2 mr-4 flex flex-col py-3 rounded-full shadow-sh hover:shadow-nav" to='/'>
                                <i className="fa fa-home text-3xl "></i>
                                <span className="text-1xl">home</span></Link>
                        </li>
                        <li className="pt-6 ">
                            <Link className="text-primary font-muil font-bold ml-2 mr-4 flex flex-col py-3 rounded-full shadow-sh hover:shadow-nav" to="/about">
                                <i className="fa fa-user text-3xl"></i>
                                <span className="text-1xl">about</span></Link>
                        </li>
                        <li className="pt-6 ">
                            <Link className="text-primary font-muil font-bold ml-2 mr-4 flex flex-col py-3 rounded-full shadow-sh hover:shadow-nav" to="/resname">
                                <i className=" fa fa-file text-3xl"></i>
                                <span className="text-1xl">resume</span></Link>
                        </li>
                        <li className="pt-6 ">
                            <Link className="text-primary font-muil font-bold ml-2 mr-4 flex flex-col py-3 rounded-full shadow-sh hover:shadow-nav" to="/workes">
                                <i className="fa fa-briefcase text-3xl"></i>
                                <span className="text-1xl">works</span></Link>
                        </li>
                        <li className="pt-6 ">
                            <Link className="text-primary font-muil font-bold ml-2 mr-4 flex flex-col py-3 rounded-full shadow-sh hover:shadow-nav" to="/blog">
                                <i className="fa fa-cubes text-3xl"></i>
                                <span className="text-1xl">blog</span></Link>

                        </li>
                        <li className="pt-6 ">
                            <Link className="text-primary font-muil font-bold ml-2 mr-4 flex flex-col py-3 rounded-full shadow-sh hover:shadow-nav" to="/contact">
                                <i className="fa fa-envelope text-3xl"></i>
                                <span className="text-1xl">contact</span></Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
