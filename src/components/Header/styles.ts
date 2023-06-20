import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2rem 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const CartDivision = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  button {
    border: 0;
    padding: 0.5rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-300']};
    border-radius: 6px;
    &:hover {
      background-color: ${(props) => props.theme['yellow-200']};
      color: ${(props) => props.theme['gray-100']};
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
  }
`
export const AddressDivision = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem;
  border-radius: 6px;
  height: 2.375rem;
  color: ${(props) => props.theme['purple-300']};
  font-size: 0.875rem;
  background-color: ${(props) => props.theme['purple-100']};
`
