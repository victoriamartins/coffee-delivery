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
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextInterface)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeListInterface[]>([])

  function addCoffeeToCart(
    id: string,
    coffeeAmount: number,
    price: number,
    imageName: string,
  ) {
    setCoffeeList((state) => [...state, { id, coffeeAmount, price, imageName }])
  }

  return (
    <CoffeeContext.Provider value={{ coffeeList, addCoffeeToCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
