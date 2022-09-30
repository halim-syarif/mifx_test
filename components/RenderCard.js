import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
  } from "react-native";

import MatIcon from 'react-native-vector-icons/MaterialIcons';
import Rating from "./Rating";

export default function RenderCard ({ item }) {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.item}>
        <>
          <View style={[styles.row, styles.sticky]}>
            {
              item.out_of_stock ? (
                <Text style={styles.outStock}>Out Of Stock</Text>
              ) : (
                item.new ? (
                  <Text style={styles.newText}>New</Text>
                ) : (
                  <Text></Text>
                )
              )
            }
            <TouchableOpacity>
              {
                item.isFav ? (
                  <MatIcon name='favorite' size={20} color={'red'}/>
                ) : (
                  <MatIcon name='favorite-outline' size={20} />
                )
              }
            </TouchableOpacity>
          </View>
          <Image
            style={styles.tinyImage}
            source={{
              uri: item.image
            }}
          />
          <View style={styles.detail}>
            <Rating amount={item.rating}/>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.row}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.off}>{item.off}</Text>
            </View>
          </View>
        </>
      </TouchableOpacity>
    )
  }


const styles = StyleSheet.create({
    
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    categoryArea: {
      height: 50,
      marginRight: 15,
      marginBottom: 15
    }, 
    sticky: {
      width: '80%',
      position: 'absolute',
      top: 10,
      zIndex: 10
    },
    newText: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    outStock: {
      height: 20,
      fontSize: 10,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'red',
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 7,
      justifyContent: 'center'
    },
    tinyImage: {
      width: 130,
      height: 160,
      borderRadius: 15,
      resizeMode: 'stretch',
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
        width: 4,
        height: 2,
      },
      borderRadius: 2,
      shadowOpacity: 0.21,
      shadowRadius: 9.11,
      elevation: 3,
      borderRadius: 10,
      paddingVertical: 15,
      backgroundColor: '#fff',
      marginRight: 15,
      marginBottom: 15
    },
    detail: {
      width: '80%',
      alignContent: 'flex-start',
    },
    itemName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#65686B'
    },
    price: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    off: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#65686B'
    }
  });