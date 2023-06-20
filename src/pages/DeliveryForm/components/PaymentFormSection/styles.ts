import styled from 'styled-components'

export const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const InputRadioContainer = styled.div`
  > label {
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['purple-200']};
    font-size: 0.75rem;
    border-radius: 6px;
    border: 1px solid transparent;
    padding: 1rem 0.8rem;
    width: 11.2rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    > span {
      text-transform: uppercase;
      color: ${(props) => props.theme['gray-800']};
    }
  }
  input[type='radio'] {
    position: absolute;
    opacity: 0;
    pointer-events: none;

    &:hover + label {
      background-color: ${(props) => props.theme['gray-600']};
    }

    &:checked + label {
      background-color: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-200']};
    }
  }
`
