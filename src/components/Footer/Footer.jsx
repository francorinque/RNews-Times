import {
  FooterStyled,
  FooterContactStyled,
  FooterOthersStyled,
  CopyrightStyled,
  WrapperFlex
} from "./FooterStyles"

import { LinkedIn, GitHub, Mail } from "iconoir-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <FooterStyled>
      <WrapperFlex>
        <FooterContactStyled>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/franco-agustin-rinque">
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href="https://github.com/francorinque">
                <GitHub />
              </a>
            </li>
            <li>
              <a href="mailto:francoagustinrinquecorreo@gmail.com">
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
        <strong> {new Date().getFullYear()} Developed by Franco Rinque</strong>
      </CopyrightStyled>
    </FooterStyled>
  )
}
export default Footer
