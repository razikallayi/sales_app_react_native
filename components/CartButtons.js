import React from "react";

import { ButtonGroup } from "react-native-elements";
import { Text } from "react-native";

const component1 = () => <Text>Hello</Text>;
const component2 = () => <Text>World</Text>;
const component3 = () => <Text>ButtonGroup</Text>;

export class CardButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = [
      { element: component1 },
      { element: component2 },
      { element: component3 }
    ];
    const { selectedIndex } = this.state;
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        buttonStyle={{
          borderRadius: 20,
          margin: 0
        }}
        containerBorderRadius={20}
        innerBorderStyle={{ width: 0 }}
        outerBorderStyle={{ width: 0 }}
        containerStyle={{
          padding: 0,
          borderWidth: 0,
          margin: 0,
          backgroundColor: "red"
        }}
      />
    );
  }
}
