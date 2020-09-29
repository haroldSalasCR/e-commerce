import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./app/screen/Welcome";
import Card from "./app/components/Card";
import ListingDetails from "./app/screen/ListingDetails";
import ViewImage from "./app/screen/ViewImage";
import Messages from "./app/screen/Messages";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Account from "./app/screen/Account";
import Screen from "./app/components/Screen";
import Listings from "./app/screen/Listings";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  return <AppTextInput placeholder="Username" icon="email" />;
}

const styles = StyleSheet.create({});
