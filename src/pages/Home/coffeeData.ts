export interface CoffeeInterface {
  name: string
  types: string[]
  description: string
  imageName: string
  price: number
}

export const coffees: CoffeeInterface[] = [
  {
    name: 'Expresso Tradicional',
    types: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    imageName: 'expresso.png',
    price: 9.9,
  },
  {
    name: 'Expresso Americano',
    types: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    imageName: 'americano.png',
    price: 9.9,
  },
  {
    name: 'Expresso Cremoso',
    types: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    imageName: 'expressoCremoso.png',
    price: 9.9,
  },
  {
    name: 'Expresso Gelado',
    types: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imageName: 'gelado.png',
    price: 9.9,
  },
  {
    name: 'Café com leite',
    types: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imageName: 'comLeite.png',
    price: 9.9,
  },
  {
    name: 'Latte',
    types: ['tradicional', 'gelado'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imageName: 'latte.png',
    price: 9.9,
  },
  {
    name: 'Capuccino',
    types: ['tradicional', 'gelado'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imageName: 'capuccino.png',
    price: 9.9,
  },
  {
    name: 'Macchiato',
    types: ['tradicional', 'gelado'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imageName: 'macchiato.png',
    price: 9.9,
  },
  {
    name: 'Mochaccino',
    types: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imageName: 'mochaccino.png',
    price: 9.9,
  },
  {
    name: 'Chocolate Quente',
    types: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imageName: 'chocolateQuente.png',
    price: 9.9,
  },
  {
    name: 'Cubano',
    types: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imageName: 'cubano.png',
    price: 9.9,
  },
  {
    name: 'Havaiano',
    types: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    imageName: 'havaiano.png',
    price: 9.9,
  },
  {
    name: 'Árabe',
    types: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imageName: 'arabe.png',
    price: 9.9,
  },
  {
    name: 'Irlandês',
    types: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imageName: 'irlandes.png',
    price: 9.9,
  },
]
