import { CurrencyDollarSimple, MapPinLine } from 'phosphor-react'
import { CoffeeItem } from './components/CoffeeItem/index'
import {
  CoffeeListInCart,
  DeliveryHeader,
  DeliveryInfoDivision,
  EmptyCartContainer,
  FormContainer,
  PaymentHeader,
  Subtitle,
} from './styles'
import { AddressForm } from './components/AddressFormSection'
import { PaymentForm } from './components/PaymentFormSection'
import { FormSubmitSection } from './components/FormSubmitSection'
import { useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { NavLink, useNavigate } from 'react-router-dom'
import * as zod from 'zod'

const validationOfDeliverySchema = zod.object({
  zipCode: zod.string().max(9),
  street: zod.string().min(5),
  stNumber: zod.number(),
  additionalInfo: zod.string().optional(),
  neighborhood: zod.string().min(3).max(100),
  city: zod.string().min(3).max(30),
  state: zod.string().length(2),
  paymentOption: zod.string().max(17),
})

export type DeliveryFormData = zod.infer<typeof validationOfDeliverySchema>

export function DeliveryForm() {
  const { coffeeList } = useContext(CoffeeContext)

  return coffeeList.length > 0 ? <Form /> : <EmptyCart />
}

function EmptyCart() {
  return (
    <EmptyCartContainer>
      <h2>{'Seu carrinho está vazio :('}</h2>
      <p>
        Volte para o <NavLink to={'/'}>menu</NavLink> e escolha o café que mais
        gosta!
      </p>
    </EmptyCartContainer>
  )
}

function Form() {
  const { coffeeList, addDeliveryInfo, deleteCart } = useContext(CoffeeContext)
  const navigate = useNavigate()
  const deliveryForm = useForm<DeliveryFormData>({
    resolver: zodResolver(validationOfDeliverySchema),
    defaultValues: {
      zipCode: '',
      street: '',
      stNumber: 0,
      additionalInfo: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentOption: '',
    },
  })
  const { reset } = deliveryForm

  const { handleSubmit } = deliveryForm

  const submitDeliveryInfo = (data: DeliveryFormData) => {
    addDeliveryInfo({
      zipCode: data.zipCode,
      street: data.street,
      stNumber: data.stNumber,
      additionalInfo: data.additionalInfo,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      paymentOption: data.paymentOption,
    })
    reset()
    deleteCart()
    navigate('/confirmacao')
  }
  return (
    <FormContainer onSubmit={handleSubmit(submitDeliveryInfo)}>
      <FormProvider {...deliveryForm}>
        <section>
          <Subtitle>Complete seu pedido</Subtitle>
          {/* Address */}
          <DeliveryInfoDivision>
            {/* Section Subtitle */}
            <DeliveryHeader>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </DeliveryHeader>
            <AddressForm /> {/* ----------------------- Inputs */}
          </DeliveryInfoDivision>

          {/* Payment Section */}
          <DeliveryInfoDivision>
            {/* Section Subtitle */}
            <PaymentHeader>
              <CurrencyDollarSimple size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeader>
            <PaymentForm /> {/* ----------------------- Radio Buttons */}
          </DeliveryInfoDivision>
        </section>

        <aside>
          <Subtitle>Cafés selecionados</Subtitle>

          {/* List of Selected Coffees */}
          <div>
            <CoffeeListInCart>
              {coffeeList.map((coffee) => (
                <CoffeeItem
                  name={coffee.id}
                  price={coffee.price}
                  imageName={coffee.imageName}
                  coffeeAmount={coffee.coffeeAmount}
                  key={coffee.id}
                />
              ))}
              {/* <CoffeeItem
              
            /> */}
            </CoffeeListInCart>

            {/* -----------------------Footer with price and submit */}
            <FormSubmitSection />
          </div>
        </aside>
      </FormProvider>
    </FormContainer>
  )
}
