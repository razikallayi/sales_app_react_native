import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavBar } from "galio-framework";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export const Navbar = ({ content, isLoading }) => {
  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <NavBar
      right={
        <View style={styles.topBarRight}>
          <View
            style={{
              alignItems: "left",
              justifyContent: "center",
              marginTop: 8
            }}
          >
            <Text style={styles.username}>{content.profile.name}</Text>
            <Text style={styles.usersubtext}>Now at: COMPANYPPADY</Text>
          </View>
          <View style={styles.dates}>
            <Text style={styles.date}>
              {content.sales.date.substring(0, 2)}
            </Text>
            <Text style={styles.day}>TUESDAY</Text>
          </View>
        </View>
      }
      left={
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons size={26} name={"dots-vertical"} />
          <Text style={styles.topBarTitle}>Sales</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    marginTop: 20
  },
  topBarInfoContainer: {
    marginTop: 14,
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fc0",
    paddingVertical: 10
  },
  card: {
    margin: 10
  },
  topBarTitle: {
    textAlignVertical: "center",
    justifyContent: "center",
    fontSize: 14,
    marginTop: 4,
    fontWeight: "300"
  },
  topBarRight: {
    flexDirection: "row"
  },
  username: {
    color: "indigo",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 10
  },
  usersubtext: {
    fontSize: 8
  },
  dates: {
    flexDirection: "column",
    justifyContent: "flex-end",
    marginLeft: 8
  },
  date: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4ebfe2",
    alignSelf: "center"
  },
  day: {
    fontSize: 8
  }
});
