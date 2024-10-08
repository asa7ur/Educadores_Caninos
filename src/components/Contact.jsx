import styled from 'styled-components'
import { useState } from 'react'
import { socials } from '../utils/constants'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await axios.post('/api/email', {
        name,
        email,
        subject,
        message,
      })

      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setResult('¡Mensaje enviado con éxito!')
    } catch (error) {
      setResult(error.response.data)
    } finally {
      setIsLoading(false)
      setTimeout(() => {
        setResult('')
      }, 3000)
    }
  }

  return (
    <Wrapper id='contactar'>
      <div className='section-center section'>
        <div className='content'>
          <div className='section-hero'>
            <h2>¿Tienes dudas?</h2>
            <p>
              ¿Tienes preguntas sobre cómo podemos ayudar a tu perro a aprender
              y crecer? No te preocupes, estamos aquí para guiarte en cada paso
              del camino. 
            </p>
            <div className='links'>
              {socials.map((social) => {
                const { id, icon, url, text } = social
                return (
                  <a
                    key={id}
                    href={url}
                    className='nav-contact'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {icon}
                    {text}
                  </a>
                )
              })}
            </div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19589.225487770254!2d-6.141493234015088!3d37.25931974869507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd120d000e8705b1%3A0x8b0f0270db89eb86!2sSantuario%20La%20Candela!5e0!3m2!1sen!2ses!4v1725445899156!5m2!1sen!2ses'
              width='325'
              height='250'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Santuario La Candela'
              className='map'
            ></iframe>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <h2>Escríbenos</h2>
            <div className='form-group'>
              <input
                type='text'
                className='user_name'
                id='name'
                placeholder='Nombre'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type='email'
                className='user_email'
                id='email'
                placeholder='Correo Electrónico'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type='text'
                className='subject'
                id='subject'
                placeholder='motivo de consulta'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

              <textarea
                id='message'
                className='message'
                spellCheck='false'
                placeholder='Mensaje'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className='form-group result-container'>
              <button type='submit' className='submit-btn btn'>
                {isLoading ? <span className='sending'></span> : 'Enviar'}
              </button>
              {result && (
                <div className='result' style={{ opacity: 1 }}>
                  {result}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact

const Wrapper = styled.section`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-hero {
    max-width: var(--fixed-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    text-align: left;
  }

  h3 {
    text-transform: none;
  }

  p {
    line-height: 2;
    font-size: 1rem;
    max-width: 45em;
    color: var(--grey-500);
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin: 1rem 0;
  }

  .links .icon {
    color: var(--primary-500);
    font-size: 2rem;
  }

  .links a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--grey-500);
    font-size: 1.2rem;
  }

  .form {
    max-width: var(--fixed-width);
    background-color: var(--primary-200);
    border-radius: 25px;
    box-shadow: var(--shadow-3);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    box-shadow: var(--box-shadow);
  }

  .form-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .form-group input,
  .form-group textarea {
    background-color: var(--grey-100);
    width: 100%;
    padding: var(--padding);
    margin-bottom: 1.5rem;
    border: 1px solid var(--grey-200);
    border-radius: 25px;
  }

  .form-group textarea {
    height: 150px;
    resize: none;
    font-family: var(--bodyFont);
    font-size: 1rem;
  }

  input {
    font-family: var(--bodyFont);
    font-size: 1rem;
  }

  .result-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }

  .result-container p {
    opacity: 0;
    transition: all 0.3s ease;
    color: var(--primary-950);
  }

  ::placeholder {
    font-size: 1rem;
    font-family: var(--bodyFont);
    color: var(--grey-400);
    text-transform: uppercase;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .sending {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 3px solid var(--grey-400);
    border-top-color: var(--primary-500);
    animation: spinner 0.6s linear infinite;
  }

  @media (min-width: 1024px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .section-hero {
      align-items: flex-start;
    }

    p {
      font-size: 1.2rem;
    }

    .links {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      margin: 1rem 0;
    }
  }

  @media (max-width: 768px) {
    .links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }

    .links .icon {
      color: var(--primary-500);
      font-size: 1.5rem;
    }

    .links a {
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--grey-500);
      font-size: 0.875rem;
    }

    .form {
      padding: 2rem 1.5rem;
      margin-top: 1rem;
    }

    .form-group textarea {
      height: 120px;
      font-size: 0.875rem;
    }

    input {
      font-size: 0.875rem;
    }

    .map{
      display: none;
    }

    .btn {
      font-size: 0.875rem;
    }

    ::placeholder {
      font-size: 0.875rem;
    }
  }
`
