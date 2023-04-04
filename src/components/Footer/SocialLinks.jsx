import React from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const SocialLinks = [
    {
        icon: <FaFacebookF className='footer__link'/>,
        name: 'Facebook',
        link: 'https://facebook.com',
    },
    {
        icon: <FiInstagram className='footer__link'/>,
        name: 'Instagram',
        link: 'https://instagram.com',
    },
    {
        icon: <IoLogoTwitter className='footer__link'/>,
        name: 'Twitter',
        link: 'https://twitter.com',
    },
]

export default SocialLinks