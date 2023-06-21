import { StyledHeader, CartDivision, AddressDivision } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Badge } from '@mui/material'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export function Header() {
  const { coffeeList } = useContext(CoffeeContext)

  const totalItems = coffeeList.reduce(
    (sum, coffee) => sum + Number(coffee.coffeeAmount),
    0,
  )

  const badgeStyle = {
    '& .MuiBadge-badge': {
      backgroundColor: '#C47F17',
      color: '#F3F2F2',
    },
  }
  return (
    <StyledHeader>
      <NavLink to={'/'}>
        <img
          src={logo}
          alt="logo da marca que contém um copo de café roxo com um foguete branco desenhado ao centro"
        />
      </NavLink>
      <CartDivision>
        <AddressDivision>
          <MapPin size={19.25} weight="fill" />
          <span>Place, SP</span>
        </AddressDivision>

        <NavLink to={'/entrega'}>
          <Badge badgeContent={totalItems} sx={badgeStyle}>
            <button>
              <ShoppingCart size={19.25} weight="fill" />
            </button>
          </Badge>
        </NavLink>
      </CartDivision>
    </StyledHeader>
  )
}
