import styled from 'styled-components'
export const FormContainer = styled.form`
  height: 2.375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-inline: 1.5rem;
  justify-content: space-between;
`

export const PriceTag = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;
  margin-left: 0.2rem;
`

export const AddItemToCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  input {
    max-width: 4.5rem;
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-800']};
    border: 0;
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.3;
    text-align: center;
    padding: 0.5rem;
    &:focus {
      outline: 1px solid ${(props) => props.theme['yellow-300']};
    }
  }
`
export const ButtonCart = styled.button`
  height: inherit;
  cursor: pointer;
  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['gray-200']};
  border: 0;
  border-radius: 8px;
  line-height: 0;
  padding: 0.65rem 0.65rem;

  &:hover {
    background-color: ${(props) => props.theme['purple-200']};
  }
`
