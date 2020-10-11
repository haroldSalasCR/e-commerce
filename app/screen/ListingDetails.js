import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

const ListingDetails = ({ route }) => {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <AppText style={styles.description}>{listing.description}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Alex Carruso"
            description="24 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    color: colors.medium,
  },
  userContainer: {
    marginVertical: 40,
  },
});
