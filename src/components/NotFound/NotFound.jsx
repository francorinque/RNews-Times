import styled from "styled-components"

import { EmojiLookDown } from "iconoir-react"

export const NotFoundStyled = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  place-content: center;
  font-size: clamp(20px, 3vw, 40px);

  div {
    width: 90%;
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    font-weight: var(--semibold);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;
  }
`

const NotFound = () => {
  return (
    <NotFoundStyled>
      <div>
        <span>Ups,This page not found. Come back to home</span>
        <span>
          <EmojiLookDown />
        </span>
      </div>
    </NotFoundStyled>
  )
}
export default NotFound
