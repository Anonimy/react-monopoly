import Cell from './Cell'
import Player from './Player'

export default class Board {
  private coords: Map<Cell, Player>

  constructor (private cells: [Cell, ...Cell[]], private players: [Player, ...Player[]]) {
    this.coords = new Map(players.map(player => [cells[0], player]))
  }

  private findPlayerCell(player: Player) {
    let cell = this.cells[0]
    this.coords.forEach((value, key) => {
      if (value.getId() === player.getId()) {
        cell = key
      }
    })
    return cell
  }

  movePlayer(player: Player, steps: number) {
    const playerCell = this.findPlayerCell(player)
    const startIndex = Math.max(0, this.cells.findIndex(cell => cell.getId() === playerCell.getId()))
    const finalIndex = (startIndex + steps) % this.cells.length
    this.coords.delete(playerCell)
    this.coords.set(this.cells[finalIndex], player)
  }

  render() {
    return this.cells.map(cell => ({
      cell,
      player: this.coords.get(cell)
    }))
  }

  // TODO: this probably should die
  getFirstPlayer() {
    return this.players[0]
  }
}
