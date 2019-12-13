import React from 'react';
import {
  View
} from "react-native";

export default function TabBarIcon(props) {
  return (
    <View style={{flexDirection:"row"}}>
            <Input
              borderless
              placeholder="Customer Name"
              style={{
                height: 35,
                width: 300,
                backgroundColor: "#EEE",
                marginLeft: 10,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
              }}
              placeholderTextColor={"#222"}
            />
            <Button
              title="Press me"
              color="#f194ff"
              onPress={() => Alert.alert("Button with adjusted color pressed")}
            />
          <View/>
  );
}
