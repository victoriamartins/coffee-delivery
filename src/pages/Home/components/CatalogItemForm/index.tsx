import { ShoppingCart } from 'phosphor-react'
import { FormContainer, AddItemToCart, ButtonCart, PriceTag } from './styles'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { CartNotification } from '../../../../components/CartNotification'

interface ItemFormProps {
  price: number
  name: string
  imageName: string
}

export function CatalogItemForm(props: ItemFormProps) {
  const { register, handleSubmit, reset } = useForm()
  const { addCoffeeToCart } = useContext(CoffeeContext)
  const [showNotification, setShowNotification] = useState(false)

  function handleShowNotification() {
    setShowNotification(true)
    const timer = setTimeout(() => {
      setShowNotification(false)
    }, 2500)
    return () => clearTimeout(timer)
  }

  const handleAddToCart = (data: any) => {
    addCoffeeToCart(props.name, data.coffeeAmount, props.price, props.imageName)
    reset()
    handleShowNotification()
  }

  const price = new Intl.NumberFormat().format(props.price).padEnd(4, '0')

  return (
    <FormContainer onSubmit={handleSubmit(handleAddToCart)}>
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
          {...register('coffeeAmount', { valueAsNumber: true })}
        />

        <ButtonCart type="submit">
          <ShoppingCart size={16} weight="fill" />
        </ButtonCart>
      </AddItemToCart>
      {showNotification && <CartNotification coffeeName={props.name} />}
    </FormContainer>
  )
}
