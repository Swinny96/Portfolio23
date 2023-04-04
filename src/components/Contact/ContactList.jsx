import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const ContactList = [
    {
        icon: <MdOutlineEmail className='contact__option-icon'/>,
        service: 'Email',
        name: 'cswintonux@gmail.com',
        link: 'mailto:cswintonux@gmail.com',
    },
    {
        icon: <RiMessengerLine className='contact__option-icon'/>,
        service: 'Messenger',
        name: 'Christopher Swinton',
        link: 'https://m.me/chris.swinton.7',
    },
    {
        icon: <BsWhatsapp className='contact__option-icon'/>,
        service: 'WhatsApp',
        name: '+447479537010',
        link: 'https://api.whatsapp.com/send?phone=+447479537010',
    },
]

export default ContactList