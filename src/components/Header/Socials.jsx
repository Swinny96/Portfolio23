import React from 'react'
import SocialData from './Social-items'
import styled from 'styled-components'

const Socials = () => {
  return (
    <HeaderSocials>
        {
          SocialData.map(({icon, link, title}) => {
            return (
                <SocialLink href={link} aria-label={'View' + title} target='_blank' rel="noreferrer">
                    {icon}
                </SocialLink>
            )
          })
        }
    </HeaderSocials>
  )
}

export default Socials

const HeaderSocials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;

    ::after {
        content: '';
        width: 1px;
        height: 2rem;
        background: var(--color-primary);
    }
    @media screen and (max-width: 600px) { 
        display: none;
    }
`
const SocialLink = styled.a``