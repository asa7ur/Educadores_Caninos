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

  @media (min-width: 768px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
