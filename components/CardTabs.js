import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

export const TabBar = props => {
  let { selectedIndex } = props;
  selectedIndex = selectedIndex ? selectedIndex : 0;
  console.log(selectedIndex);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: -26,
        marginLeft: -10
      }}
    >
      <Button
        title={"Near by customers"}
        titleStyle={{
          ...styles.titleStyle,
          color: selectedIndex != 0 ? "#FFF" : "#444"
        }}
        buttonStyle={{
          ...styles.buttonStyle,
          backgroundColor: selectedIndex != 0 ? "#4ebfe2" : "#FFF",
          borderTopLeftRadius: 20
        }}
      />
      <Button
        title={"Map view"}
        titleStyle={{
          ...styles.titleStyle,
          color: selectedIndex != 1 ? "#FFF" : "#444"
        }}
        buttonStyle={{
          ...styles.buttonStyle,
          backgroundColor: selectedIndex != 1 ? "#4ebfe2" : "#FFF"
        }}
      />
      <Button
        title={"Invoice list"}
        titleStyle={{
          ...styles.titleStyle,
          color: selectedIndex != 2 ? "#FFF" : "#444"
        }}
        buttonStyle={{
          ...styles.buttonStyle,
          backgroundColor: selectedIndex != 2 ? "indigo" : "#FFF"
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#444"
  },
  buttonStyle: {
    backgroundColor: "#4ebfe2",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowRadius: 0,
    shadowOpacity: 6.0
  }
});
