import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screen/Welcome";
import Login from "../screen/Login";
import Register from "../screen/Register";

const Stack = createStackNavigator();

const AuthNavogator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default AuthNavogator;
