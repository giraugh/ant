import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2em;
  margin-top: 0em;
  padding-top: .2em;

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

export const ButtonGroup = styled.div`
  display: flex;
  gap: .5em;

  button {
    min-width: 7em;
  }
`

export const Button = styled.button`
  --highlight: #585d9d;
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
