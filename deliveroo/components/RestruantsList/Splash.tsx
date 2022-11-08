import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsLists } from '../../App'
import {useRoute, RouteProp} from '@react-navigation/native'
import {foodTypeFromBasket} from '../../App'

type navigationType = NativeStackNavigationProp<StackParamsLists>

const Splash = () => {

    const navigation = useNavigation<navigationType>()
    const route = useRoute<RouteProp<{params: {food: foodTypeFromBasket | undefined}}>>()

    React.useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Map', {food: route.params.food})
      }, 3000)
    }, [])

  return (
    <View style={tw`flex-1 bg-[#00CCBB] justify-center items-center`}>
      <StatusBar backgroundColor='#00CCBB' />
      <Animatable.Image 
       source={require('../../assets/bicycle.gif')}
       animation='slideInUp'
       iterationCount={1}
       style={tw`h-96 w-96`}
      />
      <Animatable.Text animation='slideInUp' iterationCount={1}
      style={tw`font-bold text-white text-base mt-[-30]`}>
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color='white' style={tw`mt-10`} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})