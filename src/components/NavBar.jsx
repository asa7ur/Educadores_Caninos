import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useState, useEffect, useRef } from 'react'
import { links } from '../utils/constants'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import gsap from 'gsap'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const navbarRef = useRef(null)

  useEffect(() => {
    const handler = (event) => {
      if (!event.target.closest('.dropdown')) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  useEffect(() => {
    const navbar = navbarRef.current

    gsap.set([navbar], { opacity: 0 })

    gsap.to([navbar], {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
    })

    const expandNavbar = () => {
      gsap.to('.nav', {
        width: '100%',
        duration: 2,
        ease: 'power2.inOut',
      })
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        expandNavbar()
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Wrapper className='nav' ref={navbarRef}>
      <div className='nav-container'>
        <div className='nav-logo'>
          <Link
            to='hero'
            smooth={true}
            offset={-82}
            duration={500}
            onClick={() => {
              setActiveLink(null)
              setOpen(false)
            }}
          >
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='dropdown'>
          <button
            type='button'
            className='nav-toggle'
            onClick={() => setOpen(!open)}
          >
            <FaBars />
          </button>
          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <ul>
              {links.map((link) => {
                const { id, to, value } = link
                const isExternal = to.startsWith('https')
                return (
                  <li
                    className={`link ${
                      activeLink === id && !isExternal ? 'active' : ''
                    }`}
                    key={id}
                  >
                    {isExternal ? (
                      <a
                        href={to}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={() => setOpen(false)}
                      >
                        {value}
                      </a>
                    ) : (
                      <Link
                        to={to}
                        smooth={true}
                        offset={-82}
                        duration={500}
                        onClick={() => {
                          setActiveLink(id)
                          setOpen(false)
                        }}
                      >
                        {value}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, to, value } = link
            const isExternal = to.startsWith('https')
            return (
              <li
                className={`link ${
                  activeLink === id && !isExternal ? 'active' : ''
                }`}
                key={id}
              >
                {isExternal ? (
                  <a href={to} target='_blank' rel='noopener noreferrer'>
                    {value}
                  </a>
                ) : (
                  <Link
                    to={to}
                    smooth={true}
                    offset={-82}
                    duration={500}
                    onClick={() => setActiveLink(id)}
                  >
                    {value}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

export default NavBar

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: var(--backgroundColor);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 80%;
  margin: 0 auto;
  opacity: 0;

  .nav-container {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    padding: 0.5rem 1.5rem;
  }

  .nav-logo {
    a {
      cursor: pointer;
    }

    img {
      max-height: 50px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--textColor);
    cursor: pointer;
    transition: var(--transition);
    svg {
      font-size: 2rem;
    }

    :hover {
      color: var(--primary-500);
    }
  }

  .nav-links {
    display: none;
  }

  .link a {
    color: var(--textColor);
    position: relative;
    transition: all 0.3s ease;
    padding-bottom: 0.5rem;
    cursor: pointer;
  }

  .link a:hover,
  .link a:active {
    color: var(--primary-500);
  }

  .link.active a {
    color: var(--primary-500);
  }

  .link.active a::after {
    background-color: var(--primary-500);
  }

  .link a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 2px;
    background-color: transparent;
    transition: all 0.3s ease;
  }

  .link a:hover::after,
  .link a:active::after {
    background-color: var(--primary-500);
  }

  .dropdown-menu {
    position: absolute;
    top: 83px;
    right: 20px;
    background-color: var(--white);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 10px 20px;
    width: auto;
  }

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 500ms ease;
  }

  .dropdown-menu.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 500ms ease;
  }

  .dropdown-menu ul {
    list-style: none;
  }

  .dropdown-menu ul li {
    text-transform: uppercase;
    padding: 10px 0;
  }

  .dropdown-menu ul li:hover a,
  .dropdown-menu ul li a:active {
    color: var(--primary-500);
    cursor: pointer;
  }

  .dropdown-menu ul li.active a {
    color: var(--primary-500);
  }

  @media (min-width: 800px) {
    .nav-container {
      padding: 0.5rem 0.5rem;
    }

    .nav-logo {
      img {
        max-height: 60px;
      }
    }

    .nav-toggle {
      display: none;
    }

    .nav-links {
      list-style: none;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    .link a:hover {
      color: var(--primary-500);
    }

    .link a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 25%;
      width: 50%;
      height: 2px;
      background-color: transparent;
      transition: all 0.3s ease;
    }

    .link a:hover::after {
      background-color: var(--primary-500);
    }
  }

  @media (max-width: 460px) {
    .nav-container {
      padding: 0.5rem 1rem;
    }
  }
`
