import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {StarIcon} from 'react-native-heroicons/solid'
import {MapPinIcon} from 'react-native-heroicons/outline'
import { foodDataType } from './Home'
import { itemType } from './RestruantsList/Second'
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {StackParamsLists} from '../App'

type navigationType = NativeStackNavigationProp<StackParamsLists>


const Card = ({item}: itemType) => {

  const navigation = useNavigation<navigationType>()

  const handleClick = () => {
    navigation.navigate('Detail_Page', {id: item.id})
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleClick}>
      <View style={tw`mr-3 mt-4 shadow-sm w-64 bg-white mb-2`}>
        <Image source={{uri: item.image}} resizeMode='stretch'
        style={tw`w-64 h-38`} />
        <View style={tw`px-3 pb-3`}>
          <Text style={[tw`font-bold text-[1.1rem] pt-2 ml-[2px]`, {fontFamily: 'roboto_md'}]}>{item.title}</Text>
          <View style={tw`flex-row mt-1 items-center`}>
              <StarIcon color={'green'} size={20} opacity={0.5} />
              <Text style={tw`text-green-500 ml-1 text-xs`}>{item.rating} .</Text>
              <Text style={tw`text-gray-500 text-xs`}> Offers</Text>
          </View>
          <View style={tw`flex-row mt-1 items-center`}>
              <MapPinIcon color={'green'} opacity={0.5} size={20} />
              <Text style={tw`text-gray-500 ml-1 text-xs`}>{item.address[0]} .</Text>
              <Text style={tw`text-gray-500 text-xs`}>{item.address[1]}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({})