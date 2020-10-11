import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screen/Account";
import ListingEdit from "../screen/ListingEdit";
import Listings from "../screen/Listings";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingsEdit" component={ListingEdit} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default AppNavigator;
