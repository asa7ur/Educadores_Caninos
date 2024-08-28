import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import styled from 'styled-components'
import heroBcg from '../assets/heroBcg.jpg'

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
    <Wrapper
      id='hero'
      className='image'
      style={{ backgroundImage: `url(${heroBcg})` }}
      ref={imageRef}
    >
      <div className='section section-center'>
        <div className='content' ref={titleRef}>
          <h3>Educación canina</h3>
          <h1>Profesional</h1>
          <Link to='/productos' className='btn'>
            Infórmate
          </Link>
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
  background-position: 100% 40%;

  .content {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1,
  h3 {
    color: var(--grey-100);
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

  @media (min-width: 992px) {
    position: relative;
    height: calc(100vh - 83px);
    width: 100%;
    background-size: cover;
    display: grid;
    place-items: center;

    .content {
      top: 35%;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }
  }
`