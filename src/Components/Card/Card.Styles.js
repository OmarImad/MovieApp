import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
  width: 25%;
  height: 430px;
  margin: 0 15px 20px;
  min-width: 240px;
  max-width: 280px;

  @media screen and (max-width: 600px) {
    min-width: auto;
    width: 80%;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
