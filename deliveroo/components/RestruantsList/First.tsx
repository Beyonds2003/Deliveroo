import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import tw from 'twrnc'
import Card from '../Card'
import { itemType } from './Second'

export type dataProps = {
  data: {
    id: number
    title: string;
    type: string[]
    address: string[]
    rating: number;
    image: string
  }[]
}

const First = ({data}: dataProps) => { 
 
  return (
    <View>
      <View style={tw`flex-row items-center justify-between mt-1`}>
        <Text style={[tw`text-lg font-bold`, {fontFamily: 'roboto_md'}]}>Best Selling</Text>
        <ArrowRightIcon color={'#00CCBB'} size={20} style={tw`mr-2`} />
      </View>
      <Text style={[tw`text-gray-400 text-sm`, {fontFamily: 'roboto'}]}>Why not support your local restaurants tonight!</Text>
      <View>
        <FlatList 
         showsHorizontalScrollIndicator={false}
         data={data}
         horizontal
         renderItem={({item}: itemType) => (
          <Card key={item.id} item={item} />
         )}
        />
      </View>
    </View>
  )
}

export default First

const styles = StyleSheet.create({})