import React, { useEffect, useState, useRef, useCallback } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import styled from 'styled-components'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { members } from '../utils/constants'

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

export const AboutUs = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const dragX = useMotionValue(0)
  const intervalRef = useRef(null)

  const updateImgIndex = useCallback((newIndex) => {
    setImgIndex((prev) => (newIndex !== undefined ? newIndex : prev))
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      updateImgIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1))
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef.current)
  }, [updateImgIndex])

  const onDragEnd = useCallback(() => {
    const x = dragX.get()
    if (x <= -DRAG_BUFFER && imgIndex < members.length - 1) {
      updateImgIndex(imgIndex + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      updateImgIndex(imgIndex - 1)
    }
  }, [dragX, imgIndex, updateImgIndex])

  const handlePrevClick = useCallback(() => {
    updateImgIndex(imgIndex > 0 ? imgIndex - 1 : members.length - 1)
  }, [imgIndex, updateImgIndex])

  const handleNextClick = useCallback(() => {
    updateImgIndex(imgIndex < members.length - 1 ? imgIndex + 1 : 0)
  }, [imgIndex, updateImgIndex])

  return (
    <Wrapper>
      <h3>Conoce al equipo</h3>
      <motion.div
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}vw` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className='carousel'
      >
        <div className='slides'>
          {members.map((member, idx) => (
            <div
              key={member.id}
              className={`slide ${imgIndex === idx ? 'active' : ''}`}
            >
              <motion.div
                className='image'
                style={{ backgroundImage: `url(${member.image})` }}
                transition={SPRING_OPTIONS}
              />
              <div className='text-content'>
                <h2 className='title'>{member.title}</h2>
                <p className='description'>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className='navigation'>
        <div
          className='arrow left'
          onClick={handlePrevClick}
          aria-label='Previous Slide'
        >
          <FaArrowLeft />
        </div>
        <div className='dots'>
          {members.map((_, idx) => (
            <button
              key={idx}
              onClick={() => updateImgIndex(idx)}
              className={`dot ${idx === imgIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div
          className='arrow right'
          onClick={handleNextClick}
          aria-label='Next Slide'
        >
          <FaArrowRight />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--primary-200);
  padding: 2rem 0;

  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--black);
  }

  .carousel {
    display: flex;
    width: 100%;
    cursor: grab;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .slides {
    display: flex;
    width: 100%;
  }

  .slide {
    display: flex;
    width: 90vw;
    flex-shrink: 0;
    border-radius: 1rem;
    background-color: var(--primary-400);
    overflow: hidden;
    align-items: center;
    justify-content: center;
    margin: 0 5vw;
  }

  .image {
    flex: 1;
    height: 60vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .text-content {
    flex: 1;
    padding: 2rem;
    color: var(--black);
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    margin: 0;
    font-size: 2rem;
  }

  .description {
    margin: 1rem 0 0;
    font-size: 1.2rem;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .arrow {
    cursor: pointer;
    color: var(--black);
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  .arrow:hover {
    color: var(--primary-600);
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .dot {
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;
    background-color: var(--black);
    transition: background-color 0.3s ease;
  }

  .dot.active {
    background-color: var(--primary-600);
  }
`

export default AboutUs
