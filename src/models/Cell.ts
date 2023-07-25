import Player from './Player'

type CellColor = 'yellow' | 'green' | 'brown' | 'orange' | 'purple' | 'lightsalmon' | 'darkgreen' | 'pink' | 'lightblue'

interface CellPropsBase {
  id: string,
  name: string
}

interface CellEventProps extends CellPropsBase {
  type: 'event'
}

interface CellPropertyProps extends CellPropsBase {
  type: 'property'
  color: CellColor,
  basePrice: number
  rents: [number, number, number, number, number, number]
  owner?: Player,
  level?: 0 | 1 | 2 | 3 | 4
}

export default class Cell {
  private id: CellPropsBase['id']

  private name: CellPropsBase['name']

  private color?: CellPropertyProps['color']

  private owner?: CellPropertyProps['owner']

  private level?: CellPropertyProps['level']

  private basePrice?: CellPropertyProps['basePrice']

  private rents?: CellPropertyProps['rents']

  constructor (props: CellEventProps | CellPropertyProps) {
    this.id = props.id
    this.name = props.name
    if (props.type === 'property') {
      this.color = props.color
      this.basePrice = props.basePrice
      this.rents = props.rents
      this.level = 0
    }
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getColor() {
    return this.color
  }

  getBasePrice() {
    return this.basePrice
  }
}