import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className=' fixed  bg-black w-full over-flow bottom-0 right-0 left-0 py-1 flex flex-col md:flex-row justify-between items-center sm:px-6 md:px-10' id='footer'>
      <div className='text-white flex gap-2 sm:gap-5 md:gap-8  text-xl md:text-3xl items-center'>
      <a className='hover:shadow-md hover:shadow-blue-400 p-2' href="#" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a className='hover:shadow-md hover:shadow-blue-400 p-2' href="https://www.instagram.com/ram.ig10?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram}  />
      </a>
      <a className='hover:shadow-md hover:shadow-blue-400 p-2' href="#" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub}  />
      </a>
      <a className='hover:shadow-md hover:shadow-blue-400 p-2' href="https://www.linkedin.com/in/sairam-sanku-13881a241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BW98Yu0p0RamyK7om3FX%2Fiw%3D%3D" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a className='hover:shadow-md hover:shadow-blue-400 p-2' href="#" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      </div>
      <div className='text-white '>
        <p className='text-xs md:text-base'>Designed And Developed by @CodeWithSaiteja</p>
      </div>
    </div>
  )
}

export default Footer
