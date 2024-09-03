import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Santuario La Candela </span>
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  )
}
export default Footer

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--black);
  text-align: center;
  span {
    color: var(--primary-500);
  }
  h5 {
    color: var(--white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 460px) {
    flex-direction: row;
  }
`

