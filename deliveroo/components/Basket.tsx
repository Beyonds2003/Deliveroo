import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {XCircleIcon} from 'react-native-heroicons/solid'
import { FoodContent } from './Content'
import BasketOrderList from './BasketOrderList'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsLists } from '../App'
import { RouteProp, useRoute } from '@react-navigation/native'
import { foodTypeFromBasket } from '../App'

type navigationType = NativeStackNavigationProp<StackParamsLists>

const Basket = () => {

    const value = React.useContext(FoodContent)
    const navigation = useNavigation<navigationType>()
    const params = useRoute<RouteProp<{params: {food: foodTypeFromBasket | undefined}}>>()

    let basketCount = 0
    let basketPrice = 0
    let addToBasket = value?.basket.map(data => basketCount = data.count + basketCount)
    let addBasketPrice = value?.basket.map(data => basketPrice = (data.count * data.price) + basketPrice)

  return (
    <View style={tw`flex-1`}>
      <View style={tw`w-full bg-white relative h-25 border-b-[0.2px] border-gray-400 justify-center items-center`}>
        <View>
            <Text style={tw`font-bold text-xl`}>Basket</Text>
            <Text style={tw`mt-1 text-gray-500 text-center`}>Nindo's</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} style={tw`absolute top-2 right-4`} >
            <XCircleIcon color={'#00CCBB'} size={45} />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row items-center justify-between bg-white mt-5 px-4 py-2`}>
        <View style={tw`flex-row items-center`}>
            <Image source={{uri: 'https://images.wallpapersden.com/image/download/anime-sasuke-uchiha_a25naGmUmZqaraWkpJRnZWltrWZqbGo.jpg'}} style={tw`h-9 w-9 rounded-full p-4 bg-gray-500 mr-2 mt-1`} />
            <Text style={tw`text-base ml-1`}>Deliver in 50-70 min</Text>
        </View>
        <Text style={tw`text-[#00CCBB] text-base`}>Change</Text>
      </View>

      <ScrollView style={tw`mt-5 bg-white pl-5 pr-4 flex-1`} showsVerticalScrollIndicator={false}>
        {value?.basket.map((data) => (
            <BasketOrderList key={data.id} orderData={data} />
        ))}
      </ScrollView>

      <View style={tw`mt-5 bg-white px-4 py-2`}>
        <View style={tw`flex-row justify-between mt-1`}>
          <Text style={tw`text-base text-gray-400`}>Subtotal</Text>
          <Text style={tw`text-base`}>${basketPrice}</Text>
        </View>
        <View style={tw`flex-row justify-between mt-1`}>
          <Text style={tw`text-base text-gray-400`}>Delivery Fee</Text>
          <Text style={tw`text-base`}>$5.99</Text>
        </View>
        <View style={tw`flex-row justify-between mt-1`}>
          <Text style={tw`text-base`}>Order Total</Text>
          <Text style={tw`text-base font-bold`}>${(basketPrice + 5.99).toFixed(2)}</Text>
        </View>
        <View style={tw`justify-center w-full items-center mt-3`}>
          <TouchableOpacity onPress={() => navigation.navigate('Splash', {food: params.params.food})} activeOpacity={0.7} style={tw`bg-[#00CCBB] w-full p-4 justify-center items-center rounded-md`}>
            <Text style={tw`text-white font-bold text-base`}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Basket

const styles = StyleSheet.create({})