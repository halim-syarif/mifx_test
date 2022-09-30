import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default function CategoryTag({item}) {
    return (
        <TouchableOpacity style={styles.category}>
          <Text key={item.id} style={styles.smallText}>{item.name}</Text>
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
  category: {
    maxHeight: 35,
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 3,
  },
  smallText: {
    fontSize: 10,
  },
})