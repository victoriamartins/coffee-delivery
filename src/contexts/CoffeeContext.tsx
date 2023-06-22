import { ReactNode, createContext, useState } from 'react'
import { DeliveryFormData } from '../pages/DeliveryForm'

interface CoffeeListInterface {
  id: string
  coffeeAmount: number
  price: number
  imageName: string
}

interface CoffeeContextInterface {
  coffeeList: CoffeeListInterface[]
  deliveryInfo: DeliveryFormData | undefined
  addDeliveryInfo: (data: DeliveryFormData) => void
  removeItemFromCart: (id: string) => void
  addCoffeeToCart: (
    id: string,
    coffeeAmount: number,
    price: number,
    imageName: string,
  ) => void
  updateAmountInCart: (id: string, newAmount: number) => void
  deleteCart: () => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextInterface)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeListInterface[]>([])
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryFormData>()
  console.log(deliveryInfo)
  // todo: this has to be shorter and cleaner, it'll probably go to usereduce!
  function addCoffeeToCart(
    id: string,
    coffeeAmount: number,
    price: number,
    imageName: string,
  ) {
    // setCoffeeList((state) => [...state, { id, coffeeAmount, price, imageName }])
    const coffeeToReplace = coffeeList.find((coffee) => coffee.id === id)
    if (coffeeToReplace) {
      const indexOfReplacement = coffeeList.indexOf(coffeeToReplace)

      const newCoffeeList = coffeeList.map((coffee, index) => {
        if (indexOfReplacement === index) {
          const newAmount = Number(coffee.coffeeAmount) + Number(coffeeAmount)
          return { ...coffee, coffeeAmount: newAmount }
        }
        return coffee
      })
      setCoffeeList(newCoffeeList)
    } else {
      setCoffeeList((state) => [
        ...state,
        { id, coffeeAmount, price, imageName },
      ])
    }
  }

  function updateAmountInCart(id: string, newAmount: number) {
    const coffeeToReplace = coffeeList.find((coffee) => coffee.id === id)
    if (coffeeToReplace) {
      const indexOfReplacement = coffeeList.indexOf(coffeeToReplace)

      const newCoffeeList = coffeeList.map((coffee, index) => {
        if (indexOfReplacement === index) {
          const newAmountOfCoffee = Number(newAmount)
          return { ...coffee, coffeeAmount: newAmountOfCoffee }
        }
        return coffee
      })

      setCoffeeList(newCoffeeList)
    }
  }

  function removeItemFromCart(id: string) {
    const newCoffeeList = coffeeList.filter((coffee) => coffee.id !== id)
    setCoffeeList(newCoffeeList)
  }

  function deleteCart() {
    setCoffeeList([])
  }

  function formatPaymentOptionToContext(rawString: string): string {
    switch (rawString) {
      case 'creditCard':
        return 'Cartão de Crédito'
      case 'debitCart':
        return 'Cartão de Débito'
      default:
        return 'Dinheiro'
    }
  }

  function addDeliveryInfo(data: DeliveryFormData) {
    setDeliveryInfo({
      zipCode: data.zipCode,
      street: data.street,
      stNumber: data.stNumber,
      additionalInfo: data.additionalInfo,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      paymentOption: formatPaymentOptionToContext(data.paymentOption),
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        deliveryInfo,
        addDeliveryInfo,
        addCoffeeToCart,
        removeItemFromCart,
        updateAmountInCart,
        deleteCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
