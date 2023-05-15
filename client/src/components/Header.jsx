import Button from "./Button";
import { styled } from "styled-components";
import { Container } from "./Container";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: white;
  background-color: #ffffff6b;
  border-radius: 10px;

  nav {
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .title {
    cursor: pointer;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Container>
        <nav>
          <h2 className="title" onClick={() => navigate("/")}>
            User List
          </h2>
          <Button onClick={() => navigate("/user/new")} title="Create" />
        </nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
