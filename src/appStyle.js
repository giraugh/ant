import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2em;
  margin-top: 4em;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--width), 1fr);
  border-radius: .2rem;
  overflow: hidden;
`

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

  &:hover:not([disabled]){
    background: white;
    color: var(--highlight);
    border: 2px solid var(--highlight);
  }

  &[disabled] {
    opacity: .5;
    cursor: default;
  }
`
