import React, { useState } from 'react';
import { dataworkes } from '../../Data/DataWorkes'
import './workes.css'
const slides = [
    {
        title: "Slide 1",
        subtitle: "Foxy Image",
        image:
            "https://images.unsplash.com/photo-1559526971-55f629b0b760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
        title: "Slide 2",
        subtitle: "cuty awl",
        image:
            "https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
    },
    {
        title: "Slide 3",
        subtitle: "nice cat",
        image:
            "https://images.unsplash.com/photo-1557408938-0f220f49bca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    }
];
const Workes = () => {
    const initialValue = ['all', 'js', 'css', 'php'];
    const allowedState = [];
    const [menuActive, setMenuState] = useState(true);
    const [listwork, setlistwork] = useState(dataworkes);
    const [buts, setbuts] = useState(initialValue);

    const [cur, setCur] = React.useState(0);
    const nextMoving = () => {
        if (cur >= slides.length - 1) {
            setCur(0);
        } else {
            setCur(cur + 1);
        }
    };
    const prevMoving = () => {
        if (cur <= 0) {
            setCur(slides.length - 1);
        } else {
            setCur(cur - 1);
        }
    };
    const handelBut = (e) => {
        console.log(e.target.value);
        let listwork;
        if (e.target.value === "all") {
            listwork = dataworkes;
        } else {
            listwork = dataworkes.filter(item => item.cat === e.target.value)
        }
        setlistwork(listwork)
    }
    return (
        <>
            <div className="bg-bgapp text-white lg:max-w-sho sm:max-w-3/4 sm:px-8 lg:pl-56 h-full   ">
                <h1 className="text-6xl  font-Poppins font-bold text-center pt-32 ">My <span className="text-primary">Works</span></h1>
                <p className="text-2xl  font-Poppins font-bold text-center pt-8 ">In a professional context it often happens that private <br /> clients corder a publication to be made.</p>
              <div className="justify-center  flex items-center flex-wrap mt-16">

              <button className="py-4 px-8 mr-8 sm:-mb-32 lg:mb-px shadow-sh hover:shadow-nav rounded-lg font-bold text-2xl text-primary border-0" value="all" onClick={handelBut}>All</button>
                <button className="py-4 px-8 mr-8 sm:-mb-32 lg:mb-px shadow-sh hover:shadow-nav rounded-lg font-bold text-2xl text-primary" value="Web Design" onClick={handelBut}>Web Design</button>
                <button className="py-4 px-8 mr-8 sm:-mb-32 lg:mb-px shadow-sh hover:shadow-nav rounded-lg font-bold text-2xl text-primary" value="js" onClick={handelBut}>Mobile Design</button>
                <button className="py-4 px-8 mr-8 sm:-mb-32 lg:mb-px shadow-sh hover:shadow-nav rounded-lg font-bold text-2xl text-primary" value="js" onClick={handelBut}>Seo</button>
                <button className="py-4 px-8 mr-8 sm:-mb-32 lg:mb-px shadow-sh hover:shadow-nav rounded-lg font-bold text-2xl text-primary" value="php" onClick={handelBut}>Graphic</button>
              </div>
                

                <div className="flex justify-between items-center flex-wrap mt-32 ">
                    {
                        listwork.map((items, index) => {
                            return <div key={index} className="min-h-hwork sm:w-full lg:w-box h-auto relative shadow-sh rounded-lg sm:mt-16 lg:mt-px mb-16">
                                <div className="containerr relative">
                                    <img src={items.img} alt='Main Logo' className=" rounded-lg h-full px-4 py-4 hover:scale-50 " />
                                    <div className="overlay ">
                                        <p className=" text-6xl text-center mt-24 cursor-pointer"><i className="fa fa-link bg-boxtow  rounded-lg p-4 "></i>
                                            <span className="pl-8"><i className="fa fa-search-plus bg-primary rounded-lg p-4" onClick={() => setMenuState(!menuActive)}></i></span></p>
                                        <h1 className="text-3xl text-center mt-8 font-bold">{items.titel}</h1>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>






                <div className={`   ${menuActive ? '' : 'slidee'}`}>
                    <button className={`  ${menuActive ? 'hidden' : 'block'}`} onClick={() => setMenuState(!menuActive)} >close</button>
                    {/* <section className={`box1  ${menuActive ? 'hidden' : 'block'}`}>
                        {!slides || slides.length === 0 ? null : (
                            <>
                                <button className="prev" onClick={prevMoving}>
                                    <span className="lnr lnr-chevron-left" />fvrevgferverver
                    <span className="slid__number">0{cur + 1}/{slides.length}</span>
                                </button>
                                <button className="next" onClick={nextMoving}>
                                    <span className="lnr lnr-chevron-right" />rgrgergergerger
                </button>
                                {slides.map((slide, idx) => {
                                    return (

                                        <div className={idx === cur ? "slide active" : "slide"} >
                                            <h1 className="slide__title">{slide.Slidestitle}</h1>
                                            <h2 className="slide__subtitle">{slide.subtitle}</h2>
                                            <img src={slide.image} alt={slide.subtitle} className="slide__image" />
                                        </div>

                                    );
                                })}
                            </>
                        )}
                    </section> */}
                </div>

            </div>
        </>
    );
};

export default Workes
