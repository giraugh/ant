import React from 'react'

import useAnt from './useAnt'
import { Grid, GridCell, Container, Button } from './appStyle.js'

const App = () => {
  const [gridWidth, gridHeight] = [21, 21]
  const { state, next } = useAnt(gridWidth, gridHeight)

  return <Container>
    <h1>Langton's Ant</h1>
    <Grid style={{'--width': gridWidth, '--height': gridHeight}}>
      {state.cells.map((val, i) =>
        <Cell filled={val} isAnt={state.antIndex === i} key={i}/>
      )}
    </Grid>
    <Button onClick={next}>Next</Button>
  </Container>
}

const Cell = ({ filled, isAnt }) =>
  <GridCell className={isAnt ? ('ant') : (filled ? 'filled' : 'empty')} />

export default App
