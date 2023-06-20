import { CreditCard, Bank, Money } from 'phosphor-react'
import { InputRadioContainer, PaymentMethod } from './styles'

export function PaymentForm() {
  return (
    <PaymentMethod>
      <InputRadioContainer>
        <input type="radio" name="paymentOption" id="creditCard" />
        <label htmlFor="creditCard">
          <CreditCard size={16} />
          <span>Cartão de crétido</span>
        </label>
      </InputRadioContainer>
      <InputRadioContainer>
        <input type="radio" name="paymentOption" id="debitCard" />
        <label htmlFor="debitCard">
          <Bank size={16} />
          <span>Cartão de débito</span>
        </label>
      </InputRadioContainer>
      <InputRadioContainer>
        <input type="radio" name="paymentOption" id="cash" />
        <label htmlFor="cash">
          <Money size={16} />
          <span>Dinheiro</span>
        </label>
      </InputRadioContainer>
    </PaymentMethod>
  )
}
