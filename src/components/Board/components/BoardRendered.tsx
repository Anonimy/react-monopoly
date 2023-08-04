import Cell from "../../../models/Cell"
import Player from "../../../models/Player"
import { normalizeAndFormatAmount } from "../../../utils/money"

type CellsProps = {
  cells: Array<{
    cell: Cell
    player?: Player
  }>
}

const CELLS_BY_LINE = 10
const CELL_SIZE = 160

function getTransform(i: number) {
  return [
    'translateX(0px) translateY(0px) rotate(0deg)',
    `translateX(${6.5*CELL_SIZE}px) translateY(${4.5*CELL_SIZE}px) rotate(90deg)`,
    `translateX(${2*CELL_SIZE}px) translateY(${11*CELL_SIZE}px) rotate(180deg)`,
    `translateX(-${4.5*CELL_SIZE}px) translateY(${6.5*CELL_SIZE}px) rotate(270deg)`,
  ][i] || ''
}

export default function BoardRendered({ cells }: CellsProps) {
  const lines = [0, 1, 2, 3].map(multiplier => {
    const start = multiplier * CELLS_BY_LINE
    const end = multiplier * CELLS_BY_LINE + CELLS_BY_LINE
    return cells.slice(start, end)
  })

  return (
    <div style={{ height: CELL_SIZE*13, width: CELL_SIZE*13, margin: '0 auto', position: 'relative', transform: 'rotate(180deg)' }}>
      {lines.map((line, i) => (
          <div style={{ display: 'flex', height: CELL_SIZE*2, transform: getTransform(i), position: 'absolute' }} key={i}>
            {line.map(({ cell, player }, j) => {
              const isCorner = j === 0
              const price = normalizeAndFormatAmount(cell.getBasePrice())
              return (
                <div style={{ height: '100%', width: CELL_SIZE * (isCorner ? 2 : 1), backgroundColor: cell.getColor() || '', transform: 'rotate(180deg)', border: '1px solid #999', boxSizing: 'border-box', padding: 8, fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'sans-serif' }} key={cell.getId()}>
                  <p style={{ margin: 0, padding: 0 }}>{cell.getName()}</p>
                  {price && <p>{price}</p>}
                  {player && <p style={{ border: '10px solid red' }}>{player.getName()}</p>}
                </div>
              )
            })}
          </div>
        ))}
    </div>
  )
}