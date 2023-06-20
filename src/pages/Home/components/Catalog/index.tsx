import { CatalogItem } from '../CatalogItem'
import { MenuContainer, MenuItemsContainer } from './styles'
import { coffees } from './../../coffeeData'

export function Catalog() {
  return (
    <>
      <MenuContainer>
        <h2>Nossos Cafés</h2>
        <MenuItemsContainer>
          {coffees.map((coffee) => (
            <CatalogItem
              name={coffee.name}
              description={coffee.description}
              imageName={coffee.imageName}
              price={coffee.price}
              types={coffee.types}
              key={coffee.name}
            />
          ))}
        </MenuItemsContainer>
      </MenuContainer>
    </>
  )
}
