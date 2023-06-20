import styled from 'styled-components'

export const HeroContainer = styled.div`
  padding-inline: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  img {
    width: 28rem;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
    padding-inline: 2rem;
    margin-bottom: 8rem;

    img {
      width: 12rem;
    }
  }
  @media (min-width: 851px) and (max-width: 1150px) {
    flex-direction: column;
    gap: 1rem;
    padding-inline: 2rem;
    margin-bottom: 8rem;
  }
`

export const HeroDivision = styled.main`
  padding-block: 4.5rem;
  h2 {
    line-height: 1.3;
    font-size: 3rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 900;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 400;
  }
  @media (max-width: 850px) {
    padding-block: 1rem;
  }
`

export const BottomInfo = styled.div`
  display: grid;
  grid-template-columns: 17.8rem 1fr;
  row-gap: 1.25rem;
  margin-top: 4rem;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`

const ITEM_COLORS = {
  darkYellow: 'yellow-300',
  lightYellow: 'yellow-200',
  darkGray: 'gray-800',
  mediumPurple: 'purple-200',
}

interface ItemProps {
  itemColor: keyof typeof ITEM_COLORS
}

export const ItemInfo = styled.div<ItemProps>`
  color: ${(props) => props.theme['gray-200']};
  display: flex;
  align-items: center;
  gap: 0.8rem;

  div {
    background-color: ${(props) => props.theme[ITEM_COLORS[props.itemColor]]};
    line-height: 0;
    padding: 0.5rem;
    border-radius: 9999px;
  }

  span {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1rem;
    line-height: 1.3;
  }
`
