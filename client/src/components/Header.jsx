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
  border-radius: 0 0 10px 10px;

  nav {
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .title {
    cursor: pointer;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    grid-column: 3/4;
    align-items: center;
    gap: 0.5rem;
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
          <div className="buttons">
            <Button onClick={() => navigate("/user/new")} title="Create" />
            <Button
              onClick={() => window.localStorage.removeItem("token")}
              title="Sign Out"
            />
          </div>
        </nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
