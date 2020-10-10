import React, { useState } from "react";
import ListingEdit from "./app/screen/ListingEdit";

import Login from "./app/screen/Login";
import Register from "./app/screen/Register";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";
import AuthNavogator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavogator />
    </NavigationContainer>
  );
}
