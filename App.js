import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Categoria - 1", value: 1 },
  { label: "Categoria - 2", value: 2 },
  { label: "Categoria - 3", value: 3 },
  { label: "Categoria - 4", value: 4 },
  { label: "Categoria - 5", value: 5 },
];

export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="Category"
        icon="apps"
      />
      <AppTextInput placeholder="Category" icon="apps" />
    </Screen>
  );
}
