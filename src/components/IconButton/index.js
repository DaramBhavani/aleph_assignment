import React from "react";
import Styled from "styled-components";

const StyleButton = Styled.button`
border:1px solid black;
float:right;
margin-right:1rem;
margin-bottom:1rem;
background-color: #5643fa;
border-radius:1.5rem;
color:#fff;
padding:.5rem;
font-size:1.10rem;

span{
  margin-right:5px;
  align-self:center;
}
`;

const IconButton = (props) => {
  return (
    <div>
      <StyleButton>
        <span>{props.iconValue}</span>
        <span>Contact Now</span>
      </StyleButton>
    </div>
  );
};

export default IconButton;
