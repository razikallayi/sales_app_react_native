import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Card } from "react-native-elements";
import { TabBar } from "../components/CardTabs";
import CustomerList from "../components/CustomerList";
import { Navbar } from "../components/Navbar";
import { throwStatement } from "@babel/types";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    return fetch("http://project-tracker.texol.webfactional.com/api.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            response: responseJson,
            dataSource: responseJson.customer,
            filteredCustomers: responseJson.customer,
            showOnlyVisited: false
          },
          this.filter
        );
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          dataSource: []
        });
        console.error(error);
      });
  }

  onChangeText = text => {
    this.setState(
      {
        searchText: text
      },
      this.filter
    );
  };

  onVisitedChange = () => {
    const showOnlyVisited = !this.state.showOnlyVisited;
    this.setState(
      {
        showOnlyVisited
      },
      this.filter
    );
  };

  filter = () => {
    const showOnlyVisited = this.state.showOnlyVisited;
    const searchText = this.state.searchText;
    this.setState({ filteredCustomers: this.state.dataSource });
    let data = this.state.dataSource;
    if (searchText) {
      data = data.filter(item => {
        return (
          item.cust_name.startsWith(searchText) || item.cust_id === searchText
        );
      });
    }
    if (showOnlyVisited) {
      data = data.filter(item => {
        return item.isVisited === 1;
      });
    }
    this.setState({
      filteredCustomers: data
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Navbar
          content={this.state.response}
          isLoading={this.state.isLoading}
        />
        <Card
          containerStyle={styles.cardContainer}
          wrapperStyle={{
            flexDirection: "row",
            justifyContent: "space-around",
            ...styles.cardWrapper
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <TextInput
              placeholder="Customer Name"
              style={styles.searchInput}
              onChangeText={text => this.onChangeText(text)}
              placeholderTextColor={"#222"}
            />
            <Button
              title={<Ionicons size={18} name={"md-search"} />}
              buttonStyle={styles.buttonStyle}
              onPress={this.filter}
            />
          </View>
          <TextInput
            placeholder="12:20 PM"
            style={styles.dateSearch}
            placeholderTextColor={"#222"}
          />

          <Button
            title={"Visited"}
            titleStyle={{
              fontSize: 12,
              fontWeight: "bold"
            }}
            buttonStyle={{
              ...styles.visitedButton,
              backgroundColor: this.state.showOnlyVisited ? "#4ebfe2" : "#888"
            }}
            onPress={this.onVisitedChange}
          />
        </Card>

        <Card
          containerStyle={{
            ...styles.cardContainer,
            paddingTop: 0,
            marginTop: 40,
            borderTopLeftRadius: 0
          }}
          wrapperStyle={{ ...styles.cardWrapper }}
        >
          <TabBar />
          <CustomerList
            isLoading={this.state.isLoading}
            dataSource={this.state.filteredCustomers}
          />
        </Card>

        <Card
          containerStyle={{
            ...styles.cardContainer,
            marginTop: 20
          }}
          wrapperStyle={{ ...styles.cardWrapper }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "#444"
            }}
          >
            Other Customers
          </Text>
          <CustomerList
            isLoading={this.state.isLoading}
            dataSource={this.state.filteredCustomers}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    marginTop: 20
  },
  cardContainer: {
    borderRadius: 20,
    padding: 10,
    shadowColor: "#DFDFDF",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1.0
  },
  cardWrapper: {
    borderRadius: 20
  },
  searchInput: {
    height: 30,
    minWidth: 120,
    fontSize: 12,
    padding: 10,
    backgroundColor: "#EFEFEF",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  dateSearch: {
    height: 30,
    fontSize: 12,
    paddingHorizontal: 20,
    paddingHorizontal: 15,
    backgroundColor: "#EEE",
    borderRadius: 20
  },
  buttonStyle: {
    backgroundColor: "#4ebfe2",
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderRadius: 0
  },
  visitedButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20
  }
});
