import React, { useState, useEffect } from 'react'

import { useAnt, useQueryParam } from 'hooks'
import { Cell } from 'components'
import { Grid, Container, Button, ButtonGroup } from './gameStyle.js'

const PLAY_INTERVAL = 10

// Game component contains header, grid and buttons for play control
const Game = () => {
  const [playing, setPlaying] = useState(true)
  const [gridSize] = useQueryParam('size', 31)
  const [gridWidth, gridHeight] = [gridSize, gridSize]
  const { state, next, flipCellState, resetGrid } = useAnt(gridWidth, gridHeight)

  // Setup a callback to call next when 'playing'
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (playing)
        next()
    }, PLAY_INTERVAL)
    return () => window.clearInterval(timer)
  })

  return <Container>
    <h1>🐜</h1>
    <Grid style={{'--width': gridWidth, '--height': gridHeight}}>
      {state.cells.map((val, i) =>
        <Cell filled={val} isAnt={state.antIndex === i} key={i} onClick={() => flipCellState(i)}/>
      )}
    </Grid>
    <ButtonGroup>
      <Button onClick={next} disabled={playing}>Next</Button>
      <Button onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'}</Button>
    </ButtonGroup>
    <Button onClick={resetGrid}>Reset</Button>
  </Container>
}

export default Game
