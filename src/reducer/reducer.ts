import { produce } from 'immer'

export interface CoffeeListInterface {
  name: string
  amount: number
  price: number
  image: string
}

interface ActionInterface {
  type: string
  payload: CoffeeListInterface
}

export function CoffeeReducer(
  state: CoffeeListInterface[],
  action: ActionInterface,
) {
  switch (action.type) {
    case 'DELETE_CART':
      return []
    case 'ADD_TO_CART': {
      const coffeeToReplace = state.find(
        (coffee) => coffee.name === action.payload.name,
      )

      if (coffeeToReplace) {
        const indexToReplace = state.indexOf(coffeeToReplace)
        return produce(state, (draft) => {
          draft[indexToReplace].amount += Number(action.payload.amount)
        })
      } else {
        return produce(state, (draft) => {
          draft.push(action.payload)
        })
      }
    }
    case 'UPDATE_CART': {
      const coffeeToReplace = state.find(
        (coffee) => coffee.name === action.payload.name,
      )
      if (coffeeToReplace) {
        const indexToReplace = state.indexOf(coffeeToReplace)
        return produce(state, (draft) => {
          draft[indexToReplace].amount = Number(action.payload.amount)
        })
      }
      return state
    }
    case 'DELETE_ITEM': {
      return state.filter((coffee) => coffee.name !== action.payload.name)
    }
    default:
      return state
  }
}
