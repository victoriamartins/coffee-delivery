import styled from 'styled-components'

export const FormContainer = styled.form`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding-inline: 10rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
  > aside > div {
    background-color: ${(props) => props.theme['gray-300']};
    padding: 2rem;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    padding-inline: 1rem;
  }
  @media (min-width: 551px) and (max-width: 850px) {
    grid-template-columns: 1fr;
    padding-inline: 2rem;
  }
  @media (min-width: 851px) and (max-width: 1150px) {
    grid-template-columns: 1fr;
    padding-inline: 5rem;
  }
`

export const Subtitle = styled.h2`
  margin-bottom: 1rem;
  color: ${(props) => props.theme['gray-900']};
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.3;
`

export const DeliveryInfoDivision = styled.div`
  margin-bottom: 0.75rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-800']};
  font-size: 0.875rem;
  border-radius: 6px;
  @media (max-width: 850px) {
    padding: 1rem;
  }
`

const BaseHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
  > div {
    color: ${(props) => props.theme['gray-900']};
    > h3 {
      font-weight: 400;
      font-size: 1rem;
    }
  }
`

export const DeliveryHeader = styled(BaseHeader)`
  color: ${(props) => props.theme['yellow-300']};
`

export const PaymentHeader = styled(BaseHeader)`
  color: ${(props) => props.theme['purple-200']};
`

export const CoffeeListInCart = styled.div`
  > div + div {
    margin-top: 1.5rem;
  }
`

export const EmptyCartContainer = styled.form`
  margin-top: 2.5rem;
  padding-inline: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
  font-family: 'baloo 2', cursive;
  color: ${(props) => props.theme['yellow-300']};

  p {
    font-size: 1rem;
    font-family: 'roboto', sans-serif;
    color: ${(props) => props.theme['gray-950']};
    a {
      color: ${(props) => props.theme['purple-200']};
    }
  }

  @media (max-width: 550px) {
    padding-inline: 1rem;
  }
  @media (min-width: 551px) and (max-width: 850px) {
    padding-inline: 2rem;
  }
  @media (min-width: 851px) and (max-width: 1150px) {
    padding-inline: 5rem;
  }
`
