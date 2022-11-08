import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {ChevronDownIcon, AdjustmentsVerticalIcon, UserIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const Header = () => {

  const [search, setSearch] = React.useState<string>('')

  return (
      <View style={tw`pb-3`}>
        <View style={tw`flex-row py-1 justify-between bg-white items-center pb-3`}>
          <View style={tw`flex-row items-center`}>
            <Image source={{uri: 'https://images.wallpapersden.com/image/download/anime-sasuke-uchiha_a25naGmUmZqaraWkpJRnZWltrWZqbGo.jpg'}} style={tw`h-8 w-8 rounded-full p-4 bg-gray-500 mr-2 mt-1`} />
            <View>
              <Text style={tw`text-gray-500 text-sm`}>Deliver now!</Text>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`font-bold text-xl mr-1`}>Current Location</Text>
                <ChevronDownIcon color='#00CCBB' size={19} style={tw`mt-1`} />
              </View>   
            </View>
          </View>
          <UserIcon color='#00CCBB' size={33} style={tw`mr-[2px]`} />     
        </View>
        <View style={tw`flex-row items-center bg-white`}>
          <View style={tw`bg-gray-200 p-4 h-12 justify-center items-center rounded-tl-md rounded-bl-md`}>
          <MagnifyingGlassIcon color='#7A7A7A' size={20} />
          </View>
          <TextInput placeholder='Restaurants and cuisines' selectionColor={'gray'} 
          keyboardType='default'  value={search} onChangeText={(text) => setSearch(text)}
          style={tw`w-[75%] bg-gray-200 rounded-tr-md rounded-br-md  h-12 text-black p-3 pl-0 mr-3`} />
          <AdjustmentsVerticalIcon  color='#00CCBB' size={25} />
          </View>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({})