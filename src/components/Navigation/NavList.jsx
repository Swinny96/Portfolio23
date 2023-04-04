import React from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const NavList = [
    {
        icon: <AiOutlineHome/>,
        link: '#home',
        title: 'Home'
    },
    {
        icon: <AiOutlineUser/>,
        link: '#about',
        title: 'About'
    },
    {
        icon: <BiBook/>,
        link: '#experince',
        title: 'Experince'
    },
    {
        icon: <RiServiceLine/>,
        link: '#services',
        title: 'Services'
    },
    {
        icon: <BiMessageSquareDetail/>,
        link: '#contact',
        title: 'Contact'
    },
]

export default NavList