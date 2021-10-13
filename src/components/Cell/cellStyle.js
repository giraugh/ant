import styled from 'styled-components'

export const GridCell = styled.div`
  --cell-size: 1.1em;
  width: var(--cell-size);
  height: var(--cell-size);
  transition: background .05s;

  &.empty {
    background: white;
  }

  &.filled {
    background: #78768b;
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

