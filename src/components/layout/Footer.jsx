import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import { Link } from 'react-router-dom'
import Button from '../module/Button';
import logo from '../../assets/images/rr_logo.png'


const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null)

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <>
      <div className='text-white p-4 bg-gradient-to-l from-[#376683] to-[#3d6e8c]'>
        <div className="w-full sm:w-[85%] mx-auto flex flex-wrap sm:flex-nowrap gap-4 justify-center py-6">
          {/* Section 1 */}
          <div className="flex flex-col gap-2 w-full sm:w-1/4 items-center">
            <img className='w-[100px] invert' src={logo} alt="rr_logo" />
          </div>

          {/* Section 2 */}
          {/* <div className="flex flex-col gap-2 w-full sm:w-1/4 items-center">
            <p className="uppercase font-semibold">Quick links</p>
            <ul className="text-sm">
              <li>About Us</li>
            </ul>
          </div> */}

          {/* Section 3 */}
          <div className="flex flex-col gap-2 w-full sm:w-1/4 items-center">
            <p className="uppercase font-semibold">More</p>
            <ul className="flex flex-col gap-1 text-sm">
              <Link to='/terms-and-condition'>Terms Of Use</Link>
              {/* <li>Privacy Policy</li> */}
            </ul>
          </div>

          {/* Section 4: Social Icons */}
          <div className="flex flex-col gap-2 w-full sm:w-1/4 items-center">
            <p className="uppercase font-semibold">Contact</p>
            <ul className="text-xl flex gap-3">
              {/* <li>
                <a href="https://www.youtube.com/@appliedtradingacademy" target="_blank" rel="noopener noreferrer">
                  <Button
                    type="button"
                    className="p-1 rounded bg-gradient-to-r from-red-700 via-red-600 to-red-500"
                    children={<FaIcons.FaYoutube className="text-2xl" />}
                  />
                </a>
              </li> */}

              <li>
                <a href="mailto:rr.globalevents09@gmail.com" target="_blank" rel="noopener noreferrer">
                  <SiIcons.SiGmail className="text-4xl p-0.5 rounded bg-gradient-to-r from-blue-500 via-red-500 to-green-500" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rr_global_agency?igsh=ZjM3Y2lrdjl6Mmdy" target="_blank" rel="noopener noreferrer">
                  <FaIcons.FaInstagramSquare className="text-4xl p-0.5 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rr-global-events-88678537a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaIcons.FaLinkedin className="text-4xl p-0.5 rounded bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/917042364289" target="_blank" rel="noopener noreferrer">
                  <FaIcons.FaWhatsapp className="text-4xl p-0.5 rounded bg-gradient-to-r from-green-700 via-green-600 to-green-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className='mt-2'>
          <p className='font-semibold text-center'>Fingin India has partnered with Tradingview for a Chartin solution</p>
        </div> */}
      </div>
      <div className='bg-[#3376a0] p-2 text-white text-sm text-center'>
        <p>Copyright © 2025 - {currentYear}  All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer