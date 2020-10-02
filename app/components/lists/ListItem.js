import React from "react";
import { StyleSheet, View, TouchableHighlight, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  title,
  description,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.titleDesc}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {description && (
              <AppText style={styles.description} numberOfLines={1}>
                {description}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chvron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  titleDesc: {
    felx: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  description: {
    color: "#6e6969",
  },
  title: {
    fontWeight: "500",
  },
});
