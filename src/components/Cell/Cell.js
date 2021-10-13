import React from 'react'

import { GridCell } from './cellStyle'

const Cell = ({ filled, isAnt }) =>
  <GridCell className={`${isAnt ? 'ant' : ''} ${filled ? 'filled' : 'empty'}`} />

export default Cell
