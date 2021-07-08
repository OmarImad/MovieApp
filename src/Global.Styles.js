import styled from "styled-components";

export const MainContainer = styled("main")`
  max-width: 1920px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`;

export const Typography = styled("p")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};

  @media screen and (max-width: 1100px) {
    font-size: ${(props) => props.fontSize - 6}px;
  }
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const InnerSection = styled(FlexColumn)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 6px solid #1c1c1c;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #ddd;
  margin-top: 20%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const Line = styled("hr")`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "1px")};
  color: ${(props) => (props.color ? props.color : "#000")};
`;
