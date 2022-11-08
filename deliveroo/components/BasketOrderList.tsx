import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {XMarkIcon} from 'react-native-heroicons/outline'
import { FoodContent } from './Content'

type orderDataProps = {
    orderData: {
        id: number;
        name: string;
        image: string;
        price: number
        count: number
    }
}

const BasketOrderList = ({orderData}: orderDataProps) => {

    const value = React.useContext(FoodContent)

    const handleRemove = () => {
        if(orderData.count > 1) {
            value?.setBasket(pres => {
             return pres.map(data => {
                if(data.id === orderData.id) {
                  return {...data, count: data.count - 1}
                } else {
                  return data
                }
              })
            })
          }
          if(orderData.count === 1) {
            value?.setBasket(pres => {
              return pres.filter(data => data.id !== orderData.id)
            })
          }
    }

  return (
    <>
        <View style={tw`flex-row items-center justify-between py-4`}>
            <View style={tw`flex-row items-center mr-2 flex-1`}>
                <View style={tw`flex-row items-center mr-1`}>
                    <Text style={tw`text-[#00CCBB] text-lg`}>{orderData.count}</Text>
                    <XMarkIcon color={'#00CCBB'} size={15} style={tw`mt-1`} />
                </View>
                <View style={tw`flex-row items-center flex-1`}>
                    <Image source={{uri: orderData.image}} style={tw`w-14 h-14 rounded-full mr-1`} />
                    <Text numberOfLines={3} style={tw`text-base ml-1`}>{orderData.name}</Text>
                </View>
            </View>
            <View style={tw`flex-row ml-15`}>
                <Text style={tw`text-base mr-3`}>${orderData.price * orderData.count}</Text>
                <TouchableOpacity onPress={handleRemove}>
                    <Text style={tw`text-[#00CCBB] text-base`}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={tw`bg-gray-200 h-[0.4px] w-full`} />
    </>
  )
}

export default BasketOrderList

const styles = StyleSheet.create({})