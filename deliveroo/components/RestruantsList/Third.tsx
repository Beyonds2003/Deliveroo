import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import tw from 'twrnc'
import Card from '../Card'
import { dataProps } from './First'
import { foodDataType } from '../Home'

export type itemType = {
  item: foodDataType
}

const Third = ({data}: dataProps) => {

  return (
    <View>
      <View style={tw`flex-row items-center justify-between mt-3`}>
        <Text style={[tw`text-lg font-bold`, {fontFamily: 'roboto_md'}]}>Tasty Discounts</Text>
        <ArrowRightIcon color={'#00CCBB'} size={20} style={tw`mr-2`} />
      </View>
      <Text style={[tw`text-gray-400 text-sm`, {fontFamily: 'roboto'}]}>Every's been joining these juicy discounts!</Text>
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

export default Third

const styles = StyleSheet.create({})