import styled from 'styled-components'

export const MenuContainer = styled.div`
  margin-top: 2rem;
  padding-inline: 10rem;
  > h2 {
    margin-bottom: 4.375rem;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-900']};
    font-family: 'Baloo 2', cursive;
  }
  @media (max-width: 550px) {
    padding-inline: 1rem;
  }
  @media (min-width: 551px) and (max-width: 850px) {
    padding-inline: 2rem;
  }
  @media (min-width: 851px) and (max-width: 1150px) {
    padding-inline: 2rem;
  }
`

export const MenuItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 3.5rem;
  margin-bottom: 2rem;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 551px) and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 851px) and (max-width: 1150px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`
