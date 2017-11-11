import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import { DemoOnPress } from "./DemoOnPress";
import { DemoOnLayout } from "./DemoOnLayout";

export default class App extends React.Component {
  render() {
    console.log("TEST debug tool of chrome");
    return (
      <DemoOnPress />
      // <DemoOnLayout />
    );
  }
}

