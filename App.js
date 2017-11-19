import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TabBarIOS,
} from "react-native";

import { DemoOnPress, DemoOnLayout } from "./Chapter3/Chapter3";

import NewsFeed from "./src/components/NewsFeed";
import HomeScreen from "./src/components/HomeScreen";

export default class App extends React.Component {
  render() {
    console.log("TEST debug tool of chrome");
    return (
      // <DemoOnPress />
      // <DemoOnLayout />
      // <NewsFeed />
      <HomeScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    borderStyle: "solid",
    borderColor: "#d5d5d5",
    borderWidth: 1,
    backgroundColor: "#eee",
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
  },
  btnPrimary: {
    backgroundColor: "#60b044",
    borderColor: "#5ca941",
  },
  core: {
    borderStyle: "solid",
    borderColor: "#d5d5d5",
    borderWidth: 1,
    backgroundColor: "#eee",
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
  },
  primary: {
    backgroundColor: "#60b044",
    borderColor: "#355f27",
  },
  hairlineBorder: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  spacer: {
    marginBottom: 10,
  },
});
