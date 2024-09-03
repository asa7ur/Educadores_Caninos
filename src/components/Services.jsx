import styled from 'styled-components'
import { services } from '../utils/constants'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const serviceRefs = useRef([])

  useEffect(() => {
    serviceRefs.current.forEach((service, index) => {
      gsap.fromTo(
        service,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: service,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])
  return (
    <Wrapper>
      <div className='section-center section'>
        <h2>Nuestros servicios</h2>
        <div className='services-center'>
          {services.map((service, index) => {
            const { id, image, title, description } = service
            return (
              <article
                className='service'
                key={id}
                ref={(el) => (serviceRefs.current[index] = el)}
              >
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <p>{description}</p>
              </article>
            )
          })}
        </div>
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
            fill='var(--primary-200)'
          />
          <path
            d='M0 3.528S27.04 3.374 35.278.425v3.103z'
            opacity='.2'
            fill='var(--primary-200)'
          />
          <path
            d='M0 3.528S27.04 3.396 35.278.882v2.646z'
            fill='var(--primary-200)'
          />
          <path d='M0 3.527h35.278v.092H0z' fill='var(--primary-200)' />
        </svg>
      </div>
    </Wrapper>
  )
}

export default Services

const Wrapper = styled.section`
  background: var(--backgroundColor);

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--primary-600);
  }

  h4 {
    color: var(--primary-600);
  }

  .services-center {
    margin-top: 3rem;
    display: grid;
    gap: 2.5rem;
  }

  .service {
    background: var(--primary-200);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      margin-bottom: 0;
      line-height: 1.8;
      color: var(--black);
      max-width: 100%;
    }
  }

  img {
    width: 200px;
  }

  .divider {
    width: 100%;
    height: auto;
    overflow: hidden;
    line-height: 0;
  }

  .divider svg {
    display: block;
    width: 100%;
    height: 100px;
  }

  @media (min-width: 768px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
