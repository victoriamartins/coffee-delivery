import { HeroContainer, HeroDivision, BottomInfo, ItemInfo } from './styles'
import coffeeCup from '../../../../assets/coffeeCup.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Hero() {
  return (
    <HeroContainer>
      <HeroDivision>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>

        <BottomInfo>
          <ItemInfo itemColor="darkYellow">
            <div>
              <ShoppingCart weight="fill" size={16} />
            </div>

            <span>Compra simples e segura</span>
          </ItemInfo>

          <ItemInfo itemColor="darkGray">
            <div>
              <Package weight="fill" size={16} />
            </div>

            <span>Embalagem mantém o café intacto</span>
          </ItemInfo>

          <ItemInfo itemColor="lightYellow">
            <div>
              <Timer weight="fill" size={16} />
            </div>

            <span>Entrega rápida e rastreada</span>
          </ItemInfo>

          <ItemInfo itemColor="mediumPurple">
            <div>
              <Coffee weight="fill" size={16} />
            </div>

            <span>O café chega fresquinho até você</span>
          </ItemInfo>
        </BottomInfo>
      </HeroDivision>
      <img
        src={coffeeCup}
        alt="Copo de café branco com rótulo preto da empresa, fundo amarelo com grãos de café"
      />
    </HeroContainer>
  )
}
