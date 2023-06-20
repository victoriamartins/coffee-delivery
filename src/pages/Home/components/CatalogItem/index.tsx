import { CatalogItemForm } from '../CatalogItemForm'
import { CoffeeItem, CoffeeTag } from './styles'

interface CatalogItemProps {
  name: string
  types: string[]
  description: string
  imageName: string
  price: number
}

export function CatalogItem(props: CatalogItemProps) {
  return (
    <CoffeeItem>
      <div>
        <img
          src={`../../../../../src/assets/coffees/${props.imageName}`}
          alt=""
        />
      </div>

      <div>
        {props.types.map((type) => (
          <CoffeeTag key={type}>{type}</CoffeeTag>
        ))}
      </div>

      <h2>{props.name}</h2>
      <p>{props.description}</p>

      <CatalogItemForm
        price={props.price}
        name={props.name}
        imageName={props.imageName}
      />
    </CoffeeItem>
  )
}
