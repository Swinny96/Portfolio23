import React from 'react'
import styled from 'styled-components'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
// import {VscPreview} from 'react-icons/vsc'
import {IoBrushOutline} from 'react-icons/io5'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <Navigation>
      <Link href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''} aria-label={'View'  + ' ' + 'home'}>
        <AiOutlineHome/>
      </Link>
      <Link href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} aria-label={'View'  + ' ' + 'about'}>
        <AiOutlineUser/>
      </Link>
      <Link href="#experince" onClick={() => setActiveNav('#experince')} className={activeNav === '#experince' ? 'active' : ''} aria-label={'View'  + ' ' + 'experince'}>
        <BiBook/>
      </Link>
      <Link href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} aria-label={'View'  + ' ' + 'portfolio'}>
        <IoBrushOutline/>
      </Link>
      {/* <Link href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''} aria-label={'View'  + ' ' + 'testimonials'}>
        <VscPreview/>
      </Link> */}
      <Link href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} aria-label={'View'  + ' ' + 'contact'}>
        <BiMessageSquareDetail/>
      </Link>
{/*       {
        NavList.map(({name, icon, link}) => {
          return (
            <Link href={link} onClick={() => setActiveNav({link})} className={activeNav === {link} ? 'active' : ''} aria-label={'View'  + ' ' + [name]}>
              {icon}
            </Link>
          )
        })
      } */}
    </Navigation>
  )
}

export default Nav

const Navigation = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`

const Link = styled.a`
  background: transparent;
  padding: 0.9rem;
  display: flex;
  color: var(--color-light);
  font-size: 1.1rem;
  border-radius: 100%;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  &.active {
    background: var(--color-primary);
    color: var(--color-bg);
  }
`