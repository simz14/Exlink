import { PropTypes } from "prop-types";
import Header from "./Header";
import { styled } from "styled-components";

const MainWrapper = styled.main`
  background: ${({ theme }) => theme.bcg};
  min-height: 100vh;
  padding-top: 68px;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
