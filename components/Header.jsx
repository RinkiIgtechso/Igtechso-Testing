import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const data = [
    {
        id: 1,
        link: "/",
        name: "Home"
    },
    {
        id: 2,
        link: "/about",
        name: "About"
    },
    {
        id: 3,
        link: "/services",
        name: "Services"
    },
    {
        id: 4,
        link: "/portfolio",
        name: "Portfolio"
    }
]

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true);
        },800);

        // const handleScroll = () => {
        //     const currentScrollY = window.scrollY;
        //     const scrolledDown = currentScrollY < prevScrollY;
       
        //     setPrevScrollY(currentScrollY);
        //     if(currentScrollY===0){
        //         setIsScrolled(false);
        //     }else{
        //         setIsScrolled(scrolledDown);
        //     }
        // };
        // window.addEventListener('scroll', handleScroll);
        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    },[prevScrollY]);

    // const headerClass = isScrolled ? 'scrolled' : '';

    return (
        <div>
            <div className={`flex justify-between border-b-2 py-6 pl-8 pr-16`}>
                <div className='w-28 h-8'>
                    <img src="/images/logo.png" alt="igtechso" width='100%' height='100%' />
                </div>
                <div className=' text-center flex justify-end gap-6 items-center relative '>
                    {data.map((item)=>
                        <div className='group' key={item.id}>
                            <p className='text-hover-underline font-semibold'><Link href={`${item.link}`}>{item.name}</Link></p>
                        </div>
                    )}
                    <div className='group'>
                        <p style={{visibility:'hidden'}}>wqdczx</p>
                    </div>
                </div>
            </div>
            {loaded && <div className='w-min fixed top-4 right-6 z-50'>
                <div className={`py-2 px-5 border-2 border-[#001E43] cursor-pointer font-semibold hover-fill-bg w-min`}><Link href="#">Contact</Link></div>
            </div>}
        </div>
    )
}

export default Header;
