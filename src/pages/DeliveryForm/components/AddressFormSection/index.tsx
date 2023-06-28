import { InputContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function AddressFormSection() {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <input
        type="text"
        id="zipCode"
        placeholder="CEP"
        {...register('zipCode')}
      />
      <input
        type="text"
        id="street"
        placeholder="Rua"
        {...register('street')}
      />
      <div>
        <input
          type="number"
          id="number"
          placeholder="Número"
          min={0}
          {...register('stNumber', { valueAsNumber: true })}
        />
        <input
          type="text"
          id="additionalInfo"
          placeholder="Complemento (opcional)"
          {...register('additionalInfo')}
        />
      </div>
      <div>
        <input
          type="text"
          id="neighborhood"
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <input
          type="text"
          id="city"
          placeholder="Cidade"
          {...register('city')}
        />
        <input type="text" id="state" placeholder="UF" {...register('state')} />
      </div>
    </InputContainer>
  )
}
