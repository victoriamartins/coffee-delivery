import styled from 'styled-components'

export const InputContainer = styled.div`
  display: grid;
  grid-template-rows: 2.6rem 2.6rem 2.6rem 2.6rem;
  row-gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
    &:first-child {
      width: 12.5rem;
    }
    input#additionalInfo {
      width: 100%;
    }
    input#state {
      width: 3.75rem;
    }
    input#city {
      width: 100%;
    }
  }

  input {
    background-color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-900']};
    border-radius: 6px;
    padding: 0.75rem;

    &:focus {
      outline: 1px solid ${(props) => props.theme['yellow-300']};
    }
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`
