import { LogoStyled } from './LogoStyles'

import LogoImg from '../../../assets/images/logo.png'

import { Link } from 'react-router-dom'

const Logo = ({ width }) => {
  return (
    <LogoStyled width={width}>
      <Link to='/'>
        <img src={LogoImg} alt='logo' />
      </Link>
    </LogoStyled>
  )
}
export default Logo
