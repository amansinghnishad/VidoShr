import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { Category } from "../utils/Data.js";
import { DefaultCard } from "../components/DefaultCard";
import { Link } from "react-router-dom"; // Import Link component

const SearchMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 20px 9px;
  }
`;

const SearchBar = styled.div`
  max-width: 700px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 30px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Categories = styled.div`
  margin: 20px 10px;
`;

const Heading = styled.h2`
  align-items: flex-start;
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 540;
  margin: 10px 14px;
`;

const BrowseAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 14px;
`;

const Search = () => {
  const [searched, setSearched] = useState("");

  const handelChange = async (e) => {
    setSearched(e.target.value);
  };

  return (
    <SearchMain>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <SearchBar>
          <SearchOutlinedIcon sx={{ color: "inherit" }} />
          <input
            type="text"
            placeholder="Search Video"
            style={{
              border: "none",
              outline: "none",
              background: "inherit",
              color: "inherit",
              width: "100%",
            }}
            value={searched}
            onChange={(e) => handelChange(e)}
          />
        </SearchBar>
      </div>
      {searched === "" ? (
        <Categories>
          <Heading>Browse All</Heading>
          <BrowseAll>
            {Category.map((category) => (
              <Link
                to={`/showvideos/${category.name.toLowerCase()}`}
                key={category.name}
                style={{ textDecoration: "none" }}
              >
                <DefaultCard category={category} />
              </Link>
            ))}
          </BrowseAll>
        </Categories>
      ) : (
        <>Hi</>
      )}
    </SearchMain>
  );
};

export default Search;
