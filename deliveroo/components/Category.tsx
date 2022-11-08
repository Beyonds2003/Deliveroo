import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Category = () => {
  return ( 
    <View style={tw`mb-5`}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={tw`w-23 h-23 bg-red-500 mr-2 rounded-md overflow-hidden relative`}>
          <Image source={require('../assets/offers.jpg')} resizeMode='stretch' style={tw`w-full h-full`} />
          <Text style={[tw`text-white absolute bottom-[2px] text-base left-1 font-medium`]}>Offers</Text>
        </View>
        <View style={tw`w-23 h-23 bg-red-500 mr-2 rounded-md overflow-hidden relative`}>
          <Image source={require('../assets/pizza.jpg')} resizeMode='stretch' style={tw`w-full h-full`} />
          <Text style={[tw`text-white absolute bottom-[2px] text-base left-1 font-medium`]}>Pizza</Text>
        </View>
        <View style={tw`w-23 h-23 bg-red-500 mr-2 rounded-md overflow-hidden relative`}>
          <Image source={require('../assets/burgar.jpg')} resizeMode='stretch' style={tw`w-full h-full`} />
          <Text style={[tw`text-white absolute bottom-[2px] text-base left-1 font-medium`]}>Burgar</Text>
        </View>
        <View style={tw`w-23 h-23 bg-red-500 mr-2 rounded-md overflow-hidden relative`}>
          <Image source={require('../assets/sushi.png')} resizeMode='stretch' style={tw`w-full h-full`} />
          <Text style={[tw`text-white absolute bottom-[2px] text-base left-1 font-medium`]}>Sushi</Text>
        </View>
        <View style={tw`w-23 h-23 bg-red-500 mr-2 rounded-md overflow-hidden relative`}>
          <Image source={require('../assets/salad.jpg')} resizeMode='stretch' style={tw`w-full h-full`} />
          <Text style={[tw`text-white absolute bottom-[2px] text-base left-1 font-medium`]}>Salad</Text>
        </View>
        <View style={tw`w-23 h-23 bg-[#f1c232] mr-2 rounded-md overflow-hidden relative`}>
          <Image source={require('../assets/ramen.jpg')} resizeMode='stretch' style={tw`w-full h-[85%]`} />
          <Text style={[tw`text-white absolute bottom-[2px] text-base left-1 font-medium`]}>Ramen</Text>
        </View>
      </ScrollView>
    </View> 
  )
}

export default Category

const styles = StyleSheet.create({})