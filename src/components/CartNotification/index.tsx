import { NotificationContainer } from './styles'

interface CartNotificationProps {
  coffeeName: string
}

export function CartNotification({ coffeeName }: CartNotificationProps) {
  return (
    <NotificationContainer>
      {coffeeName + ' '} adicionado ao carrinho!
    </NotificationContainer>
  )
}
