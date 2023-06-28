import { Trash } from 'phosphor-react'
import {
  CoffeeItemContainer,
  ItemFooter,
  ItemInfo,
  ItemHeader,
  RemoveItemButton,
} from './styles'
import { ChangeEvent, useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CoffeeItemProps {
  name: string
  price: number
  imageName: string
  coffeeAmount: number
}

export function CoffeeItem({
  name,
  price,
  imageName,
  coffeeAmount,
}: CoffeeItemProps) {
  const { removeItemFromCart, updateAmountInCart } = useContext(CoffeeContext)

  const handleUpdateItem = (event: ChangeEvent<HTMLInputElement>) => {
    updateAmountInCart(name, Number(event.target.value))
  }

  const handleDeleteItem = () => {
    removeItemFromCart(name)
  }

  return (
    <CoffeeItemContainer>
      <img
        src={`../../../src/assets/coffees/${imageName}`}
        alt="xícara de café"
      />
      <ItemInfo>
        <ItemHeader>
          <span>{name}</span>
          <h3>
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h3>
        </ItemHeader>
        <ItemFooter>
          <input
            type="number"
            id="addCoffee"
            min={1}
            defaultValue={coffeeAmount}
            onChange={handleUpdateItem}
          />
          <RemoveItemButton onClick={handleDeleteItem}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveItemButton>
        </ItemFooter>
      </ItemInfo>
    </CoffeeItemContainer>
  )
}
