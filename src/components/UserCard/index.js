import React from "react";
import { IconButton } from "../index";
import Styled from "styled-components";

const StyledUserCard = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
border:1px solid black;
box-shadow:0.5px 1px 4px rgba(0, 0, 0, 0.4);
border-radius:.5rem;
max-width:320px;
flex-basis:100%;
margin:1rem;

&:hover{
  transform:translateY(-0.5rem) scale(1);
}
`;

const StyledContent = Styled.div`
padding:1.5rem;
`;
const UserCard = ({ name, email, phone, company }) => {
  return (
    <StyledUserCard data-testid="usercard">
      <StyledContent>
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Email: <span>{email}</span>
        </p>
        <p>
          Mobile No: <span>{phone}</span>
        </p>
        <p>
          Company Name: <span>{company.name} </span>
        </p>
      </StyledContent>
      <IconButton iconValue="&#9990;" iconText="Contact Now" />
    </StyledUserCard>
  );
};

export default UserCard;
