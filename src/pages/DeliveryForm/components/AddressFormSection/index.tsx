import { InputContainer } from './styles'

export function AddressForm() {
  return (
    <InputContainer>
      <input type="text" name="zipCode" id="zipCode" placeholder="CEP" />
      <input type="text" name="street" id="street" placeholder="Rua" />
      <div>
        <input type="number" name="number" id="number" placeholder="Número" />
        <input
          type="text"
          name="additionalInfo"
          id="additionalInfo"
          placeholder="Complemento (opcional)"
        />
      </div>
      <div>
        <input
          type="text"
          name="neighborhood"
          id="neighborhood"
          placeholder="Bairro"
        />
        <input type="text" name="city" id="city" placeholder="Cidade" />
        <input type="text" name="state" id="state" placeholder="UF" />
      </div>
    </InputContainer>
  )
}
