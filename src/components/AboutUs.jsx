import styled from 'styled-components'

const AboutUs = () => {
  return (
    <Wrapper>
      <div className='section-center section'>
        <div className='content'>
          <div className='section-hero'>
            <h2>¿Tienes dudas?</h2>
            <p>
              Si quieres preguntarnos más información no dudes en escribirnos y
              estaremos encantadas de ofrecerte la mejor experiencia Tartas
              Karina. Además tenemos un apartado de preguntas frecuentes para
              que resuelvas tus dudas aún más fácilmente.
            </p>
          </div>
          <form className='form'>
            <h2>Escríbenos</h2>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                className='user_name'
                placeholder='Nombre'
                required
              />
              <input
                type='email'
                name='email'
                className='user_email'
                placeholder='Correo electrónico'
                required
              />
              <input
                type='text'
                name='subject'
                className='subject'
                placeholder='Motivo de consulta'
                required
              />
              <textarea
                name='message'
                className='message'
                placeholder='Tu mensaje'
                required
              ></textarea>
            </div>
            <div className='form-group result-container'>
              <button type='submit' className='submit-btn btn'></button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutUs

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

  h3 {
    text-transform: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    color: var(--grey-500);
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
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
    gap: 3rem;
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
    width: 1.75rem;
    height: 1.75rem;
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
      margin-top: 2rem;
    }

    .section-hero {
      align-items: flex-start;
    }

    p {
      margin-bottom: 0;
      font-size: 1.2rem;
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      margin-top: 2rem;
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

    .form-group textarea {
      height: 120px;
      font-size: 0.875rem;
    }

    input {
      font-size: 0.875rem;
    }

    .btn {
      font-size: 0.875rem;
    }

    ::placeholder {
      font-size: 0.875rem;
    }
  }
`
