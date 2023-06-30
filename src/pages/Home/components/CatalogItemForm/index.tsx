import { ShoppingCart } from 'phosphor-react'
import { FormContainer, AddItemToCart, ButtonCart, PriceTag } from './styles'
import { CartNotification } from '../../../../components/CartNotification'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CoffeeListInterface } from '../../../../reducer/reducer'

interface ItemFormProps {
  price: number
  name: string
  imageName: string
}

export function CatalogItemForm(props: ItemFormProps) {
  const { addToList } = useContext(CoffeeContext)
  const { handleSubmit, register, reset } = useForm()
  const [showNotification, setShowNotification] = useState(false)

  const addCoffeeToList = (data: any) => {
    const itemToAdd: CoffeeListInterface = {
      name: props.name,
      amount: Number(data.amount),
      price: props.price,
      image: props.imageName,
    }
    addToList(itemToAdd)
    handleShowNotification()
    reset()
  }

  function handleShowNotification() {
    setShowNotification(true)
    const timer = setTimeout(() => {
      setShowNotification(false)
    }, 2500)
    return () => clearTimeout(timer)
  }

  const price = new Intl.NumberFormat().format(props.price).padEnd(4, '0')

  return (
    <FormContainer onSubmit={handleSubmit(addCoffeeToList)}>
      <div>
        <span>R$</span>
        <PriceTag>{price}</PriceTag>
      </div>

      <AddItemToCart>
        <input
          type="number"
          id="coffeeAmount"
          step={1}
          min={1}
          required
          {...register('amount')}
        />

        <ButtonCart type="submit">
          <ShoppingCart size={16} weight="fill" />
        </ButtonCart>
      </AddItemToCart>
      {showNotification && <CartNotification coffeeName={props.name} />}
    </FormContainer>
  )
}
