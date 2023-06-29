import { ReactNode, createContext, useState, useEffect } from 'react'
import { DeliveryFormData } from '../pages/DeliveryForm'
import { produce } from 'immer'

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
  const [deliveryInfo, setDeliveryInfo] = useState<
    DeliveryFormData | undefined
  >(getStoredInfo())

  useEffect(() => {
    const stateJSON = JSON.stringify(deliveryInfo)
    localStorage.setItem('@coffee-delivery:delivery-info:1.0.0', stateJSON)
  }, [deliveryInfo])

  function getStoredInfo() {
    const storedAsJSON = localStorage.getItem(
      '@coffee-delivery:delivery-info:1.0.0',
    )
    if (storedAsJSON && storedAsJSON !== 'undefined') {
      return JSON.parse(storedAsJSON)
    }
    return undefined
  }

  // todo: this has to be shorter and cleaner, it'll probably go to usereduce!
  function addCoffeeToCart(
    id: string,
    coffeeAmount: number,
    price: number,
    imageName: string,
  ) {
    const coffeeToReplace = coffeeList.find((coffee) => coffee.id === id)
    if (!coffeeToReplace) {
      setCoffeeList(
        produce(coffeeList, (draft) => {
          draft.push({
            id,
            coffeeAmount: Number(coffeeAmount),
            price,
            imageName,
          })
        }),
      )
    } else {
      const indexToReplace = coffeeList.indexOf(coffeeToReplace)
      setCoffeeList(
        produce(coffeeList, (draft) => {
          draft[indexToReplace].coffeeAmount =
            Number(draft[indexToReplace].coffeeAmount) + Number(coffeeAmount)
        }),
      )
    }
  }

  function updateAmountInCart(id: string, newAmount: number) {
    const coffeeToReplace = coffeeList.find((coffee) => coffee.id === id)
    if (coffeeToReplace) {
      const indexOfReplacement = coffeeList.indexOf(coffeeToReplace)
      setCoffeeList(
        produce(coffeeList, (draft) => {
          draft[indexOfReplacement].coffeeAmount = Number(newAmount)
        }),
      )
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
      case 'debitCard':
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
