import {
  FooterStyled,
  FooterContactStyled,
  FooterOthersStyled,
  CopyrightStyled,
  WrapperFlex
} from "./FooterStyles"

import { Twitter, Instagram, Mail } from "iconoir-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <FooterStyled>
      <WrapperFlex>
        <FooterContactStyled>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="/">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="/">
                <Mail />
              </a>
            </li>
          </ul>
        </FooterContactStyled>
        <FooterOthersStyled>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Editorial Team</Link>
        </FooterOthersStyled>
      </WrapperFlex>

      <CopyrightStyled>
        Copyright (c) <strong>2023 The New York Times Company</strong>. All
        Rights Reserved.
      </CopyrightStyled>
    </FooterStyled>
  )
}
export default Footer
