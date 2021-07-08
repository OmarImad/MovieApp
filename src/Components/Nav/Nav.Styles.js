import styled from "styled-components";
import { FlexRow } from "../../Global.Styles";
import { Link } from "react-router-dom";

export const NavContainer = styled(FlexRow)`
  background: #1c1c1c;
  height: 120px;
`;

export const NavInnerContainer = styled(FlexRow)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  height: auto;
  max-height: 80px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
