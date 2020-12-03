import React from "react";
import Styled from "styled-components";

const StyleSearch = Styled.div`
display:flex;
justify-content:center;
align-items:center;
*:focus{
  outline:none;
}
input{
  flex:0 0 30%;
  border:1px solid black;
  border-radius:1.5rem;
  box-shadow:0.5px 1px 4px rgba(0, 0, 0, 0.4);
  padding:.7rem 2rem;
  margin:1rem; 
  padding-right:3rem;
}
span{
  margin-left: -3rem;
}
`;

const Search = (props) => {
  return (
    <StyleSearch>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.onLoadUserData(event.target.value)}
        data-testid="search"
      ></input>
      <span>&#128269;</span>
    </StyleSearch>
  );
};

export default Search;
