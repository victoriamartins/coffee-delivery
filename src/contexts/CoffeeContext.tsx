import { ReactNode, createContext, useState } from 'react'

interface CoffeeListInterface {
  id: string
  coffeeAmount: number
  price: number
  imageName: string
}

interface CoffeeContextInterface {
  coffeeList: CoffeeListInterface[]
  addCoffeeToCart: (
    id: string,
    coffeeAmount: number,
    price: number,
    imageName: string,
  ) => void
  removeCoffeeFromCart: (id: string) => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextInterface)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeListInterface[]>([])

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

  function removeCoffeeFromCart(id: string) {
    const newCoffeeList = coffeeList.filter((coffee) => coffee.id !== id)
    setCoffeeList(newCoffeeList)
  }

  return (
    <CoffeeContext.Provider
      value={{ coffeeList, addCoffeeToCart, removeCoffeeFromCart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
