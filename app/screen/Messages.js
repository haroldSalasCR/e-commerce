import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import Separator from "../components/lists/Separator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import Screen from "../components/Screen";

const initMessages = [
  {
    id: 1,
    title: "T1",
    description: "Hey! Is this item still available?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
];

const Messages = (props) => {
  const [messages, setMessages] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

export default Messages;
