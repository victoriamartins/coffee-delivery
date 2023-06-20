import { CurrencyDollarSimple, MapPinLine } from 'phosphor-react'
import { CoffeeItem } from './components/CoffeeItem/index'
import {
  CoffeeListInCart,
  DeliveryHeader,
  DeliveryInfoDivision,
  FormContainer,
  PaymentHeader,
  Subtitle,
} from './styles'
import { AddressForm } from './components/AddressFormSection'
import { PaymentForm } from './components/PaymentFormSection'
import { FormSubmitSection } from './components/FormSubmitSection'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function DeliveryForm() {
  const { coffeeList } = useContext(CoffeeContext)
  return (
    <FormContainer>
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
    </FormContainer>
  )
}
