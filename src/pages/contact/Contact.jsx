import React, { useEffect, useState } from 'react'
import contactMap from '../../assets/images/map.png'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Button from '../../components/module/Button';
import { useLocation } from "react-router-dom";


const Contact = () => {
    window.scrollTo(0, 0)
    const [contactDetails, setContactDetails] = useState({
        username: "",
        email: "",
        message: "",
        phone: "",
        subject: ""
    });
    const inputHandler = (e) => {
        let { name, value } = e.target;
        setContactDetails({ ...contactDetails, [name]: value });
        // setErrorStatus(false);
    };
    const submitHandler = () => {
        alert("Wait...!!!")
        // alert(JSON.stringify(contactDetails))
        setContactDetails({
            username: "",
            email: "",
            message: "",
            phone: "",
            subject: ""
        })

    }


    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToId) {
            const el = document.getElementById(location.state.scrollToId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className='pt-28' id='contact'>
            <div className='flex-1 h-full relative' style={{
                backgroundImage: `linear-gradient(312deg, rgba(102, 51, 102, 0.1),rgba(102, 51, 102, 0.1)),url(${contactMap}`, backgroundPosition: 'top right',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className='mx-auto flex-center p-2 sm:p-6'>
                    <div className='flex-start flex-col md:flex-row gap-4 w-full'>
                        <div className='w-full bg-white md:w-1/2 flex-1 rounded'>
                            <div className="px-4 sm:px-10 py-12 space-y-4 flex justify-center items-start flex-col">
                                <div className='space-y-1'>
                                    <h4 className="font-semibold text-3xl text-orange-400">Get In Touch</h4>
                                    <p className='text-sm'>We are here for you! How can we help?</p>
                                    <p className="text-sm text-red-600 text-left w-full font-semibold">
                                        Required *
                                    </p>
                                </div>

                                <form className="py-2 space-y-4 relative w-full">
                                    <input
                                        className="border w-full"
                                        type="text"
                                        name="username"
                                        placeholder="Enter your name*"
                                        value={contactDetails.username}
                                        onChange={inputHandler}
                                        autoComplete='off'
                                    // autoFocus={true}
                                    />
                                    <div className="relative w-full">
                                        <input
                                            className="border w-full"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email*"
                                            value={contactDetails.email}
                                            onChange={inputHandler}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="relative w-full">
                                        <input
                                            className="border w-full"
                                            type="text"
                                            name="phone"
                                            placeholder="Phone*"
                                            value={contactDetails.phone}
                                            onChange={inputHandler}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="relative w-full">
                                        <input
                                            className="border w-full"
                                            type="text"
                                            name="subject"
                                            placeholder="Subject*"
                                            value={contactDetails.subject}
                                            onChange={inputHandler}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="relative">
                                        <textarea className='w-full h-24' type="text" name='message' placeholder='Go ahead, we are listening...' value={contactDetails.message}
                                            onChange={inputHandler}>

                                        </textarea>
                                    </div>
                                    <Button name={"Let's Connect"} onClick={submitHandler} />
                                </form>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 flex-1 p-6'>
                            <div className='text-center sm:text-left font-[300]'>
                                <div className="flex-1 py-6 px-0 sm:px-8">
                                    <div className="py-4 space-y-4">
                                        <h2 className="text-xl sm:text-4xl text-gray-900 font-semibold uppercase">Reach out to us at:</h2>
                                        <p className='leading-tight tracking-widest'>We’re delighted to hear from you and are ready to answer any questions you may have about our event management services.</p>
                                    </div>
                                    <div className="my-4 text-left">
                                        <Link to="mailto:rr.globalevents09@gmail.com">
                                            <div className="inline-flex justify-start items-center pointer-events-none text-slate-600">
                                                <MdIcons.MdEmail fontSize={22} className="mr-2 text-customPurple-900" />
                                                <p className="sm:text-xl">rr.globalevents09@gmail.com</p>
                                            </div>
                                        </Link>
                                        <Link to="mailto:sales.rrglobalevents@gmail.com">
                                            <div className="inline-flex justify-start items-center pointer-events-none text-slate-600">
                                                <MdIcons.MdEmail fontSize={22} className="mr-2 text-customPurple-900" />
                                                <p className="sm:text-xl">sales.rrglobalevents@gmail.com</p>
                                            </div>
                                        </Link>
                                        <div>
                                            <Link to="tel: 7042364289">
                                                <div className="inline-flex justify-start pointer-events-none items-center my-4 text-gray-600">
                                                    <FaIcons.FaPhoneAlt fontSize={22} className="mr-2 text-customPurple-900" />
                                                    <p className="sm:text-xl">+(91)-7042364289 , </p>
                                                </div>
                                            </Link>
                                            <Link to="tel: 9211940993">
                                                <div className="inline-flex justify-start pointer-events-none items-center my-4 text-gray-600">
                                                    <FaIcons.FaPhoneAlt fontSize={22} className="mr-2 text-customPurple-900" />
                                                    <p className="sm:text-xl">(+91)-9211940993</p>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="flex justify-start pointer-events-none items-start text-customPurple-full">
                                            <FaIcons.FaMapSigns fontSize={22} className="mr-2 text-customPurple-900" />
                                            <p className="sm:text-xl">
                                                203, Shiv Puri Sector 9 Vijay Nagar Ghaziabad-201009
                                            </p>
                                        </div>
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

export default Contact