import Americano from './americano.png'
import Arabe from './arabe.png'
import AuLatte from './coffee-au-latte.png'
import Capuccino from './capuccino.png'
import Cubano from './cubano.png'
import Expresso from './expresso.png'
import ExpressoCream from './expresso-cream.png'
import Havaiano from './havaiano.png'
import HotChocolatte from './hot-chocolatte.png'
import IcedCoffee from './iced-coffee.png'
import Ireland from './irlandes.png'
import Latte from './latte.png'
import Macchiatto from './macchiato.png'
import Mochaccino from './mochaccino.png'

type Category = 'standard' | 'milky' | 'alcoholic' | 'special' | 'iced'

export const coffees = [
  {
    name: 'American',
    description: 'Expresso diluído, menos intenso que o Expresso padrão',
    price: 10.9,
    image: Americano,
    id: 'american-38d8',
    categories: ['standard'],
  },
  {
    name: 'Arabian',
    description: 'Bebida feita com grãos de café arábica e especiarias',
    price: 35.56,
    image: Arabe,
    id: 'arabian-dh3i',
    categories: ['special'],
  },
  {
    name: 'Au Latte',
    description: 'Metade mista de Expresso padrão e metade de leite vaporizado',
    price: 18.9,
    image: AuLatte,
    id: 'au-latte-ir8g',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita com doses iguais de café, leite e espuma cremosa',
    price: 8.9,
    image: Capuccino,
    id: 'capuccino-918j',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Cuban',
    description: 'Bebida gelada à base de café Expresso, cachaça, creme de leite e menta',
    price: 7.56,
    image: Cubano,
    id: 'cuban-e77d',
    categories: ['special', 'alcoholic', 'iced'],
  },
  {
    name: 'Expresso',
    description: 'O café padrão, feito com água quente e grãos moídos',
    price: 9.99,
    image: Expresso,
    id: 'expresso-8e7h',
    categories: ['standard'],
  },
  {
    name: 'Expresso Cream',
    description: 'Café expresso padrão com espuma cremosa',
    price: 12.67,
    image: ExpressoCream,
    id: 'expresso-cream-2f8c',
    categories: ['standard'],
  },
  {
    name: 'Havaian',
    description: 'Bebida adoçada feita com café e leite de coco',
    price: 12.65,
    image: Havaiano,
    id: 'havaian-2r9l',
    categories: ['special'],
  },
  {
    name: 'Hot Chocolatte',
    description: 'Bebida feita com chocolate dissolvido em leite quente e café',
    price: 3.45,
    image: HotChocolatte,
    id: 'hpt-choco-me7j',
    categories: ['special', 'milky'],
  },
  {
    name: 'Iced Coffee',
    description: 'Bebida preparada com café Expresso e cubos de gelo',
    price: 7.5,
    image: IcedCoffee,
    id: 'iced-coffee-o28d',
    categories: ['standard', 'iced'],
  },
  {
    name: 'Ireland',
    description: 'Bebida à base de café, uísque irlandês, açúcar e chantilly',
    price: 14.6,
    image: Ireland,
    id: 'ireland-39rj',
    categories: ['special', 'alcoholic'],
  },
  {
    name: 'Latte',
    description: 'Uma dose de Expresso com o dobro do leite e espuma cremosa',
    price: 8.99,
    image: Latte,
    id: 'latte-o28s',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Macchiatto',
    description: 'Café expresso misturado com água quente e espuma',
    price: 16.75,
    image: Macchiatto,
    id: 'macchiatto-3r99',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, baixo teor de leite e espuma',
    price: 11.89,
    image: Mochaccino,
    id: 'mochaccino-928r',
    categories: ['standard', 'milky'],
  },
]

export type Coffee = typeof coffees[0]
