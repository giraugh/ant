import { useState, useEffect } from 'react'

const useAnt = (gridWidth, gridHeight) => {
  const [antDir, setAntDir] = useState([1, 0]) // Cartesian Vector
  const [antPos, setAntPos] = useState([0, 0]) // Cartesian Vector
  const [gridState, setGridState] = useState([])

  // Construct and init Grid
  useEffect(() => {
    setGridState(
      Array.from({ length: gridHeight*gridWidth }).map(() => 0)
    )
    setAntPos([Math.floor(gridWidth / 2), Math.floor(gridHeight / 2)])
  }, [gridWidth, gridHeight])

  const flipCellState = i => {
    let nextState = [...gridState]
    nextState[i] = 1 - nextState[i]
    setGridState(nextState)
  }

  const resetGrid = () => {
    setGridState(
      Array.from({ length: gridHeight*gridWidth }).map(() => 0)
    )
    setAntPos([Math.floor(gridWidth / 2), Math.floor(gridHeight / 2)])
  }

  // Progress state
  const next = () => {
    // Find ant
    const antIndex = antPos[1] * gridWidth + antPos[0]

    // Rotate Ant
    const theta = gridState[antIndex] === 1 ? -3.14/2 : 3.14/2
    const xd = antDir[0] * Math.cos(theta) - antDir[1] * Math.sin(theta)
    const yd = antDir[0] * Math.sin(theta) + antDir[1] * Math.cos(theta)
    const nextAntDir = [Math.round(xd), Math.round(yd)]

    // Flip Cell
    let nextState = [...gridState]
    nextState[antIndex] = 1 - gridState[antIndex]
    
    // Move ant
    const nextAntPos = [
      (antPos[0] + nextAntDir[0]) % gridWidth,
      (antPos[1] + nextAntDir[1]) % gridHeight,
    ]

    // Update state for next timestep
    setGridState(nextState)
    setAntPos(nextAntPos)
    setAntDir(nextAntDir)
  }

  const antIndex = antPos[1] * gridWidth + antPos[0]
  return { state: { cells: gridState, antIndex }, next, flipCellState, resetGrid }
}

export default useAnt
