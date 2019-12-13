import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberFormat from "react-number-format";

export const CustomerListItem = ({ customer }) => {
  const button = customer.isVisited ? (
    <Ionicons
      name={"ios-checkmark-circle-outline"}
      style={{
        color: "#4ebfe2",
        fontSize: 22,
        paddingVertical: 8,
        marginRight: 2
      }}
    />
  ) : (
    <Ionicons
      name={"ios-close-circle-outline"}
      style={{
        color: "purple",
        fontSize: 22,
        paddingVertical: 8,
        marginRight: 2
      }}
    />
  );
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      {button}
      <View style={{ ...styles.textContainer, flex: 4 }}>
        <Text
          style={{ ...styles.text, fontWeight: "bold" }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {customer.cust_id}{" "}
        </Text>
        <Text style={styles.text}> ({customer.cust_name}) </Text>
      </View>
      <View style={{ ...styles.textContainer, flex: 4 }}>
        <Text style={styles.text}> {customer.time} </Text>
      </View>
      <View style={{ ...styles.textContainer, flex: 4 }}>
        <Text style={styles.text}>
          <NumberFormat
            value={customer.sales}
            displayType={"text"}
            fixedDecimalScale={true}
            decimalScale={2}
            thousandSeparator={true}
            renderText={value => <Text>{value}</Text>}
          />
        </Text>
      </View>
      <View style={{ ...styles.textContainer, flex: 4 }}>
        <Text style={{ ...styles.text, color: "indigo", fontWeight: "600" }}>
          <NumberFormat
            value={customer.collection}
            displayType={"text"}
            fixedDecimalScale={true}
            decimalScale={2}
            thousandSeparator={true}
            renderText={value => <Text>{value}</Text>}
          />
        </Text>
      </View>
      <MaterialIcons
        style={{ fontSize: 24, color: "#444" }}
        name={"location-on"}
      />
    </View>
  );
};

export const CustomerListHead = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <View style={{ flex: 7 }}>
        <Text style={styles.textHead}> </Text>
      </View>

      <View style={{ flex: 20 }}>
        <Text style={styles.textHead}>Customer:</Text>
      </View>
      <View style={{ flex: 20 }}>
        <Text style={styles.textHead}>Time: </Text>
      </View>
      <View style={{ flex: 20 }}>
        <Text style={styles.textHead}>Sale:</Text>
      </View>
      <View style={{ flex: 23 }}>
        <Text style={styles.textHead}>Collection:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    backgroundColor: "#efefef",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 15,
    margin: 2
  },
  text: {
    fontWeight: "300",
    fontSize: 10
  },
  textHead: {
    fontWeight: "300",
    fontSize: 8
  }
});
