import styled from "@emotion/styled";
import logo from "../../images/logo/ITS_main.png";

export const Hero = styled.section`
  background-image: url(${logo});
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 426px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;
