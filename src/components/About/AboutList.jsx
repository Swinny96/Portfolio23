import React from 'react';
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const AboutList = [
    {
        icon: <FaAward className='about_icon'/>,
        title: 'Experince',
        statement: '3+ Years Working in Industry',
    },
    {
        icon: <VscFolderLibrary className='about_icon'/>,
        title: 'Projects',
        statement: '60+ Complete',
    },
]

export default AboutList