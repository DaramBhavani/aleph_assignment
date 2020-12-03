import React, { useState, useEffect, useRef } from "react";
import { UserCard, Search } from "../../components/index";
import getUsers from "../../api/index";
import Styled from "styled-components";
import { debounce } from "lodash";

const StyleUserContainer = Styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
background-color:#f7f7f7;
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
  }, []);

  const debouncedSave = useRef(
    debounce((nextValue) => callgetUsers(nextValue), 500)
  ).current;

  const callgetUsers = async (value) => {
    //console.log("inside callgetUsers");
    const { data: results } = await getUsers();
    const filteredItems = results.filter((result) => {
      const name = result.name.toLowerCase().indexOf(value.toLowerCase());
      const email = result.email.toLowerCase().indexOf(value.toLowerCase());
      return name !== -1 || email !== -1;
    });
    setUserDetails(filteredItems);
  };

  //console.log('userDetails:',userDetails);

  const searchHandler = (value) => {
    //console.log("value", value);
    setSearchText(value);
    //console.log("calling debounce...");
    debouncedSave(value);
  };

  return (
    <div>
      <Search
        onLoadUserData={searchHandler}
        value={searchText.name}
        placeholder="enter your name/email"
        data-testid="search"
      />

      {userDetails.length === 0 ? (
        <h1 className="center">No Records Found</h1>
      ) : (
        <StyleUserContainer data-testid="app">
          {userDetails.map((user) => {
            //console.log(user);
            return <UserCard {...user} key={user.id} />;
          })}
        </StyleUserContainer>
      )}
    </div>
  );
};

export default UserContainer;
