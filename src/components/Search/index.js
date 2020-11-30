import React from "react";
import Styled from "styled-components";

const StyleSearch = Styled.div`
display:flex;
justify-content:center;
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
}
`;

const Search = (props) => {
  return (
    <StyleSearch>
      <input
        type="text"
        placeholder="enter your name/email"
        value={props.text}
        onChange={(event) => props.onLoadUserData(event.target.value)}
      ></input>
      <span>&#128269;</span>
    </StyleSearch>
  );
};

export default Search;
