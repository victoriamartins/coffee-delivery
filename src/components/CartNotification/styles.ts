import styled from 'styled-components'

export const NotificationContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 999;

  display: flex;
  gap: 0.5rem;
  align-items: center;

  background-color: ${(props) => props.theme['yellow-200']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 0.875rem;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 500px) {
    bottom: inherit;
    top: 1rem;
    right: 1rem;
  }
`
