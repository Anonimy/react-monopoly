import Cell from './Cell'

export default class Board {
  constructor (private cells: Cell[]) {}

  getCells() {
    return this.cells
  }
}
