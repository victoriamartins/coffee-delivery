import { Trash } from 'phosphor-react'
import {
  CoffeeItemContainer,
  ItemFooter,
  ItemInfo,
  ItemHeader,
  RemoveItemButton,
} from './styles'
import { ChangeEvent, useContext, useState } from 'react'
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
  const { addCoffeeToCart, removeCoffeeFromCart } = useContext(CoffeeContext)
  const [amountChangedOnCart, setAmountChangedOnCart] = useState(coffeeAmount)

  function handleNewAmountOfCoffee(event: ChangeEvent<HTMLInputElement>) {
    setAmountChangedOnCart(Number(event.target.value))
    addCoffeeToCart(
      name,
      Math.abs(Number(event.target.value) - amountChangedOnCart),
      price,
      imageName,
    )
  }

  function handleRemoveFromCoffeeList() {
    removeCoffeeFromCart(name)
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
          <h3>{price.toFixed(2)}</h3>
        </ItemHeader>
        <ItemFooter>
          <input
            type="number"
            id="addCoffee"
            min={1}
            value={amountChangedOnCart}
            onChange={handleNewAmountOfCoffee}
          />
          <RemoveItemButton onClick={handleRemoveFromCoffeeList}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveItemButton>
        </ItemFooter>
      </ItemInfo>
    </CoffeeItemContainer>
  )
}
