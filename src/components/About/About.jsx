import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import AboutList from './AboutList'

const About = () => {
  return (
    <AboutSection id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <AboutConatiner className='container'>
        <AboutMe>
          <StaticImage src='../../images/me.webp' className="myself" loading="lazy" alt="Christopher Swinton" />
        </AboutMe>
        <AboutContent>
          <AboutCards>
          {
            AboutList.map(({icon, title, statement}) => {
              return (
                <AboutCard>
                  {icon}
                  <Title>{title}</Title>
                  <Line>{statement}</Line>
                </AboutCard>
              )
            })
          }
          </AboutCards>
          <Text>Am a Front-End Developer for Enghouse Networks with an 1st Degree in Web Design & Development and a former Student of the Year. Highley Skilled, knowledgeable and experienced with Industry-standard UX tech tooling associated with designer & developer competencies and proficiencies.</Text>
          <LetsTalk href="#contact" className='btn btn-primary'>Let's Talk</LetsTalk>
        </AboutContent>
      </AboutConatiner>
    </AboutSection>
  )
}

export default About

const AboutSection = styled.section``
const AboutConatiner = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`
const Title = styled.h5`
  font-size: 0.95rem;
`
const Line = styled.small`
  font-size: 0.7rem;
  color: var(--color-light);
`

const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg, 
    transparent, 
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  .myself {
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: var(--transition);
    &:hover {
      transform: rotate(0);
    }
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }
  @media screen and (max-width: 600px) {
      width: 65%;
      margin: 0 auto 3rem;
  }
`
const AboutContent = styled.div`
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`
const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`
const AboutCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
`

const Text = styled.p`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);
  @media screen and (max-width: 1024px) {
    margin: 1rem 0 1.5rem;
  }
  @media screen and (max-width: 600px) {
    margin: 1.5rem 0;
  }
`

const LetsTalk = styled.a``