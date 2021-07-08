import styled from "styled-components";
import { FlexBox, FlexColumn, FlexRow } from "../../Global.Styles";

export const HeroSection = styled(FlexBox)`
  background: linear-gradient(
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.img}), rgb(28, 28, 28);
  background-clip: content-box, padding-box;
  width: 100%;
  height: 600px;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    background-position: 50%, 50% !important;
    background-size: 100%, cover !important;
  }
`;

export const InnerHeroSection = styled(FlexColumn)`
  justify-content: flex-end;
  align-items: start;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px 40px;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #fff;
`;

export const Description = styled.p`
  display: flex;
  justify-content: start;
  align-items: start;
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  max-width: 600px;
`;

export const MoviesTitle = styled(Title)`
  color: #1c1c1c;
  margin: 45px 0;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`;

export const CardsContainer = styled(FlexRow)`
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  width: 101%;
  margin-bottom: 60px;
  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`;

export const LoadMore = styled(FlexRow)`
  width: 200px;
  height: 50px;
  font-size: 18px;
  background: ${(props) => (props.isLoading ? "#ddd" : "#00aeff")};
  color: #fff;
  border-radius: 21px;
  margin-bottom: 20px;
  cursor: pointer;
`;
