import { CreditCard, Bank, Money } from 'phosphor-react'
import { InputRadioContainer, PaymentMethod } from './styles'
import { useFormContext } from 'react-hook-form'

export function PaymentForm() {
  const { register } = useFormContext()
  return (
    <PaymentMethod>
      <InputRadioContainer>
        <input
          type="radio"
          {...register('paymentOption')}
          id="creditCard"
          value="creditCard"
        />
        <label htmlFor="creditCard">
          <CreditCard size={16} />
          <span>Cartão de crétido</span>
        </label>
      </InputRadioContainer>
      <InputRadioContainer>
        <input
          type="radio"
          {...register('paymentOption')}
          id="debitCard"
          value="debitCard"
        />
        <label htmlFor="debitCard">
          <Bank size={16} />
          <span>Cartão de débito</span>
        </label>
      </InputRadioContainer>
      <InputRadioContainer>
        <input
          type="radio"
          {...register('paymentOption')}
          id="cash"
          value="cash"
        />
        <label htmlFor="cash">
          <Money size={16} />
          <span>Dinheiro</span>
        </label>
      </InputRadioContainer>
    </PaymentMethod>
  )
}
