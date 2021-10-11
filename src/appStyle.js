import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2em;
  margin-top: 4em;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--width), 1fr);
  border-radius: .2rem;
  overflow: hidden;
`

export const GridCell = styled.div`
  width: 1em;
  height: 1em;
  background: lightgrey;
  transition: background .1s;

  &.filled {
    background: darkgrey;
  }

  &.ant {
    background: #03a9f4;
  }
`

export const Button = styled.button`
  --highlight: #03a9f4;
  outline: none;
  border: none;
  padding: .5em 2em;
  background-color: var(--highlight);
  font-size: 1.1rem;
  border-radius: .2em;
  color: white;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    background: white;
    color: var(--highlight);
    border: 2px solid var(--highlight);
  }
`
