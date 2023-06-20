import styled from 'styled-components'

export const CoffeeItem = styled.div`
  padding-bottom: 1.25rem;
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 6px 36px;
  font-size: 0.875rem;
  text-align: center;

  color: ${(props) => props.theme['gray-800']};
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2rem;
    margin-bottom: 0.75rem;
  }
  h2 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    margin: 1rem 0 0.5rem 0;
  }
  p {
    margin-inline: 8%;
    margin-bottom: 2rem;
  }
`

export const CoffeeTag = styled.span`
  color: ${(props) => props.theme['yellow-300']};
  background-color: ${(props) => props.theme['yellow-100']};
  text-transform: uppercase;
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  margin-inline: 2px;
`
