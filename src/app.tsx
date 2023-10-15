import React from "react";

import {} from "react-native";

import { View, Text, StyleSheet, useColorScheme } from "react-native";

function app(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
        uyvjhdasxhjb
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignments: "center",
    justifyContent: "center"
  },
  whiteText: {
    color: "#FFFFFF"
  },
  darkText: {
    color: "#000000"
  }
});

export default app;
