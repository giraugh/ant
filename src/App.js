import React, { useState, useEffect } from 'react'

import useAnt from './useAnt'
import { Grid, GridCell, Container, Button } from './appStyle.js'

const PLAY_INTERVAL = 10

const App = () => {
  const [playing, setPlaying] = useState(true)
  const [gridWidth, gridHeight] = [31, 31]
  const { state, next } = useAnt(gridWidth, gridHeight)

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
        <Cell filled={val} isAnt={state.antIndex === i} key={i}/>
      )}
    </Grid>
    <Button onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'}</Button>
    <Button onClick={next} disabled={playing}>Next</Button>
  </Container>
}

const Cell = ({ filled, isAnt }) =>
  <GridCell className={`${isAnt ? 'ant' : ''} ${filled ? 'filled' : 'empty'}`} />

export default App
