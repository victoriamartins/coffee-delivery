import styled from 'styled-components'

export const PageContainer = styled.div`
  padding-inline: 10rem;
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  align-items: end;

  @media (max-width: 850px) {
    padding-inline: 1rem;
    margin-top: 1rem;
    grid-template-columns: 1fr;
  }
  @media (min-width: 851px) and (max-width: 1150px) {
    padding-inline: 5rem;
    grid-template-columns: 1fr;
  }
`

export const HeaderConfirmation = styled.header`
  margin-bottom: 2.5rem;
  line-height: 1.3;

  h2 {
    color: ${(props) => props.theme['yellow-300']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
  }
  p {
    color: ${(props) => props.theme['gray-900']};
    font-size: 1rem;
  }
  @media (max-width: 850px) {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`

export const GradientBorder = styled.div`
  margin-bottom: 1rem;
  border: solid 1px transparent;
  border-radius: 6px 2.25rem 6px 2.25rem;
  background-image: linear-gradient(white, white),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme['yellow-200']},
      ${(props) => props.theme['purple-200']}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const DeliveryInfo = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-900']};
  line-height: 1.3;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: 850px) {
      flex-direction: column;
      text-align: center;
    }
  }
`

export const ImageContainer = styled.div`
  @media (max-width: 1150px) {
    display: flex;
    justify-content: center;
    > img {
      width: 80vw;
      max-width: 30rem;
      margin-bottom: 2rem;
    }
  }
`

const ICON_COLORS = {
  purple: 'purple-200',
  darkYellow: 'yellow-300',
  mediumYellow: 'yellow-200',
}

interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const IconContainer = styled.div<IconProps>`
  height: 32px;
  width: 32px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
`
