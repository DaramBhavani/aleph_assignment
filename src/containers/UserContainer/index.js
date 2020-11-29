import React, { useState, useEffect } from "react";
import { UserCard } from "../../components/index";
import getUsers from "../../api/index";
import Styled from "styled-components";

const StyleUserContainer = Styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`;

const UserContainer = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const result = await getUsers();
      console.log(result.data);
      setUserDetails(result.data);
    };
    loadUsers();
  }, []);

  console.log("userDetails:", userDetails);

  return (
    <StyleUserContainer>
      {userDetails.map((user) => {
        console.log(user);
        return <UserCard {...user} key={user.id} />;
      })}
    </StyleUserContainer>
  );
};

export default UserContainer;
