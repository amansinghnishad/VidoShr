import { PersonRounded, Menu as MenuIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  color: ${({ theme }) => theme.text_primary};
  gap: 30px;
  background-color: ${({ theme }) => theme.bgLight};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ButtonDiv = styled.div`
  font-size: 16px;
  cursor: pointer;
  max-width: 70px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 6px;
  padding: 8px 12px;
  gap: 6px;
`;

const IcoButton = styled(IconButton)`
  color: ${({ theme }) => theme.text_secondary} !important;
`;

const NavBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <NavBarDiv>
      <IcoButton onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon />
      </IcoButton>

      <ButtonDiv>
        <PersonRounded />
        Login
      </ButtonDiv>
    </NavBarDiv>
  );
};

export default NavBar;
