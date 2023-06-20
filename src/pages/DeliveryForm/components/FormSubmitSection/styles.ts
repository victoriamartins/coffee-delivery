import styled from 'styled-components'

export const FormSubmitFooter = styled.footer`
  padding-top: 1.5rem;
  color: ${(props) => props.theme['gray-800']};
  font-size: 0.875rem;

  > button {
    width: 100%;
    padding: 0.75rem;
    border: 0;
    background-color: ${(props) => props.theme['yellow-200']};
    color: ${(props) => props.theme['gray-100']};
    line-height: 1.6;
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme['yellow-300']};
    }
  }
`

const BaseFooterLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.3;
`

export const FooterLine = styled(BaseFooterLine)`
  margin-bottom: 0.75rem;
`

export const FooterLineStrong = styled(BaseFooterLine)`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`
