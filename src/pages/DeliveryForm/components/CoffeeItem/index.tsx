import { Trash } from 'phosphor-react'
import {
  CoffeeItemContainer,
  ItemFooter,
  ItemInfo,
  ItemHeader,
  RemoveItemButton,
} from './styles'

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
  return (
    <CoffeeItemContainer>
      <img
        src={`../../../src/assets/coffees/${imageName}`}
        alt="xícara de café"
      />
      <ItemInfo>
        <ItemHeader>
          <span>{name}</span>
          <h3>{price.toFixed(2)}</h3>
        </ItemHeader>
        <ItemFooter>
          <input
            type="number"
            name="addCoffee"
            id="addCoffee"
            min={1}
            defaultValue={coffeeAmount}
          />
          <RemoveItemButton>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveItemButton>
        </ItemFooter>
      </ItemInfo>
    </CoffeeItemContainer>
  )
}
