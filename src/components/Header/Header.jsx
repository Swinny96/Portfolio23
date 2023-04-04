import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import Cta from './Cta'
import { StaticImage } from "gatsby-plugin-image"
import Socials from './Socials'
import Me from '../../images/nobg-me.webp'

const Header = ({ siteTitle }) => (
    <MyHeader id='home'>
      <HeaderContainer className="container header__container">
        <Welcome>Hello I'm</Welcome>
        <Name>{siteTitle}</Name>
        <Role className='text-light'>Front-End Developer</Role>
        <Cta />
        <Socials />
        <MySelf className="me">
          <StaticImage src="../../images/nobg-me.webp" loading="lazy" alt={siteTitle}/>
        </MySelf>
        <ScrollDown className='scroll_down' href='#contact'>
          Scroll Down
        </ScrollDown>
      </HeaderContainer>
    </MyHeader>
  )

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Header.defaultProps = {
    siteTitle: ``,
}

export default Header

const MyHeader = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;
`
const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`
const Welcome = styled.h5``
const Name = styled.h1``
const MySelf = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  min-height: 400px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;

  img {
    height: 25rem;
  }
`
const Role = styled.h5``
const ScrollDown = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  @media screen and (max-width: 600px) { 
    display: none;
  }
`