import { Container, Content } from "./styles";
import { BsSpotify, BsGithub } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import menuInfo from "./menu.info";
import { useEffect, useState } from "react";

function Menu() {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path: string) => {
    navigate(path);
    setActive(path);
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <Container>
      <BsSpotify
        onClick={() => {
          handleClick("/profile");
        }}
      />
      <Content active={active}>
        {menuInfo.map((btn, index) => {
          return (
            <div
              onClick={() => {
                setActive(btn.path);
                handleClick(btn.path);
                console.log({ location: location.pathname, active: `${active}` });
              }}
              className={active === btn.path ? "active" : ""}
              key={`${index}`}
            >
              <btn.icon />
              <span>{btn.title}</span>
            </div>
          );
        })}
      </Content>
      <BsGithub onClick={() => (window.location.href = "https://github.com/nittts")} />
    </Container>
  );
}

export default Menu;
