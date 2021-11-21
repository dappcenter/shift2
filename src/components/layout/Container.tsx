import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  padding-left: 16px;
  padding-right: 16px;
  h1 {
    color: #2424b1;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default Container;
