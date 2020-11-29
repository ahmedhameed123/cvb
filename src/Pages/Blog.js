import React from 'react'
import './blog.css'
function Blog() {
    return (
        <div className="w-full   bg-bgapp   text-white h-full    lg:max-w-sho sm:max-w-3/4 sm:px-8 lg:pl-56">
            <h1 className="text-6xl  font-Poppins font-bold text-center pt-32 ">My <span className="text-primary">News Post</span></h1>
            <p className="text-2xl  font-Poppins font-bold text-center pt-8 ">In a professional context it often happens that private clients corder a publication to be made. <br /> clients corder a publication to be made.</p>

            <div className="flex justify-between items-center flex-wrap">

                <div className="boxblog">
                    <div className="boxblogone">
                        <div className="blogimg">
                            <img src={require('../assets/img/blog.jpg')} alt='Main Logo' />
                        </div>
                    </div>
                    <div className="blogtext    ">
                        <div className="  flex  ">
                            <p className="text-boxtow"> <i class="fa fa-calendar-week"></i><soan>June 02, 2020</soan></p>
                            <p className="text-boxtow pl-32"> <i class="fa fa-calendar-week"></i><soan>5</soan></p>
                        </div>
                        <h1 className="text-3xl pt-8">Be Your Best Version</h1>
                        <p  className="text-2xl pt-16">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                   <p  className="text-3xl pt-16">Read More...</p>
                    </div>

                </div>
                <div className="boxblog">
                    <div className="boxblogone">
                        <div className="blogimg">
                            <img src={require('../assets/img/blog.jpg')} alt='Main Logo' />
                        </div>
                    </div>
                    <div className="blogtext    ">
                        <div className="  flex  ">
                            <p className="text-boxtow"> <i class="fa fa-calendar-week"></i><soan>June 02, 2020</soan></p>
                            <p className="text-boxtow pl-32"> <i class="fa fa-calendar-week"></i><soan>5</soan></p>
                        </div>
                        <h1 className="text-3xl pt-8">Be Your Best Version</h1>
                        <p  className="text-2xl pt-16">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                   <p  className="text-3xl pt-16">Read More...</p>
                    </div>

                </div>
                <div className="boxblog">
                    <div className="boxblogone">
                        <div className="blogimg">
                            <img src={require('../assets/img/blog.jpg')} alt='Main Logo' />
                        </div>
                    </div>
                    <div className="blogtext    ">
                        <div className="  flex  ">
                            <p className="text-boxtow"> <i class="fa fa-calendar-week"></i><soan>June 02, 2020</soan></p>
                            <p className="text-boxtow pl-32"> <i class="fa fa-calendar-week"></i><soan>5</soan></p>
                        </div>
                        <h1 className="text-3xl pt-8">Be Your Best Version</h1>
                        <p  className="text-2xl pt-16">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                   <p  className="text-3xl pt-16">Read More...</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blog
