import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { BasicContext } from "../../../util/basicContext";
import { ValContext } from "../../../App";
import { ContextState } from "../../../util/BasicContextInterface";

export const myLoggedOut: ContextState = {
  userLoggedIn: false,
  userName: "Bogdan Oloeriu",
};

export const myLoggedIn: ContextState = {
  userLoggedIn: true,
  userName: "Bogdan Oloeriu",
};

const UserComponent = () => {
  const appContext = React.useContext(BasicContext);

  const { state, update } = React.useContext(ValContext);
  console.log(state);

  let userComponent =
    state?.userLoggedIn === false ? (
      <Text>Time to login</Text>
    ) : (
      <Text>Hello: {state?.userName}</Text>
    );
  let inOut =
    state.userLoggedIn === true ? (
      <Button onClick={() => update(myLoggedOut)}>Log Out</Button>
    ) : (
      <Button onClick={() => update(myLoggedIn)}>Log In</Button>
    );

  return <HStack>{userComponent}{inOut}</HStack>;
};

export default UserComponent;