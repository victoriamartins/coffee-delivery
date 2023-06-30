import { CartDivision, AddressDivision, StyledHeader } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Badge } from '@mui/material'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffeeList, deliveryInfo } = useContext(CoffeeContext)
  const badgeNumber = coffeeList.reduce(
    (sum, coffee) => sum + Number(coffee.amount),
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
          {deliveryInfo ? (
            <span>{`${deliveryInfo.city} - ${deliveryInfo.state}`}</span>
          ) : (
            <span>Local de entrega</span>
          )}
        </AddressDivision>

        <NavLink to={'/entrega'}>
          <Badge badgeContent={badgeNumber} sx={badgeStyle}>
            <button>
              <ShoppingCart size={19.25} weight="fill" />
            </button>
          </Badge>
        </NavLink>
      </CartDivision>
    </StyledHeader>
  )
}
