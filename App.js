import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { StatusBar } from 'expo-status-bar';

import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

import { getCategory, getDataProduct } from './instance/instance';
import RenderCard from './components/RenderCard';
import CategoryTag from './components/CategoryTag';


export default function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function initState(){
      setLoading(true)
      let category = await getCategory()
      let products = await getDataProduct()

      setCategory(category)
      setProducts(products)
      setLoading(false)
    }
    
    initState()
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <View style={[styles.headers, styles.row]}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.circle}>
            <AntIcon name="arrowleft" size={20} />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Shoes</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.circle}>
          <Icon name="sliders" size={18} />
        </TouchableOpacity>
      </View>
      {
        loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
        ) : (
          <>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryArea}>
              {
                category.map(item => {
                  return (
                    <CategoryTag key={item.id} item={item}/>
                  )
                })
              }
            </ScrollView>
            <FlatList
              data={products}
              renderItem={(item) => RenderCard(item)}
              numColumns={2}
             />
          </>
        )
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Dimensions.get('window').height * 0.05,
    paddingBottom: Dimensions.get('window').height * 0.01,
    paddingLeft: 20,
    paddingRight: 5,
    backgroundColor: "#F5F5F5"
  },
  headers: {
    paddingVertical: 20,
    marginRight: 15,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  title: {
    justifyContent: 'center',
    marginLeft: 15
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  }, 
  categoryArea: {
    height: 50,
    marginRight: 15,
    marginBottom: 15
  }, 
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
});