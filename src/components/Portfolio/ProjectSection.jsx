import React from "react"
import Tabs from "./Tabs"
import styled from 'styled-components'
import TwentyTwentyTwo from './Years/TwentyTwentyTwo'
import TwentyTwentyOne from './Years/TwentyTwentyOne'
import TwentyTwenty from './Years/TwentyTwenty'
import TwentyNineteen from './Years/TwentyNineteen'
import TwentyTwentyThree from "./Years/TwentyTwentyThree"

// import TwentyEightteen from './Years/TwentyEightteen'
// import Future from './Years/Future'

function ProjectSection() {
  return (
    <PortfolioSection id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
        <Tabs>
        <Year label="2023">
            {
                TwentyTwentyThree.map(({id, image, title, status, text, github, demo , linktype}) => {
                    return (
                    <PortfolioItem key={id}>
                        <PortfolioStatus>{status}</PortfolioStatus>
                        <PortfolioImageConatiner>
                            <PortfolioImage src={image} loading="lazy" alt={title} />
                        </PortfolioImageConatiner>
                        <PortfolioHeading>{title}</PortfolioHeading>
                        <PortfolioText>{text}</PortfolioText>
                        <PortfolioCTA>
                            <PortfolioLink href={github} className='btn' target='_blank' aria-label={'View' + ' ' + 'GitHub' +  ' ' + 'for' + ' ' + [title]}>GitHub</PortfolioLink>
                            <PortfolioLink href={demo} className='btn btn-primary' target='_blank' aria-label={'View' + ' ' + [linktype] +  ' ' + 'for' + ' ' + [title]}>{linktype}</PortfolioLink>
                        </PortfolioCTA>
                    </PortfolioItem>
                    )
                })
            }
            </Year>
            <Year label="2022">
            {
                TwentyTwentyTwo.map(({id, image, title, status, text, github, demo , linktype}) => {
                    return (
                    <PortfolioItem key={id}>
                        <PortfolioStatus>{status}</PortfolioStatus>
                        <PortfolioImageConatiner>
                            <PortfolioImage src={image} loading="lazy" alt={title} />
                        </PortfolioImageConatiner>
                        <PortfolioHeading>{title}</PortfolioHeading>
                        <PortfolioText>{text}</PortfolioText>
                        <PortfolioCTA>
                            <PortfolioLink href={github} className='btn' target='_blank' aria-label={'View' + ' ' + 'GitHub' +  ' ' + 'for' + ' ' + [title]}>GitHub</PortfolioLink>
                            <PortfolioLink href={demo} className='btn btn-primary' target='_blank' aria-label={'View' + ' ' + [linktype] +  ' ' + 'for' + ' ' + [title]}>{linktype}</PortfolioLink>
                        </PortfolioCTA>
                    </PortfolioItem>
                    )
                })
            }
            </Year>
            <Year label="2021">
            {
                TwentyTwentyOne.map(({id, image, title, status, text, github, demo , linktype}) => {
                    return (
                    <PortfolioItem key={id}>
                        <PortfolioStatus>{status}</PortfolioStatus>
                        <PortfolioImageConatiner>
                            <PortfolioImage src={image} loading="lazy" alt={title} />
                        </PortfolioImageConatiner>
                        <PortfolioHeading>{title}</PortfolioHeading>
                        <PortfolioText>{text}</PortfolioText>
                        <PortfolioCTA>
                            <PortfolioLink href={github} className='btn' target='_blank' aria-label={'View' + ' ' + 'GitHub' +  ' ' + 'for' + ' ' + [title]}>GitHub</PortfolioLink>
                            <PortfolioLink href={demo} className='btn btn-primary' target='_blank' aria-label={'View' + ' ' + [linktype] +  ' ' + 'for' + ' ' + [title]}>{linktype}</PortfolioLink>
                        </PortfolioCTA>
                    </PortfolioItem>
                    )
                })
            }
            </Year>
            <Year label="2020">
            {
                TwentyTwenty.map(({id, image, title, status, text, github, demo , linktype}) => {
                    return (
                    <PortfolioItem key={id}>
                        <PortfolioStatus>{status}</PortfolioStatus>
                        <PortfolioImageConatiner>
                            <PortfolioImage src={image} loading="lazy" alt={title} />
                        </PortfolioImageConatiner>
                        <PortfolioHeading>{title}</PortfolioHeading>
                        <PortfolioText>{text}</PortfolioText>
                        <PortfolioCTA>
                            {/* <PortfolioLink href={github} className='btn' target='_blank' aria-label={'View' + ' ' + 'GitHub' +  ' ' + 'for' + ' ' + [title]}>GitHub</PortfolioLink> */}
                            <PortfolioLink href={demo} className='btn btn-primary' target='_blank' aria-label={'View' + ' ' + [linktype] +  ' ' + 'for' + ' ' + [title]}>{linktype}</PortfolioLink>
                        </PortfolioCTA>
                    </PortfolioItem>
                    )
                })
            }
            </Year>
            <Year label="2019">
            {
                TwentyNineteen.map(({id, image, title, status, text, github, demo , linktype}) => {
                    return (
                    <PortfolioItem key={id}>
                        <PortfolioStatus>{status}</PortfolioStatus>
                        <PortfolioImageConatiner>
                            <PortfolioImage src={image} loading="lazy" alt={title} />
                        </PortfolioImageConatiner>
                        <PortfolioHeading>{title}</PortfolioHeading>
                        <PortfolioText>{text}</PortfolioText>
                        <PortfolioCTA>
                            {/* <PortfolioLink href={github} className='btn' target='_blank' aria-label={'View' + ' ' + 'GitHub' +  ' ' + 'for' + ' ' + [title]}>GitHub</PortfolioLink> */}
                            <PortfolioLink href={demo} className='btn btn-primary' target='_blank' aria-label={'View' + ' ' + [linktype] +  ' ' + 'for' + ' ' + [title]}>{linktype}</PortfolioLink>
                        </PortfolioCTA>
                    </PortfolioItem>
                    )
                })
            }
            </Year>
{/*             <Year label="2018">
            {
                TwentyEightteen.map(({id, image, title, text, github, demo , linktype}) => {
                    return (
                    <PortfolioItem key={id}>
                        <PortfolioImageConatiner>
                            <PortfolioImage src={image} loading="lazy" alt={title} />
                        </PortfolioImageConatiner>
                        <PortfolioHeading>{title}</PortfolioHeading>
                        <PortfolioText>{text}</PortfolioText>
                        <PortfolioCTA>
                            <PortfolioLink href={github} className='btn' target='_blank' aria-label={'View' + ' ' + 'GitHub' +  ' ' + 'for' + ' ' + [title]}>GitHub</PortfolioLink>
                            <PortfolioLink href={demo} className='btn btn-primary' target='_blank' aria-label={'View' + ' ' + [linktype] +  ' ' + 'for' + ' ' + [title]}>{linktype}</PortfolioLink>
                        </PortfolioCTA>
                    </PortfolioItem>
                    )
                })
            }
            </Year> */}
{/*             <Year label="Future Projects">
            {
                Future.map(({id, image, title, text, github, demo , linktype}) => {
                    return (
                    <PortfolioItem key={id}>
                        <PortfolioImageConatiner>
                            <PortfolioImage src={image} loading="lazy" alt={title} />
                        </PortfolioImageConatiner>
                        <PortfolioHeading>{title}</PortfolioHeading>
                        <PortfolioText>{text}</PortfolioText>
                        <PortfolioCTA>
                            <PortfolioLink href={github} className='btn' target='_blank' aria-label={'View' + ' ' + 'GitHub' +  ' ' + 'for' + ' ' + [title]}>GitHub</PortfolioLink>
                            <PortfolioLink href={demo} className='btn btn-primary' target='_blank' aria-label={'View' + ' ' + [linktype] +  ' ' + 'for' + ' ' + [title]}>{linktype}</PortfolioLink>
                        </PortfolioCTA>
                    </PortfolioItem>
                    )
                })
            }
            </Year> */}
        </Tabs>
    </PortfolioSection>
  );
}

export default ProjectSection;

const PortfolioSection = styled.section``
const Year = styled.div``
const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);
  position: relative;

  &:hover{
    border-color: var(--color-primary-variant);
    background: transparent;
  }
`
const PortfolioStatus = styled.div`
    position: absolute;
    right: 1.3rem;
    border-top-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    background: rgba(44, 44, 108, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.8px);
    -webkit-backdrop-filter: blur(4.8px);
    padding: .75rem;
`
const PortfolioImageConatiner = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`
const PortfolioImage = styled.img`
  aspect-ratio: 4/3;
  object-fit: scale-down;
`
const PortfolioHeading = styled.h3`
  margin: 1.2rem 0;
`
const PortfolioText = styled.p`
  margin: 1rem 0 2rem;
  color: var(--color-light);
`
const PortfolioCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`
const PortfolioLink = styled.a``