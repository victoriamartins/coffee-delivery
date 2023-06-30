import { CurrencyDollarSimple, MapPinLine } from 'phosphor-react'
import {
  CoffeeListInCart,
  DeliveryHeader,
  DeliveryInfoDivision,
  EmptyCartContainer,
  FormContainer,
  PaymentHeader,
  Subtitle,
} from './styles'
import { AddressFormSection } from './components/AddressFormSection'
import { PaymentForm } from './components/PaymentFormSection'
import { FormSubmitSection } from './components/FormSubmitSection'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink, useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { CoffeeItem } from './components/CoffeeItem'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

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
  const navigate = useNavigate()
  const { coffeeList, deliveryInfo, addDeliveryInfo, deleteList } =
    useContext(CoffeeContext)
  const empytValuesToForm = {
    zipCode: '',
    street: '',
    stNumber: 0,
    additionalInfo: '',
    neighborhood: '',
    city: '',
    state: '',
    paymentOption: '',
  }
  const filledValuesToForm = {
    zipCode: deliveryInfo?.zipCode,
    street: deliveryInfo?.street,
    stNumber: deliveryInfo?.stNumber,
    additionalInfo: deliveryInfo?.additionalInfo,
    neighborhood: deliveryInfo?.neighborhood,
    city: deliveryInfo?.city,
    state: deliveryInfo?.state,
    paymentOption: deliveryInfo?.paymentOption,
  }
  const deliveryForm = useForm<DeliveryFormData>({
    resolver: zodResolver(validationOfDeliverySchema),
    defaultValues: deliveryInfo ? filledValuesToForm : empytValuesToForm,
  })
  const { handleSubmit, reset } = deliveryForm

  const submitForm = (data: DeliveryFormData) => {
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
    deleteList()
    navigate('/confirmacao')
  }

  return (
    <FormContainer onSubmit={handleSubmit(submitForm)}>
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
            <AddressFormSection /> {/* ----------------------- Inputs */}
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
              {coffeeList.map((coffee) => {
                return (
                  <CoffeeItem
                    key={coffee.name}
                    name={coffee.name}
                    price={coffee.price}
                    image={coffee.image}
                    amount={coffee.amount}
                  />
                )
              })}
            </CoffeeListInCart>
            {/* -----------------------Footer with price and submit */}
            <FormSubmitSection />
          </div>
        </aside>
      </FormProvider>
    </FormContainer>
  )
}
