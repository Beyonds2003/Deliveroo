import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { dishItemType } from './DetailPage'
import {PlusCircleIcon, MinusCircleIcon} from 'react-native-heroicons/solid'
import { FoodContent } from './Content'
import { useNavigation } from '@react-navigation/native'


type dishProps = {
    dish: dishItemType
    orderCount: number
}

const MenuDish = ({dish, orderCount}: dishProps) => {

  const value = React.useContext(FoodContent)
  const navigation = useNavigation()

  const [click, setClick] = React.useState<boolean>(false)

  let counts = orderCount

  const handleAddBusket = () => {
    counts = counts + 1
    value?.setBasket(pres => {
     const exit = pres.find(data => data.id === dish.id)
     if(exit) {
      return pres.map(data => {
        if(data.id === dish.id) {
          return {...data, count: data.count + 1}
        } else {
          return data
        }
      })
     } else {
      return [...pres, {id: dish.id, name: dish.name, image: dish.image, price: dish.price, count: counts}]
     }
    })
  }
  
  const handleMinusBusket = () => {
    if(counts > 1) {
      counts = counts - 1
      value?.setBasket(pres => {
       return pres.map(data => {
          if(data.id === dish.id) {
            return {...data, count: data.count - 1}
          } else {
            return data
          }
        })
      })
    }else if (counts === 1) {
      counts = counts - 1
      value?.setBasket(pres => {
        return pres.filter(data => data.id !== dish.id)
      })
    }
  }

  return (
    <>
      <TouchableOpacity activeOpacity={0.6} onPress={() => setClick(pres => !pres)} style={tw`px-4 bg-white flex-row justify-between items-center pt-5`}>
          <View style={tw`mb-2 flex-shrink`}>
              <Text style={tw`font-500 text-lg`}>{dish.name}</Text>
              <Text style={tw`text-gray-500 pt-1`}>{dish.description}</Text>
              <Text style={tw`text-gray-500 pt-1`}>${dish.price}</Text>
          </View>
          <Image style={tw`w-25 min-h-25 my-2 ml-3 rounded-md`}
          source={{uri: dish.image}} />
      </TouchableOpacity>
      {!click && <View  style={tw`bg-slate-500 h-[0.5px]`} />}
      {click && 
      <View style={tw`flex-row items-center bg-white px-3`}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAddBusket}>
          <PlusCircleIcon size={35} color='#00CCBB' />
        </TouchableOpacity>
          <Text style={tw`mx-2`}>{counts}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleMinusBusket}>
          <MinusCircleIcon size={35} color='#00CCBB' />
        </TouchableOpacity>
      </View>}
    </>
  )
}

export default React.memo(MenuDish)

const styles = StyleSheet.create({})