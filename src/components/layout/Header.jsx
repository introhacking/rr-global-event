import { Link, useLocation, useNavigate } from "react-router-dom"
import ImageCarousel from "../ImageCarousel/ImageCarousel "
import { useEffect, useState } from "react";
import Button from "../module/Button";
import logo from '../../assets/images/rr_logo.png'
import * as FiIcons from 'react-icons/fi'

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const pathName = location.pathname
    const isBlogPage = pathName.startsWith('/blog')

    const displayText = location.pathname?.split('/')[2]
    const bannerTitle = displayText
        ? displayText.replaceAll('-', ' ').toUpperCase()
        : 'BLOG';

    // const menuList = [
    //     {
    //         title: 'Home',
    //         redirect: '/'
    //     },
    //     {
    //         title: 'About',
    //         redirect: '/about'
    //     },
    //     {
    //         title: 'Contact',
    //         redirect: '/contact'
    //     },
    // ]


    const menuList = [
        { title: "Home", path: "/#" },
        { title: "About Us", path: "/#about", sectionId: "about" },
        { title: "Gallery", path: "/gallery" },
        { title: "Testimonials", path: "/#testimonials", sectionId: "testimonials" },
        { title: "Clients", path: "/#clients", sectionId: "clients" },
        { title: "Contact", path: "/#contact", sectionId: "contact" },
    ];


    // const handleMenuClick = (menu) => {
    //     if (menu.redirect === "#contact") {
    //         if (location.pathname !== "/") {
    //             // Navigate to home and pass a flag to scroll
    //             navigate("/", { state: { scrollToContact: true } });
    //         } else {
    //             // Already on home, scroll directly
    //             document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    //         }
    //     } else {
    //         navigate(menu.redirect);
    //     }
    // };


    const handleMenuClick = ({ path, sectionId }) => {
        const goToSection = () => {
            if (sectionId) {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
        };

        if (location.pathname !== path) {
            navigate(path, {
                state: { scrollToId: sectionId },
            });
        } else {
            goToSection();
        }
    };




    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100); // Adjust scroll offset as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="relative z-50">
                {/* Sticky Header */}
                <div
                    className={`w-full z-50 transition-all duration-500 ease-in-out ${isSticky ? "fixed top-0 bg-white/40 backdrop-blur-md shadow-md z-50 opacity-100" : "mt-4 absolute top-0"}`}
                >
                    <div className="hidden max-w-7xl mx-auto px-6 py-2 md:flex justify-between items-center">
                        {/* <h1 className="text-xl font-bold">Eventales</h1> */}
                        <div className="w-[140px] h-[80px] invert-100">
                            <Link to='/'>
                                <img src={logo} className="w-full h-full" />
                            </Link>
                        </div>
                        <nav className="space-x-6 font-medium text-pink-800">

                            {menuList.map((menu) => (

                                <span
                                    key={menu.title}
                                    onClick={() => handleMenuClick(menu)}
                                    className="lg:text-xl font-semibold cursor-pointer hover:text-yellow-400"
                                >
                                    {menu.title}
                                </span>
                            ))}

                            {/* {menuList.map(menu => <Link key={menu.title} to={menu.redirect} className="hover:text-yellow-400">{menu.title}</Link>
                            )} */}
                        </nav>
                    </div>
                    {/* Mobile view */}
                    <div className="flex max-w-7xl mx-auto px-3 sm:px-6 py-2 md:hidden justify-between items-center">
                        <div className={`w-[140px] h-[80px] ${isSticky ? '' : 'invert-100'}`}>
                            <Link to='/'>
                                <img src={logo} className="w-full h-full" />
                            </Link>
                        </div>
                        <FiIcons.FiMenu className="text-xl" />
                    </div>

                    {/* <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                        <div className="w-[140px] h-[80px] invert-100">
                            <Link to='/'>
                                <img src={logo} className="w-full h-full" />
                            </Link>
                        </div>
                        <nav className="space-x-6 font-medium text-pink-800">

                            {menuList.map((menu) => (
                                <span
                                    key={menu.title}
                                    onClick={() => handleMenuClick(menu)}
                                    className="text-xl font-semibold cursor-pointer hover:text-yellow-400"
                                >
                                    {menu.title}
                                </span>
                            ))}
                        </nav>
                    </div> */}
                </div>

                {/* Carousel */}
                {location.pathname === '/' &&
                    <>
                        {/* Overlay Text */}
                        <div className="mt-20 lg:mt-0 absolute inset-0 z-20 md:flex justify-center items-end pointer-events-none py-6">
                            <div className="p-4 text-center rounded bg-black/30 backdrop-blur-md flex flex-col space-y-4 md:space-y-6 w-11/12 lg:w-2/3 mx-auto pointer-events-auto text-white"> {/* md:w-4/5*/}
                                <p className="sm:text-2xl font-semibold text-orange-400 uppercase">
                                    “It always seems impossible, until it’s done.”
                                </p>
                                <h1 className="text-xl sm:text-4xl md:text-5xl font-bold sm:leading-14 text-shadow-2xs text-shadow-amber-500">
                                    Top-Rated Luxury Event Management Company in Delhi NCR
                                </h1>
                                <p className="text-sm sm:text-xl text-gray-300 w-full sm:w-[85%] mx-auto tracking-widest">
                                    Specializing in personalized event management services in Delhi NCR, Eventales offers unforgettable experiences that reflect your unique vision and style.
                                </p>
                                {/* <div> */}
                                <Button name={'Contact Us'} onClick={() => handleMenuClick({ path: "/#contact", sectionId: "contact" })} />
                                {/* </div> */}
                            </div>
                        </div>
                        <ImageCarousel />
                    </>
                }


                {/* Show Blog Banner on /blog and /blog/:slug */}
                {
                    isBlogPage && (
                        <div className="w-full h-[300px] bg-black text-white flex justify-center items-center">
                            <h1 className="text-2xl sm:text-4xl text-center font-bold">{bannerTitle}</h1>
                        </div>
                    )
                }

            </header >
        </>



        // <header className="relative">
        //     <div className="">
        //         <div className="max-w-7xl backdrop-blur-md mx-auto bg-transparent sticky top-0 z-20 ">
        //             <div className="absolute flex justify-between items-center w-full px-6">
        //                 <h1 className="text-xl font-bold">Eventales</h1>
        //                 <nav className="text-red-600 space-x-6 w-full body-font hover:block flex justify-end flex-wrap py-3 flex-col md:flex-row items-center ">
        //                     <Link to='/home'>Home</Link>
        //                     <Link to="/about" className="hover:text-yellow-400">About</Link>
        //                 </nav>
        //             </div>
        //         </div>
        //         <div className="h-full w-full absolute z-40 flex justify-center items-center">
        //             <div className="p-4 text-center rounded bg-black/20 backdrop-blur-md flex flex-col space-y-6 w-1/2 mx-auto">
        //                 <p className="text-2xl font-semibold text-orange-400 uppercase">“It always seems impossible, until it’s done.”</p>
        //                 <h1 className="text-5xl font-bold leading-14 text-white text-shadow-2xs text-shadow-amber-500">Top-Rated Luxury Event Management Company in Delhi NCR</h1>
        //                 <p className="text-gray-400">We are specializing in personalized event management services in Delhi NCR, Eventales offers unforgettable event experiences that reflect your unique vision and style.</p>
        //             </div>
        //         </div>
        //         <ImageCarousel />
        //     </div>
        // </header>








        // <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-md">
        // <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        //     <h1 className="text-xl font-bold">Eventales</h1>
        //     <nav className="space-x-6">
        //         <a href="#home" className="hover:text-yellow-400">Home</a>
        //         <a href="#about" className="hover:text-yellow-400">About</a>
        //         <a href="#contact" className="hover:text-yellow-400">Contact</a>
        //     </nav>
        // </div>
        // </header>
    )
}

export default Header