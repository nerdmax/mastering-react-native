import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export class DemoOnPress extends React.Component {
  render() {
    console.log("TEST debug tool of chrome");
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={[styles.core, styles.hairlineBorder, styles.spacer]}
          underlayColor="#efefef"
          activeOpacity={0.8}
          onPress={() => {
            return console.log("Pressed");
          }}
        >
          <Text>Default Hairline</Text>
        </TouchableHighlight>
      </View>
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
