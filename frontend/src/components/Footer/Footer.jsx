import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'


import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const socialLinks = [
  {
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
    path: 'https://www.instagram.com',
  },
  {
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
    path: 'https://www.youtube.com',
  },
  {
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
    path: 'https://github.com',
  },
 
]

const quickLinks01 = [
  {
    path: '/home',
    display: 'Home',
  },

  {
    path: '/',
    display: 'About Us',
  },

  {
    path: '/services',
    display: 'Services',
  },

  {
    path: '/',
    display: 'Blog',
  },
]

const quickLinks02 = [
  {
    path: '/find-a-doctor',
    display: 'Find a Doctor',
  },

  {
    path: '/',
    display: 'Request an Appointment',
  },

  {
    path: '/',
    display: 'Find a Location',
  },

  {
    path: '/',
    display: 'Get a Opinion',
  },
]

const quickLinks03 = [
  {
    path: '/',
    display: 'Donate',
  },

  {
    path: '/contact',
    display: 'Contact Us',
  },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400]  text-textColor mt-4">
              Copyright @ {year} developed by Jishnu Santhosh all right
              reserved.
            </p>

            <div className="flex item items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6  text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map(({ path, display }) => (
                <li key={display}>
                  <Link
                    to={path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6  text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map(({ path, display }) => (
                <li key={display}>
                  <Link
                    to={path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6  text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map(({ path, display }) => (
                <li key={display}>
                  <Link
                    to={path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
