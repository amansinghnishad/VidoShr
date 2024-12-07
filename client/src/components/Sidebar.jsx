import React from "react";
import {
  HomeRounded,
  CloseRounded,
  SearchRounded,
  FavoriteRounded,
  UploadRounded,
  LightModeRounded,
  LogoutRounded,
  DarkModeRounded,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 12px;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;
const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;
const NavText = styled.div`
  padding: 12px 0px;
  text-decoration: none !important;
`;

const HR = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_secondary};
  margin: 12px 0px;
`;

const menuItems = [
  {
    link: "/",
    name: "Dashboard",
    icon: <HomeRounded />,
  },
  {
    link: "/search",
    name: "Search",
    icon: <SearchRounded />,
  },
  {
    link: "/favorites",
    name: "Favourites",
    icon: <FavoriteRounded />,
  },
];

const Sidebar = ({ menuOpen, setMenuOpen, setDarkMode, darkMode }) => {
  const button = [
    {
      fun: () => console.log("Uploads"),
      name: "Uploads",
      icon: <UploadRounded />,
    },
    {
      fun: (setDarkMode, darkMode) => setDarkMode(!darkMode),
      name: darkMode ? "LightMode" : "DarkMode",
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />,
    },
    {
      fun: () => console.log("LogOut"),
      name: "LogOut",
      icon: <LogoutRounded />,
    },
  ];

  return (
    <>
      <MenuContainer menuOpen={menuOpen}>
        <Flex>
          <Logo>VPlayer</Logo>
          <Close onClick={() => setMenuOpen(false)}>
            <CloseRounded />
          </Close>
        </Flex>
        {menuItems.map((item) => (
          <Link
            to={item.link}
            style={{ textDecoration: "none" }}
            key={item.name}
          >
            <Elements>
              {item.icon}
              <NavText>{item.name}</NavText>
            </Elements>
          </Link>
        ))}
        <HR />
        {button.map((item) => (
          <Elements
            onClick={() => item.fun(setDarkMode, darkMode)}
            key={item.name}
          >
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        ))}
      </MenuContainer>
    </>
  );
};

export default Sidebar;
