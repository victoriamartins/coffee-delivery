import {
  ReactNode,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react'
import { CoffeeReducer, CoffeeListInterface } from '../reducer/reducer'
import { DeliveryFormData } from '../pages/DeliveryForm'

interface CoffeeContextInterface {
  coffeeList: CoffeeListInterface[]
  deliveryInfo: DeliveryFormData | undefined
  deleteList: () => void
  addToList: (item: CoffeeListInterface) => void
  addDeliveryInfo: (newInfo: DeliveryFormData) => void
  updateList: (item: CoffeeListInterface) => void
  deleteItem: (item: CoffeeListInterface) => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextInterface)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeList, dispatch] = useReducer(CoffeeReducer, [])
  // eslint-disable-next-line no-unused-vars
  const [deliveryInfo, setDeliveryInfo] = useState<
    DeliveryFormData | undefined
  >(getStoredDeliveryInfo())

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:delivery-info:1.0.0',
      JSON.stringify(deliveryInfo),
    )
  }, [deliveryInfo])

  function getStoredDeliveryInfo() {
    const storedAsJSON = localStorage.getItem(
      '@coffee-delivery:delivery-info:1.0.0',
    )
    if (storedAsJSON && storedAsJSON !== 'undefined') {
      return JSON.parse(storedAsJSON)
    }
    return undefined
  }

  function addDeliveryInfo(newInfo: DeliveryFormData) {
    setDeliveryInfo(newInfo)
  }

  function deleteAllItemsFromCart() {
    dispatch({ type: 'DELETE_CART', payload: {} as CoffeeListInterface })
  }

  function addItemToCart(item: CoffeeListInterface) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    })
  }

  function updateItemInCart(item: CoffeeListInterface) {
    dispatch({
      type: 'UPDATE_CART',
      payload: item,
    })
  }

  function deleteItem(item: CoffeeListInterface) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: item,
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        deliveryInfo,
        deleteList: deleteAllItemsFromCart,
        addToList: addItemToCart,
        addDeliveryInfo,
        updateList: updateItemInCart,
        deleteItem,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
