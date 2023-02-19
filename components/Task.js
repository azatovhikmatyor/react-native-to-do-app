import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.circular}
        onPress={props.handleCompleteTask}
      >
        <View>
          <Text style={styles.xText}>x</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    position: "relative",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 25,
    height: 25,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 13,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
  },
  xText: {
    textAlign: "center",
    color: "red",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
});
