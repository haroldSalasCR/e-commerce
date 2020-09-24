import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Separator from "../components/Separator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const Messages = () => {
  return (
    <FlatList
      data={}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          description={item.description}
          image={item.image}
          onPress={() => console.log("Message Selected", item)}
          renderRightActions={() => <View></View>}
        />
      )}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

export default Messages;

const styles = StyleSheet.create({});
