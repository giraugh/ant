import styled from 'styled-components'

export const GridCell = styled.div`
  --cell-size: 1.1em;
  width: var(--cell-size);
  height: var(--cell-size);
  background: lightgrey;
  transition: background .05s;

  &.filled {
    background: darkgrey;
  }

  &.ant {
    &::after {
      content: '🐜';
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 100%;
    }
  }
`

