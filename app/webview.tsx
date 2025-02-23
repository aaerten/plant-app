import { StyleSheet, View } from "react-native";
import React from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import WebView from "react-native-webview";

const Webview = () => {
  const selectedItem = useSelector(
    (state: RootState) => state.app.selectedItem
  );

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: selectedItem?.uri }}
        style={styles.webviewContainer}
      />
    </View>
  );
};

export default Webview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    flex: 1,
  },
});
