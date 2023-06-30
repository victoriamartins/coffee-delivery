import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { FooterLine, FooterLineStrong, FormSubmitFooter } from './styles'
import { useContext } from 'react'

export function FormSubmitSection() {
  const { coffeeList } = useContext(CoffeeContext)
  const total = coffeeList.reduce(
    (sum, coffee) => sum + Number(coffee.amount * coffee.price),
    0,
  )
  const formattedTotal = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const totalWithFee = Number(2.5 + total).toLocaleString('pt-BR', {
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
          <span>{formattedTotal}</span>
        </FooterLine>
        <FooterLine>
          <span>Entrega</span>
          <span>R$ 2,50</span>
        </FooterLine>
        <FooterLineStrong>
          <h3>Total</h3>
          <h3>{totalWithFee}</h3>
        </FooterLineStrong>
      </div>
      <button type="submit">Confirmar pedido</button>
    </FormSubmitFooter>
  )
}
