import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listings from "../screen/Listings";
import ListingDetails from "../screen/ListingDetails";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Listings"
      component={Listings}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
