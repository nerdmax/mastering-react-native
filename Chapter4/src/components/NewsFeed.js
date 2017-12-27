import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ListView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  WebView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import SmallText from "./SmallText";
import NewsItem from "./NewsItem";
import * as globalStyles from "../styles/global";
export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title,
      initialLoading: false,
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.news),
      initialLoading: true,
      modalVisible: false,
      refreshing: false,
    };
  }
  onModalOpen = url => {
    this.setState({
      modalVisible: true,
      modalUrl: url,
    });
  };
  onModalClose = () => {
    this.setState({
      modalVisible: false,
    });
  };
  renderModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.onModalClose}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this.onModalClose}
            style={styles.closeButton}
          >
            <SmallText>Close</SmallText>
          </TouchableOpacity>
          <WebView scalesPageToFit source={{ uri: this.state.modalUrl }} />
        </View>
      </Modal>
    );
  };
  renderRow = (rowData, ...rest) => {
    const index = parseInt(rest[1], 10);
    return (
      <NewsItem
        onPress={() => this.onModalOpen(rowData.url)}
        style={styles.newsItem}
        index={index}
        {...rowData}
      />
    );
  };
  render() {
    const {
      listStyles = globalStyles.COMMON_STYLES.pageContainer,
      showLoadingSpinner,
    } = this.props;
    const { initialLoading, refreshing, dataSource } = this.state;
    return initialLoading && showLoadingSpinner ? (
      <View style={[listStyles, styles.loadingContainer]}>
        <ActivityIndicator animating size="small" {...this.props} />
      </View>
    ) : (
      <View style={styles.container}>
        <ListView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={this.refresh} />
          }
          enableEmptySections
          dataSource={dataSource}
          renderRow={this.renderRow}
          style={listStyles}
        />
        {this.renderModal()}
      </View>
    );
  }
}
NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  listStyles: View.propTypes.style,
  showLoadingSpinner: PropTypes.bool,
};
NewsFeed.defaultProps = {
  showLoadingSpinner: true,
};
const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR,
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
});
