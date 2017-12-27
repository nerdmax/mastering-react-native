import React, { Component } from "react";
import { TabBarIOS, Text, StatusBar, Alert, Vibration } from "react-native";
import NewsFeedContainer from '../containers/NewsFeedContainer';
import Search from "./Search";
import * as globalStyles from "../styles/global";

// Set the status bar for iOS to light
StatusBar.setBarStyle("light-content");

export default class HomeScreen extends Component {
  showBookmarkAlert() {
    Vibration.vibrate();
    Alert.alert(
      "Coming Soon!",
      "We're hard at work on this feature, check back in the near future.",
      [{ text: "OK", onPress: () => console.log("User pressed OK") }]
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      tab: "newsFeed",
    };
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          badge={4}
          systemIcon={"featured"}
          selected={this.state.tab === "newsFeed"}
          onPress={() => this.setState({ tab: "newsFeed" })}
        >
          <NewsFeedContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={"search"}
          selected={this.state.tab === "search"}
          onPress={() => this.setState({ tab: "search" })}
        >
          <Search />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={"bookmarks"}
          selected={this.state.tab === "bookmarks"}
          onPress={() => this.showBookmarkAlert()}
        >
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
