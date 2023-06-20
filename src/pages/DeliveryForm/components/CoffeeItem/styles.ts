import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  color: ${(props) => props.theme['gray-950']};
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-600']};
  > img {
    width: 4rem;
    height: 4rem;
  }
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
`

export const ItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.9rem;
  color: ${(props) => props.theme['gray-900']};
`

export const ItemFooter = styled.footer`
  display: flex;
  gap: 0.5rem;
  > input {
    width: 4rem;
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-950']};
    border: 0;
    border-radius: 6px;
    text-align: center;
    font-size: 1rem;
    &:focus {
      outline: 1px solid ${(props) => props.theme['yellow-300']};
    }
  }
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.4rem;
  background-color: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['purple-200']};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }
  > span {
    color: ${(props) => props.theme['gray-800']};
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`
