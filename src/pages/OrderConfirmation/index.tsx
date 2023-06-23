import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import image from '../../assets/successimg.png'
import { useContext } from 'react'
import {
  DeliveryInfo,
  GradientBorder,
  HeaderConfirmation,
  IconContainer,
  ImageContainer,
  PageContainer,
} from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function OrderConfirmation() {
  const { deliveryInfo } = useContext(CoffeeContext)
  return (
    <PageContainer>
      <section>
        <HeaderConfirmation>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </HeaderConfirmation>
        <GradientBorder>
          <DeliveryInfo>
            <div>
              <IconContainer iconColor="purple">
                <MapPin size={16} weight="fill" />
              </IconContainer>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {`Rua ${deliveryInfo?.street}, ${deliveryInfo?.stNumber}`}
                  </strong>
                </p>
                <p>{`${deliveryInfo?.neighborhood}, ${deliveryInfo?.city} - ${deliveryInfo?.state}`}</p>
              </div>
            </div>
            <div>
              <IconContainer iconColor="mediumYellow">
                <Timer size={16} weight="fill" />
              </IconContainer>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </div>
            <div>
              <IconContainer iconColor="darkYellow">
                <CurrencyDollarSimple size={16} weight="fill" />
              </IconContainer>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{deliveryInfo?.paymentOption}</strong>
                </p>
              </div>
            </div>
          </DeliveryInfo>
        </GradientBorder>
      </section>
      <ImageContainer>
        <img
          src={image}
          alt="motorista dirigint motocicleta roxa ao lado de uma planta"
        />
      </ImageContainer>
    </PageContainer>
  )
}
