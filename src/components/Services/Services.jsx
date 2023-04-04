import React from 'react'
import styled from 'styled-components'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <ServicesSection id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <ServicesContainer className='container'>
        <Service>
          <ServiceHead>
            <ServiceTitle>UI/UX Design</ServiceTitle>
          </ServiceHead>
          <ServiceList>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
          </ServiceList>
        </Service>
        <Service>
          <ServiceHead>
            <ServiceTitle>Web Development</ServiceTitle>
          </ServiceHead>
          <ServiceList>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
          </ServiceList>
        </Service>
        <Service>
          <ServiceHead>
            <ServiceTitle>Content Creation</ServiceTitle>
          </ServiceHead>
          <ServiceList>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className='service__list-icon'/>
              <ServiceText>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ServiceText>
            </ServiceItem>
          </ServiceList>
        </Service>
      </ServicesContainer>
    </ServicesSection>
  )
}

export default Services

const ServicesSection = styled.section``
const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`
const Service = styled.article`
  background: var(--color-bg-variant);
  border-radius: 0 0 2rem 2rem;
  border: 1px solid var(--color-primary);
  height: fit-content;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`
const ServiceHead = styled.div`
  background: var(--color-primary);
  padding: 2rem;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);
`
const ServiceTitle = styled.h3`
  color: var(--color-bg);
  font-size: 1rem;
  text-align: center;
`
const ServiceList = styled.ul`
  padding: 2rem;
`
const ServiceItem = styled.li`
  display: flex;
  gap: 4rem;
  margin-bottom: 0.8rem;
`

const ServiceText = styled.p`
  font-size: 0.9rem;
`