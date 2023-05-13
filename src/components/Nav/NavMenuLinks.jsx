import { LinkStyled } from "./NavStyles"

const Links = [
  { id: 1, path: "/", text: "Home" },
  { id: 2, path: "/about-us", text: "About Us" }
]

const NavMenuLinks = () => {
  return (
    <>
      {Links.map(link => (
        <LinkStyled activeclassname="active" to={link.path} key={link.id}>
          {link.text}
        </LinkStyled>
      ))}
    </>
  )
}
export default NavMenuLinks
