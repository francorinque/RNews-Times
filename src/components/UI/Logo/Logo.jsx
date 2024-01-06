import { LogoStyled } from "./LogoStyles"

import { Link } from "react-router-dom"

const Logo = ({ size }) => {
  return (
    <LogoStyled size={size}>
      <Link to="/">Rnews</Link>
    </LogoStyled>
  )
}
export default Logo
