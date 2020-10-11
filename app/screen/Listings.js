import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";

const listingsItems = [
  {
    id: 1,
    title: "Red jacket for sale",
    description:
      "Object in perfect state, with 2 years of use and 50% of the original price...",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great conditions",
    description:
      "Object in perfect state, with 2 years of use and 50% of the original price...",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Red jacket for sale",
    description:
      "Object in perfect state, with 2 years of use and 50% of the original price...",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 4,
    title: "Couch in great conditions",
    description:
      "Object in perfect state, with 2 years of use and 50% of the original price...",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const Listings = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listingsItems}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: colors.light,
  },
});

export default Listings;
