import React from "react";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

function VerticalSlider(){
    const swiperRef = useRef(null);

    const handleReachEnd = (e) => {
        // Trigger scrolling when reaching the end of the Swiper
        window.scrollTo({
            top: window.scrollY + 1000, // Increment to trigger scroll
            behavior: 'smooth',
        });
    };

    return(
        <>
            <Swiper
                ref={swiperRef}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel]}
                onReachEnd={handleReachEnd}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <div className="border-2 border-white bg-[#323232] rounded-full w-fit p-2 relative top-8 left-[46%]">
                            <img src="/images/webDev.svg" alt="webDev" className="w-12 h-12" />
                        </div>
                        <div className="bg-[#323232] text-white pt-11 pb-2 px-2 text-center h-72">
                            <div className="flex justify-center gap-3 py-4">
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/reactjs.png" alt="react.js" />
                                </div>
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/js.png" alt="react.js" />
                                </div>
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/database.png" alt="react.js" />
                                </div>
                            </div>
                            <h1 className="font-semibold mb-2 text-[#00c2ff]">Web Development</h1>
                            <p className="text-base px-7">Whether you need a new digital product or a redesigned platform, we’re here to do our magic.</p>
                            <p className="text-base px-7">Crafting digital experiences that captivate and engage, our web development services blend creativity with cutting-edge technology to bring your ideas to life.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="border-2 border-white bg-[#001E43] rounded-full w-fit p-2 relative top-8 left-[46%]">
                            <img src="/images/webDev.svg" alt="webDev" className="w-12 h-12" />
                        </div>
                        <div className="bg-[#001E43] text-white pt-11 pb-2 px-2 text-center h-72">
                            <div className="flex justify-center gap-3 py-4">
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/reactjs.png" alt="react.js" />
                                </div>
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/js.png" alt="react.js" />
                                </div>
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/database.png" alt="react.js" />
                                </div>
                            </div>
                            <h1 className="font-semibold mb-2">Mobile App Development</h1>
                            <p className="text-base px-7">From concept to code, our mobile app development team is dedicated to turning your ideas into high-performance applications, ensuring a seamless and delightful user experience.</p>
                            <p className="text-base px-7">Embark on a journey of mobile innovation with our development services, where we craft feature-rich and scalable mobile apps that cater to the evolving needs of your users.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="border-2 border-white bg-[#001E43] rounded-full w-fit p-2 relative top-8 left-[46%]">
                            <img src="/images/webDev.svg" alt="webDev" className="w-12 h-12" />
                        </div>
                        <div className="bg-[#001E43] text-white pt-11 pb-2 px-2 text-center h-72">
                            <div className="flex justify-center gap-3 py-4">
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/reactjs.png" alt="react.js" />
                                </div>
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/js.png" alt="react.js" />
                                </div>
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/database.png" alt="react.js" />
                                </div>
                            </div>
                            <h1 className="font-semibold mb-2">CMS Development</h1>
                            <p className="text-base px-7">Empower your content management strategy with our CMS development services, providing robust and user-friendly platforms tailored to streamline your digital content workflow.</p>
                            <p className="text-base px-7">Unlock the potential of efficient content management – our CMS development solutions offer customizable and scalable platforms that enhance collaboration, publishing, and digital asset management.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="border-2 border-white bg-[#001E43] rounded-full w-fit p-2 relative top-8 left-[46%]">
                            <img src="/images/webDev.svg" alt="webDev" className="w-12 h-12" />
                        </div>
                        <div className="bg-[#001E43] text-white pt-11 pb-2 px-2 text-center h-72">
                            <div className="flex justify-center gap-3 py-4">
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/reactjs.png" alt="react.js" />
                                </div>
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/js.png" alt="react.js" />
                                </div>
                                <div className="w-10 h-10 bg-white p-1 rounded-full"> 
                                    <img src="/images/database.png" alt="react.js" />
                                </div>
                            </div>
                            <h1 className="font-semibold mb-2">Web Development</h1>
                            <p className="text-base px-7">Whether you need a new digital product or a redesigned platform, we’re here to do our magic.</p>
                            <p className="text-base px-7">Crafting digital experiences that captivate and engage, our web development services blend creativity with cutting-edge technology to bring your ideas to life.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default VerticalSlider;