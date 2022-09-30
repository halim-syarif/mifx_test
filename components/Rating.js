import React from "react"
import {
    View,
    StyleSheet,
  } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Rating ({ amount }) {
    const full = new Array(Math.floor(amount)).fill(1)
    const half = amount % 1
    return (
      <View style={styles.rating}>
        {
          full.map((el, idx) => {
            return <Icon key={idx} name='star' size={14} color={'#FFC400'} style={{marginRight: 2}}/>
          })
        }
        {
          half ? (
            <Icon name='star-half-full' size={14} color={'#FFC400'} style={{marginRight: 2}}/>
          ) : null
        }
      </View>
    )
  }


const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})
