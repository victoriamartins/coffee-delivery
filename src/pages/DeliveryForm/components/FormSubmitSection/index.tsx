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

  return (
    <FormSubmitFooter>
      <div>
        <FooterLine>
          <span>Total de itens</span>
          <span>{`R$ ${sumCoffeeList.toFixed(2)}`}</span>
        </FooterLine>
        <FooterLine>
          <span>Entrega</span>
          <span>{`R$ ${entrega.toFixed(2)}`}</span>
        </FooterLine>
        <FooterLineStrong>
          <h3>Total</h3>
          <h3>{`R$ ${(sumCoffeeList + entrega).toFixed(2)}`}</h3>
        </FooterLineStrong>
      </div>
      <button type="submit">Confirmar pedido</button>
    </FormSubmitFooter>
  )
}
