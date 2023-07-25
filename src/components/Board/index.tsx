import BoardModel from '../../models/Board'
import { normalizeAndFormatAmount } from '../../utils/money'

type BoardProps = {
  board: BoardModel
}

export default function Board({ board }: BoardProps) {
  return (
    <div>
      {board.getCells().map(cell => (
        <p style={{ backgroundColor: cell.getColor() || 'inherit' }} key={cell.getId()}>
          {cell.getName()} {normalizeAndFormatAmount(cell.getBasePrice())}
        </p>
      ))}
    </div>
  )
}