import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import image from '../../assets/successimg.png'
import {
  DeliveryInfo,
  GradientBorder,
  HeaderConfirmation,
  IconContainer,
  ImageContainer,
  PageContainer,
} from './styles'

export function OrderConfirmation() {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                  <strong>Cartão de Crédito</strong>
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
