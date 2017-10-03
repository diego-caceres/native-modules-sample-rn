import React from "react";
import { View, Text } from "react-native";
import { NativeModules } from "react-native";

class App extends React.Component {
  componentDidMount() {
    const MyModuleExample = NativeModules.MyModuleExample;
    MyModuleExample.show("Hi! Component just mount..", MyModuleExample.SHORT);
  }
  render() {
    return (
      <View>
        <Text> Hello World </Text>
      </View>
    );
  }
}
export default App;
