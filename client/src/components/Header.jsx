import Button from "./Button";
import { styled } from "styled-components";
import { Container } from "./Container";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "./Switcher";

const HeaderWrapper = styled.nav`
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.header};
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

  const handleClick = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <HeaderWrapper>
      <Container>
        <nav>
          <h2 className="title" onClick={() => navigate("/")}>
            User List
          </h2>
          <div className="buttons">
            <ThemeSwitcher />
            <Button onClick={() => navigate("/user/new")} title="Create" />
            <Button onClick={handleClick} title="Sign Out" />
          </div>
        </nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
