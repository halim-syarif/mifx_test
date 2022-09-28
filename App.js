import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialIcons';


export default function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getCategory()
    getDataProduct()
  }, [])

  const getCategory = async () => {
    setLoading(true)
    axios.get('https://fe.dev.dxtr.asia/api/category', {
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2I3YjIyMjlkZGU3ZWI3ZjI2OTI2NWQwOTVlZDYwZjQyNzlkYjFmMDhhNmZhZTJkNDM4Njk5Mjk3Njc0YjJjZWFiZjQ4ZTFjZjU2ODUwNTAiLCJpYXQiOjE2NjQzNDg1OTMsIm5iZiI6MTY2NDM0ODU5MywiZXhwIjoxNjk1ODg0NTkzLCJzdWIiOiI1NSIsInNjb3BlcyI6W119.IaiETViJ65eiorQoCdmHhw2Dq2YtjH3kcUCw2wfwAIe8YIhL11BJZG3CuANxWZn-2cIFUZh_D2SB3F6BsOKZ5yGU7Xq0nZPbH3eHrdPtFKGY6sLwM6xpV-VgL7RWGh1IhTG8l5K5V_HqIGwU_-Dl_jTfAYJxkrcAz3ZjDZx_Nbc4BjHm2C_GQA1WE7zdOFJEDKKxn0vLWR9DoE0QKe_x263tWOSSbi4Ubm7vChm0Ou3tsXC4FY7uDb_DDoX4iM0G_ZPZoeQuyXL7Ud63uACHKz9RamIBawxZEZbCyk8j7VTv8dIrfW7xvZvgpdD5xpg6zJNh-TWkz3T06QJwvR3nPYYul26DsMuolevdET7qLBY7nV6Xbc8piZpIyo5OqSTD-20QRA-AK59xFHKCjN07gB7flnJ_by9r0gYJixsk-kU__FvQjOP0HwuWKhS3S9d2RuX3RiRihwd1pAxGYa0gvHHo6sAhF8JrePlG-bAp83c2g9yCwy0eJO3MmDYnqK10QEpcO0wlie4W-KkN1BgMb3AHRQDUX9aP4U5f14GtADXc97i2qXKGLoVemH1A5A1R3XV_wJP_VooBlR-1YrSXH17d0EB_hGElRwQDsY__Kq7-stqUO1NbgdJ9e8pthc840uAfwR4yNRoSwZ0jR7_FfSWxZstRnVNJ4ocD93LbIi8"
      }
    }).then((response) => {
      setCategory(response.data)
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false)
    })
  }

  const getDataProduct = async () => {
    setLoading(true)
    axios.get('https://fe.dev.dxtr.asia/api/products', {
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2I3YjIyMjlkZGU3ZWI3ZjI2OTI2NWQwOTVlZDYwZjQyNzlkYjFmMDhhNmZhZTJkNDM4Njk5Mjk3Njc0YjJjZWFiZjQ4ZTFjZjU2ODUwNTAiLCJpYXQiOjE2NjQzNDg1OTMsIm5iZiI6MTY2NDM0ODU5MywiZXhwIjoxNjk1ODg0NTkzLCJzdWIiOiI1NSIsInNjb3BlcyI6W119.IaiETViJ65eiorQoCdmHhw2Dq2YtjH3kcUCw2wfwAIe8YIhL11BJZG3CuANxWZn-2cIFUZh_D2SB3F6BsOKZ5yGU7Xq0nZPbH3eHrdPtFKGY6sLwM6xpV-VgL7RWGh1IhTG8l5K5V_HqIGwU_-Dl_jTfAYJxkrcAz3ZjDZx_Nbc4BjHm2C_GQA1WE7zdOFJEDKKxn0vLWR9DoE0QKe_x263tWOSSbi4Ubm7vChm0Ou3tsXC4FY7uDb_DDoX4iM0G_ZPZoeQuyXL7Ud63uACHKz9RamIBawxZEZbCyk8j7VTv8dIrfW7xvZvgpdD5xpg6zJNh-TWkz3T06QJwvR3nPYYul26DsMuolevdET7qLBY7nV6Xbc8piZpIyo5OqSTD-20QRA-AK59xFHKCjN07gB7flnJ_by9r0gYJixsk-kU__FvQjOP0HwuWKhS3S9d2RuX3RiRihwd1pAxGYa0gvHHo6sAhF8JrePlG-bAp83c2g9yCwy0eJO3MmDYnqK10QEpcO0wlie4W-KkN1BgMb3AHRQDUX9aP4U5f14GtADXc97i2qXKGLoVemH1A5A1R3XV_wJP_VooBlR-1YrSXH17d0EB_hGElRwQDsY__Kq7-stqUO1NbgdJ9e8pthc840uAfwR4yNRoSwZ0jR7_FfSWxZstRnVNJ4ocD93LbIi8"
      }
    }).then((response) => {
      setProducts(response.data)
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false)
    })
  }

  const Rating = ({amount}) => {
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

  const RenderItem = ({ item }) => {
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
                    <TouchableOpacity key={item.id} style={styles.category}>
                      <Text key={item.id} style={styles.smallText}>{item.name}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
            <FlatList
              data={products}
              renderItem={RenderItem}
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
  smallText: {
    fontSize: 10,
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
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});