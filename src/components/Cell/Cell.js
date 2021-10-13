import React from 'react'

import { GridCell } from './cellStyle'

const Cell = ({ filled, isAnt, onClick }) =>
  <GridCell
    className={`${isAnt ? 'ant' : ''} ${filled ? 'filled' : 'empty'}`}
    onMouseDown={onClick}
    onMouseEnter={e => e.buttons > 0 ? onClick() : null} />

export default Cell
