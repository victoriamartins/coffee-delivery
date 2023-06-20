import { Routes, Route } from 'react-router-dom'
import { CoffeeLayout } from './layout/CoffeeLayout'
import { Home } from './pages/Home'
import { DeliveryForm } from './pages/DeliveryForm'
import { OrderConfirmation } from './pages/OrderConfirmation'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CoffeeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/entrega" element={<DeliveryForm />} />
        <Route path="/confirmacao" element={<OrderConfirmation />} />
      </Route>
    </Routes>
  )
}
