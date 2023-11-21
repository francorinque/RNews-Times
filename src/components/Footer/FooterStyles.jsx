import styled from "styled-components"

export const FooterStyled = styled.footer`
  padding: 100px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`

export const WrapperFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

export const FooterContactStyled = styled(Flexbox)`
  h4 {
    letter-spacing: 2px;
    font-weight: var(--semibold);
  }

  ul {
    list-style: none;
    display: flex;
    margin-top: 10px;
    gap: 20px;

    li {
      transition: ease 0.1s;

      a {
        color: inherit;
      }
    }

    li:hover {
      cursor: pointer;
      color: var(--clr-secundary-50);
      transition: ease 0.1s;
      transform: scale(1.3);
    }
  }
`
export const FooterOthersStyled = styled(Flexbox)`
  a {
    color: inherit;
  }
`

export const CopyrightStyled = styled.span`
  margin: 0 auto;
  display: block;
  text-align: center;
  font-size: clamp(12px, 2vw, 14px);
`
