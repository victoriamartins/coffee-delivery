import { Trash } from 'phosphor-react'
import { CoffeeListInterface } from '../../../../reducer/reducer'
import { useContext, ChangeEvent } from 'react'
import {
  CoffeeItemContainer,
  ItemFooter,
  ItemInfo,
  ItemHeader,
  RemoveItemButton,
} from './styles'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function CoffeeItem({
  name,
  amount,
  price,
  image,
}: CoffeeListInterface) {
  const { updateList, deleteItem } = useContext(CoffeeContext)

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    updateList({ name, amount: newValue, price, image })
  }
  const handleDeleteItem = () => {
    deleteItem({ name, amount, price, image })
  }

  return (
    <CoffeeItemContainer>
      <img src={`../../../src/assets/coffees/${image}`} alt="xícara de café" />
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
            defaultValue={amount}
            onChange={handleAmountChange}
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
