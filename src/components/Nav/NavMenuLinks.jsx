import { LinkStyled } from "./NavStyles"

const Links = [
  { id: 1, path: "/", text: "Home" },
  { id: 2, path: "/about-us", text: "About Us" }
]

const NavMenuLinks = ({ onClick }) => {
  return (
    <>
      {Links.map(link => (
        <LinkStyled
          activeclassname="active"
          to={link.path}
          key={link.id}
          onClick={onClick}
        >
          {link.text}
        </LinkStyled>
      ))}
    </>
  )
}
export default NavMenuLinks
