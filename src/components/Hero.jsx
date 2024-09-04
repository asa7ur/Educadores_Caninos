import { useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import gsap from 'gsap'
import styled from 'styled-components'
import heroBcg from '../assets/heroBcg.jpg'
import heroBcgMobile from '../assets/heroBcgMobile.jpg'

const Hero = () => {
  const titleRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const button = buttonRef.current
    const image = imageRef.current

    gsap.set([title, button, image], { opacity: 0 })

    gsap.to([title, button, image], {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      stagger: 0.2,
    })
  }, [])

  return (
    <Wrapper id='hero' ref={imageRef}>
      <div className='section section-center'>
        <div className='content' ref={titleRef}>
          <h3>Educación canina</h3>
          <h1>Profesional</h1>
          <h2>En Sevilla</h2>
          <ScrollLink
            to='contactar'
            smooth={true}
            offset={-82}
            duration={500}
            className='btn'
          >
            Infórmate
          </ScrollLink>
        </div>
        <div className='divider'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 35.278 3.52'
            preserveAspectRatio='none'
          >
            <path
              d='M0 3.528S27.04 3.352 35.278 0v3.528z'
              opacity='.2'
              fill='#ffffff'
            />
            <path
              d='M0 3.528S27.04 3.374 35.278.425v3.103z'
              opacity='.2'
              fill='#ffffff'
            />
            <path d='M0 3.528S27.04 3.396 35.278.882v2.646z' fill='#ffffff' />
            <path d='M0 3.527h35.278v.092H0z' fill='#ffffff' />
          </svg>
        </div>
      </div>
    </Wrapper>
  )
}
export default Hero

const Wrapper = styled.header`
  position: relative;
  height: calc(100vh - 83px);
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${heroBcg});

  
  .content {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h1,
  h2,
  h3 {
    color: var(--grey-100);
    margin-bottom: 0.25rem;
  }

  h2{
    text-transform: none;
  }

  .btn{
    margin-top: 0.5rem;
  }
  
  .divider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    line-height: 0;
  }
  
  .divider svg {
    display: block;
    width: 100%;
    height: 100px;
    transform: rotateY(180deg);
  }
  
  @media (min-width: 1024px) {
    .content {
      top: 35%;
    }
    
    h1 {
      font-size: 4rem;
    }
  }
  
  @media (max-width: 768px) {
    background-image: url(${heroBcgMobile});
    background-position: center;
  }
  `
