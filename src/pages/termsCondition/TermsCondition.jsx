import React, { useEffect } from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TermsCondition = ({ termTitle }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <React.Fragment>
            <div className="w-full h-[300px] bg-black text-white flex justify-center items-end">
                <h1 className="text-2xl sm:text-4xl lg:text-6xl text-center uppercase font-bold pb-8">{termTitle}</h1>
            </div>
            <div className='p-4'>
                <p className='text-center text-2xl'>RR Global Event</p>
                <section className='space-y-5 my-6 sm:px-4'>
                    <h1 className='text-xl sm:text-4xl font-bold uppercase'>Welcome to RR Global Event</h1>
                    <p>These Terms and Conditions outline the rules and regulations for the use of Eventales’ website, located at www.eventales.com. By accessing this website, we assume you accept these Terms and Conditions in full. Do not continue to use Eventales’ website if you do not agree to all of the terms and conditions stated on this page.</p>

                    <h1 className='text-xl sm:text-4xl font-bold uppercase'>1. Intellectual Property Rights</h1>
                    <p>Unless otherwise stated, Eventales owns the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from www.eventales.com for your own personal use, subject to restrictions set in these Terms and Conditions. You must not:</p>
                    <ul className='sm:pl-3'>
                        <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-xl text-orange-500' />
                            Republish material from this website.</li>
                        <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-xl text-orange-500' />
                            Sell, rent, or sub-license material from this website.</li>
                        <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-xl text-orange-500' />
                            Reproduce, duplicate, or copy material from this website.</li>
                        <li className='flex justify-start items-center gap-3'><IoMdCheckmarkCircleOutline className='text-xl text-orange-500' />
                            Redistribute content from Eventales unless specifically authorized in writing.</li>
                    </ul>

                    <h1 className='text-xl sm:text-4xl font-bold uppercase'>2. User Content</h1>
                    <p>Certain areas of this website may offer the opportunity for users to post and exchange opinions, information, material, and data (‘User Content’). Eventales does not screen, edit, publish, or review User Content prior to its appearance on the website and User Content does not reflect the views or opinions of Eventales. To the extent permitted by applicable laws, Eventales shall not be liable for the User Content or for any loss, cost, liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of User Content on this website.</p>
                    <p>Eventales reserves the right to monitor all User Content and to remove any content which it considers in its absolute discretion to be inappropriate, offensive, or otherwise in breach of these Terms and Conditions.</p>
                    <h1 className='text-xl sm:text-4xl font-bold uppercase'>3. Limitation of Liability</h1>
                    <p>In no event shall Eventales, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this website. Eventales, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.</p>
                    <h1 className='text-xl sm:text-4xl font-bold uppercase'>4. Indemnification</h1>
                    <p>You hereby indemnify to the fullest extent Eventales from and against any and all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorney’s fees) arising out of or in any way related to your breach of any of the provisions of these Terms.</p>
                    <h1 className='text-xl sm:text-4xl font-bold uppercase'>5. Governing Law & Jurisdiction</h1>
                    <p>These Terms will be governed by and construed in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the courts located in New Delhi for the resolution of any disputes.</p>
                </section>
            </div>

        </React.Fragment>
    )
}

export default TermsCondition
