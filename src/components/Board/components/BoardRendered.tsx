import Cell from "../../../models/Cell"
import Player from "../../../models/Player"
import { normalizeAndFormatAmount } from "../../../utils/money"

type CellsProps = {
  cells: Array<{
    cell: Cell
    player?: Player
  }>
}

export default function BoardRendered({ cells }: CellsProps) {
  return (
    <>
      {cells.map(({ cell, player }) => (
        <p style={{ backgroundColor: cell.getColor() || 'inherit' }} key={cell.getId()}>
          {player && <span style={{ border: '10px solid red' }}>{player.getName()}</span>}
          {cell.getName()} {normalizeAndFormatAmount(cell.getBasePrice())}
        </p>
      ))}
    </>
  )
}