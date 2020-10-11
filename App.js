import React, { useState } from "react";
import ListingEdit from "./app/screen/ListingEdit";

import Login from "./app/screen/Login";
import Register from "./app/screen/Register";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";
import AuthNavogator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./app/navigation/NavigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
