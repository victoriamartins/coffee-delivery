import { useContext } from 'react'
import { FooterLine, FooterLineStrong, FormSubmitFooter } from './styles'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function FormSubmitSection() {
  const { coffeeList } = useContext(CoffeeContext)
  const entrega = 3.5
  const sumCoffeeList = coffeeList.reduce(
    (sum, coffee) => sum + Number(coffee.coffeeAmount * coffee.price),
    0,
  )

  const formattedPrice = sumCoffeeList.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const formattedDeliveryFee = entrega.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const formattedSum = (sumCoffeeList + entrega).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <FormSubmitFooter>
      <div>
        <FooterLine>
          <span>Total de itens</span>
          <span>{formattedPrice}</span>
        </FooterLine>
        <FooterLine>
          <span>Entrega</span>
          <span>{formattedDeliveryFee}</span>
        </FooterLine>
        <FooterLineStrong>
          <h3>Total</h3>
          <h3>{formattedSum}</h3>
        </FooterLineStrong>
      </div>
      <button type="submit">Confirmar pedido</button>
    </FormSubmitFooter>
  )
}
