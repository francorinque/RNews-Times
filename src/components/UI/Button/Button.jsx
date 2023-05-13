import { ButtonStyled } from './ButtonStyles'

const Button = ({ children, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} whileTap={{ scale: 0.95 }}>
      {children}
    </ButtonStyled>
  )
}
export default Button
