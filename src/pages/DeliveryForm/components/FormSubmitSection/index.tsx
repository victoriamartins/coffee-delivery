import { useContext } from 'react'
import { FooterLine, FooterLineStrong, FormSubmitFooter } from './styles'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function FormSubmitSection() {
  const { coffeeList } = useContext(CoffeeContext)
  const entrega = 3.5

  function sumAllCoffeeItems(): number {
    let somatorio = 0
    for (let i = 0; i < coffeeList.length; i++) {
      const element = coffeeList[i]
      somatorio += element.price * element.coffeeAmount
    }
    return somatorio
  }

  return (
    <FormSubmitFooter>
      <div>
        <FooterLine>
          <span>Total de itens</span>
          <span>{`R$ ${sumAllCoffeeItems().toFixed(2)}`}</span>
        </FooterLine>
        <FooterLine>
          <span>Entrega</span>
          <span>{`R$ ${entrega.toFixed(2)}`}</span>
        </FooterLine>
        <FooterLineStrong>
          <h3>Total</h3>
          <h3>{`R$ ${(sumAllCoffeeItems() + entrega).toFixed(2)}`}</h3>
        </FooterLineStrong>
      </div>
      <button type="submit">Confirmar pedido</button>
    </FormSubmitFooter>
  )
}
