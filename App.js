/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * https://www.npmjs.com/package/react-native-drawer-menu
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Easing } from "react-native";
import Drawer from "./src/Drawer";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    var drawerContent = (
      <View style={styles.drawerContent}>
        <View style={styles.leftTop} />
        <View style={styles.leftBottom}>
          <View>
            <Text>Drawer Content</Text>
            <Text>Main One</Text>
            <Text>Main One</Text>
            <Text>Main One</Text>
            <Text>Main One</Text>
          </View>
        </View>
      </View>
    );
    // customize drawer's style (Optional)
    var customStyles = {
      drawer: {
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowRadius: 10
      },
      mask: {}, // style of mask if it is enabled
      main: {} // style of main board
    };
    return (
      <Drawer
        style={styles.container}
        drawerWidth={100}
        drawerContent={drawerContent}
        type={Drawer.types.Overlay}
        customStyles={{ drawer: styles.drawer }}
        drawerPosition={Drawer.positions.Right}
        onDrawerOpen={() => {
          console.log("Drawer is opened");
        }}
        onDrawerClose={() => {
          console.log("Drawer is closed");
        }}
        easingFunc={Easing.ease}
      >
        <View style={styles.content}>
          <Text>{Object.values(Drawer.positions).join(" ")}</Text>
          <Text>{Object.values(Drawer.types).join(" ")}</Text>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
