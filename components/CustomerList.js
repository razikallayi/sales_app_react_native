import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { CustomerListHead, CustomerListItem } from "./CustomerListItem";

export default class CustomerList extends React.Component {
  render() {
    if (this.props.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ paddingTop: 20 }}>
        <CustomerListHead />
        <FlatList
          data={this.props.dataSource}
          renderItem={({ item, i }) => <CustomerListItem customer={item} />}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
