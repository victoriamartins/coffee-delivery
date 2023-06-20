import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function CoffeeLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
