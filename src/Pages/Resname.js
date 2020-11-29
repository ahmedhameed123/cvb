import React from 'react'
import Progress from './Projser'
import './home.css'

function Resname() {
    return (
        <div>
            <div className="w-full   bg-bgapp   text-white  h-full    lg:max-w-sho sm:max-w-3/4 sm:px-8 lg:pl-56">
                <h1 className="text-6xl  font-Poppins font-bold text-center pt-32 ">My <span className="text-primary">Resume</span></h1>
                <p className="text-2xl  font-Poppins font-bold text-center pt-8 ">In a professional context it often happens that private <br /> clients corder a publication to be made.</p>



                <div className="flex justify-between flex-wrap w-full mt-16">

                    <div className="w-skill">
                        <h1 className="text-4xl mb-16"> <i className="fa fa-graduation-cap pr-6"></i>Education</h1>
                        <div className="shadow-sh rounded-lg ">

                            <div className="timeline px-6 py-6 ">

                                <div className="border-l-8 border-solid  border-boxone pl-6 relative pr-32 ">
                                    <div className="absolute  h-6 bg-boxone w-6  rounded-full bor "></div>

                                    <h1 className="text-2xl ">Master In Computer Science</h1>
                                    <p className="text-xl pt-6 text-primary">2008 - 2012</p>
                                    <p className="text-2xl pt-6  pr-10">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare.
                                    </p>
                                </div>

                                <div className="border-l-8 border-solid  border-boxtow pl-6 relative pr-32 mt-16 ">
                                    <div className="absolute  h-6 bg-boxtow w-6  rounded-full bor "></div>

                                    <h1 className="text-2xl ">Master In Computer Science</h1>
                                    <p className="text-xl pt-6 text-primary">2008 - 2012</p>
                                    <p className="text-2xl pt-6  pr-10">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare.
                                    </p>
                                </div>



                                <div className="border-l-8 border-solid  border-primary pl-6 relative pr-32 mt-16 ">
                                    <div className="absolute  h-6 bg-primary w-6  rounded-full bor "></div>

                                    <h1 className="text-2xl ">Master In Computer Science</h1>
                                    <p className="text-xl pt-6 text-primary">2008 - 2012</p>
                                    <p className="text-2xl pt-6  pr-10">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare.
                                    </p>
                                </div>


                            </div>

                        </div>
                    </div>

                    <div className="w-skill">
                        <h1 className="text-4xl mb-16"> <i className="fa fa-pencil pr-6"></i>  Experience</h1>
                        <div className="shadow-sh rounded-lg ">

                            <div className="timeline px-6 py-6 ">

                                <div className="border-l-8 border-solid  border-boxone pl-6 relative pr-32 ">
                                    <div className="absolute  h-6 bg-boxone w-6  rounded-full bor "></div>

                                    <h1 className="text-2xl ">Master In Computer Science</h1>
                                    <p className="text-xl pt-6 text-primary">2008 - 2012</p>
                                    <p className="text-2xl pt-6  pr-10">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare.
                                    </p>
                                </div>

                                <div className="border-l-8 border-solid  border-boxtow pl-6 relative pr-32 mt-16 ">
                                    <div className="absolute  h-6 bg-boxtow w-6  rounded-full bor "></div>

                                    <h1 className="text-2xl ">Master In Computer Science</h1>
                                    <p className="text-xl pt-6 text-primary">2008 - 2012</p>
                                    <p className="text-2xl pt-6  pr-10">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare.
                                    </p>
                                </div>



                                <div className="border-l-8 border-solid  border-primary pl-6 relative pr-32 mt-16 ">
                                    <div className="absolute  h-6 bg-primary w-6  rounded-full bor "></div>

                                    <h1 className="text-2xl ">Master In Computer Science</h1>
                                    <p className="text-xl pt-6 text-primary">2008 - 2012</p>
                                    <p className="text-2xl pt-6  pr-10">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare.
                                    </p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>






                <div className="flex justify-between flex-wrap w-full mt-16">
                    <div className="sm:w-full lg:w-skill">
                        <h1 className="text-4xl mb-16"> Work Skills</h1>
                        <div className="shadow-sh rounded-lg py-8 pl-6">
                            <h1 className="text-3xl"> Html</h1>

                            <Progress done="95" />
                            <h1 className="text-3xl pt-6"> css</h1>
                            <Progress done="50" />

                            <h1 className="text-3xl pt-6"> php</h1>
                            <Progress done="30" />

                            <h1 className="text-3xl pt-6"> JQuery</h1>
                            <Progress done="80" />
                        </div>
                    </div>



                    <div className="sm:w-full lg:w-skill">
                        <h1 className="text-4xl mb-16">Language Skills</h1>
                        <div className="shadow-sh rounded-lg">
                            <div className="flex justify-between w-full flex-col  py-10 px-6 ">
                                <div className=" flex justify-between items-center w-full ">
                                    <div>
                                        <ul className="text-3xl">
                                            <li className="">English Fluent</li>
                                        </ul>
                                    </div>
                                    <div  >
                                        <ul className="text-3xl">
                                            <li className="  flex  text-boxone">
                                                <i className="fa fa-star pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star-half-empty pl-2"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className=" flex justify-between items-center w-full pt-10">
                                    <div>
                                        <ul className="text-3xl">
                                        <li className="">Arabic Native</li>
                                      
                                        </ul>
                                    </div>
                                    <div  >
                                        <ul className="text-3xl">
                                            <li className="  flex text-boxtow ">
                                                <i className="fa fa-star pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star-half-empty pl-2"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>




                                <div className=" flex justify-between items-center w-full pt-10">
                                    <div>
                                        <ul className="text-3xl">
                                        <li className="">English Fluent</li>
                                       
                                        </ul>
                                    </div>
                                    <div  >
                                        <ul className="text-3xl">
                                            <li className="  flex text-primary">
                                                <i className="fa fa-star pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star-half-empty pl-2"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                


                                <div className=" flex justify-between items-center w-full pt-10">
                                    <div>
                                        <ul className="text-3xl">

                                        <li className="">Arabic Native</li>                                  
                                           
                                        </ul>
                                    </div>
                                    <div  >
                                        <ul className="text-3xl">
                                            <li className="  flex  text-boxtow">
                                                <i className="fa fa-star pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star-half-empty pl-2"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                

                                <div className=" flex justify-between items-center w-full py-10">
                                    <div>
                                        <ul className="text-3xl">
                                        <li className="">English Fluent</li>
                                         
                                        </ul>
                                    </div>
                                    <div  >
                                        <ul className="text-3xl">
                                            <li className="  flex ">
                                                <i className="fa fa-star pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star  pl-2"></i>
                                                <i className="fa fa-star-half-empty pl-2"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                



                            </div>
                        </div>
                    </div>

















                </div>

            </div>
        </div>
    )
}

export default Resname
