import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {XMarkIcon} from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsLists } from '../App'
import {useRoute, RouteProp} from '@react-navigation/native'
import {foodTypeFromBasket} from '../App'

type navigationType = NativeStackNavigationProp<StackParamsLists>

const Map = () => {

  const navigation = useNavigation<navigationType>()
  const route = useRoute<RouteProp<{params: {food: foodTypeFromBasket | undefined}}>>()

  return (
    <SafeAreaView style={tw`flex-1 bg-[#00CCBB]`}>
      <View style={tw`flex-row py-4 px-4 justify-between items-center`}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Basket', {food: undefined})}>
          <XMarkIcon color='white' size={30} />
        </TouchableOpacity>
        <Text style={tw`text-white text-base`}>Order Help</Text>
      </View>

      <View style={tw`bg-white shadow-md rounded-md mx-4 p-4 flex-row items-center z-50`}>
        <View>
          <Text style={tw`text-gray-500 text-base`}>Estimated Arrival</Text>
          <Text style={tw`font-bold text-3xl mt-1`}>45-55 Minutes</Text>
          <Progress.Bar indeterminate={true} color='#00CCBB' style={tw`mt-2`} height={7} />
          <Text style={tw`text-gray-400 mt-2`}>{`Your order at ${route.params.food?.title} is being prepared`}</Text>
        </View>
        <Image source={require('../assets/deliver.png')} style={tw`h-20 w-20`} />
      </View>

      <MapView
        initialRegion={{
        latitude: Number(route.params.food?.lati),
        longitude: Number(route.params.food?.long),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={tw`flex-1 z-0 mt-[-30]`}
      mapType='mutedStandard'
      >
        <Marker
          coordinate={{ 
            latitude :  Number(route.params.food?.lati), 
            longitude : Number(route.params.food?.long) }}
          title={route.params.food?.title}
          description={route.params.food?.description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>

      <View style={tw`bg-white p-4 flex-row justify-between items-center`}>
        <View style={tw`flex-row items-center`}>
          <Image source={require('../assets/naruto.jpg')} style={tw`h-11 w-11 rounded-full mr-2`} />
          <View style={tw`mb-1.5`}>
            <Text style={tw`font-bold text-lg`}>Naruto Uzumake</Text>
            <Text style={tw`text-gray-500`}>Your Rider</Text>
          </View>
        </View>
        <Text style={tw`font-bold text-[#00CCBB] text-lg`}>Call</Text>
      </View>
    </SafeAreaView>
  )
}

export default Map

const styles = StyleSheet.create({})