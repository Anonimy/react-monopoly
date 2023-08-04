import { useState } from 'react'
import BoardModel from '../../models/Board'
import Player from '../../models/Player'
import { getRandomInt } from '../../utils/dice'
import BoardRendered from './components/BoardRendered'

type BoardProps = {
  board: BoardModel
}

export default function Board({ board }: BoardProps) {
  const [boardRendered, setBoardRendered] = useState(board.render())
  // TODO: should update with the next player
  const [turnPlayer] = useState(board.getFirstPlayer())

  function renderBoard() {
    setBoardRendered(board.render())
  }

  function handleRollDice(player: Player) {
    return function handleRollDiceClick() {
      const steps = getRandomInt(12, 2)
      board.movePlayer(player, steps)
      renderBoard()
    }
  }

  return (
    <>
      <div>
        <button type="button" onClick={handleRollDice(turnPlayer)}>
          Roll dice
        </button>
      </div>
      <div style={{ border: '1px solid black', padding: '18px 32px' }}>
        <BoardRendered cells={boardRendered} />
      </div>
    </>
  )
}
