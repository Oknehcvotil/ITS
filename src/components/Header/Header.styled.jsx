import styled from "@emotion/styled";

export const HeadCont = styled.div`
  background-color: var(--head-bcg);
  border-bottom: 0.5px solid rgba(18, 18, 18, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;
  max-width: 426px;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export const HeadOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const Phone = styled.a`
  font-family: Calibri;
  font-size: 12px;
  line-height: 1.3;
  color: var(--main-color);
  letter-spacing: 0.04em;
  transition: color var(--transition);

  :hover,
  :focus {
    color: var(--accent-color);
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
`;

export const LogoLink = styled.a`
  transition: transform var(--transition);

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;
