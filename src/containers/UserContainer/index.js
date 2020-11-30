import React, { useState, useEffect } from "react";
import { UserCard, Search } from "../../components/index";
import getUsers from "../../api/index";
import Styled from "styled-components";

const StyleUserContainer = Styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
*:focus{
  outline:none;
}
`;

const UserContainer = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const result = await getUsers();
      //console.log(result.data);
      setUserDetails(result.data);
    };
    loadUsers();
  }, [searchText === ""]);

  //console.log('userDetails:',userDetails);

  const searchHandler = (value) => {
    console.log("value:", value);
    let results = userDetails;
    //console.log(results);
    const filteredItems = results.filter((result) => {
      //console.log(result);
      const name = result.name.toLowerCase().indexOf(value.toLowerCase());
      const email = result.email.toLowerCase().indexOf(value.toLowerCase());
      if (name !== -1 || email !== -1) {
        return result;
      }
    });

    //console.log(filteredItems);
    setSearchText(value);
    setUserDetails(filteredItems);
  };

  return (
    <div>
      <Search onLoadUserData={searchHandler} text={searchText.name} />
      <StyleUserContainer>
        {userDetails.map((user) => {
          //console.log(user);
          return <UserCard {...user} key={user.id} />;
        })}
      </StyleUserContainer>
    </div>
  );
};

export default UserContainer;
