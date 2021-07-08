import {
  NavContainer,
  LogoImg,
  LogoLink,
  NavInnerContainer,
} from "./Nav.Styles";
import logo from "../../Assets/reactMovie_logo.png";

function Nav() {
  return (
    <NavContainer as={"header"}>
      <NavInnerContainer>
        <LogoLink to={"/"}>
          <LogoImg src={logo} alt={"Logo"} />
        </LogoLink>
      </NavInnerContainer>
    </NavContainer>
  );
}

export default Nav;
