import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RouteProp, useRoute } from '@react-navigation/native'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import {SafeAreaView} from 'react-native-safe-area-context'
import {QuestionMarkCircleIcon, ChevronRightIcon, MapPinIcon} from 'react-native-heroicons/outline'
import {StarIcon,  ArrowLeftIcon} from 'react-native-heroicons/solid'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {StackParamsLists} from '../App'
import MenuDish from './MenuDish'
import { FoodContent } from './Content'
import * as Progress from 'react-native-progress'

type routeProps = RouteProp<{params: {id: number}}>

export type dishItemType = {
    id: number
    name: string
    image: string
    price: number
    description: string
}

export type foodType = {
  food: {
    title: string;
    image: string;
    rating: number;
    address: string[];
    genre: string[]
    description: string;
    dishes: dishItemType[];
    lati: string;
    long: string
  }
}

type navigationProps = NativeStackNavigationProp<StackParamsLists>

const QUERY_FOOD_DETAILS = gql`
    query GetFood($foodId: ID!) {
      food(id: $foodId) {
        title
        image
        rating
        address
        genre
        description
        dishes {
          id
          name
          description
          image
          price
        }
        lati
        long
      }
}
`

const DetailPage = () => {

  const route  = useRoute<routeProps>()
  const navigation = useNavigation<navigationProps>()
  const paramsId = route.params.id
  const value = React.useContext(FoodContent)
  let basketCount = 0
  let basketPrice = 0
  let addToBasket = value?.basket.map(data => basketCount = data.count + basketCount)
  let addBasketPrice = value?.basket.map(data => basketPrice = (data.count * data.price) + basketPrice)

  const [fetchFood, {data, loading, error}] = useLazyQuery<foodType | undefined>(QUERY_FOOD_DETAILS)

  const foodData = data?.food

  React.useEffect(() => {
    fetchFood({
      variables: {
        foodId: paramsId
      }
    })
  }, [])

  return (
    <View  style={tw`flex-1 ${foodData ? 'bg-gray-200' : 'bg-white justify-center items-center'} relative`}>
      {foodData ?
      <ScrollView>
        {/* <StatusBar translucent backgroundColor='transparent' /> */}
        <SafeAreaView>
          {/* <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />  */}
          <Image source={{uri: foodData.image}} style={tw`w-full h-65`} />
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}
          style={tw`w-9 h-9 justify-center items-center bg-white absolute top-3 left-2 rounded-full`}>
            <ArrowLeftIcon color={'green'} opacity={0.5} size={20} />
          </TouchableOpacity>
          <View style={tw`px-4 bg-white`}>
            <Text style={tw`font-bold text-3xl pt-2`} >{foodData.title}</Text>
            <View style={tw`flex-row items-center mt-2`}>
              <StarIcon color={'green'} opacity={0.5} size={20} />
              <Text style={tw`text-gray-500 ml-1`}>{foodData.rating} .</Text>
              <Text style={tw`mr-1 text-gray-500`}>{foodData.address[foodData.address.length - 1]}</Text>
              <MapPinIcon color={'green'} opacity={0.5} size={20} />
              <Text style={tw`ml-1 text-gray-500`}>{foodData.address[0]}</Text>
            </View>
            <Text style={[tw`mt-3 text-gray-500`, {fontFamily: 'roboto'}]}>{foodData.description}</Text>
            <View style={tw`bg-slate-500 h-[0.5px] mt-4`} />
            <View style={tw`py-3 pl-1 flex-row justify-between border-b-[0.1px] items-center pb-4`}>
              <View style={tw`flex-row items-center`}>
                <QuestionMarkCircleIcon color={'gray'} size={20} style={tw`mt-[3px]`} />
                <Text style={tw`font-bold text-base ml-4`}>Have a food allergy?</Text>
              </View>
              <ChevronRightIcon size={20} color={'gray'} />
            </View>
          </View>
          <Text style={tw`font-bold text-xl px-4 py-4`}>Menu</Text>
          <View style={tw`${basketCount === 0 ? 'pb-2' : 'pb-23'} bg-white`}>
            {foodData.dishes.map((item: dishItemType) => (
              <MenuDish key={item.id} dish={item} orderCount={value?.basket.find(data => data.id === item.id) ?
                value?.basket.filter(data => data.id === item.id)[0].count : 0} />
            ))}
          </View>
        </SafeAreaView>
      
      </ScrollView> : 
      <View>
        <Progress.CircleSnail size={60} color={'#00CCBB'} indeterminate={true} />
      </View>
      }
      {basketCount > 0 && 
      <View style={tw`absolute bottom-3 w-full items-center`}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Basket', {food: foodData})}
        style={tw`bg-[#00CCBB] w-[90%] h-16 rounded-md justify-between px-3 flex-row items-center`}>
            <Text style={[tw`text-white font-bold text-lg px-2 py-1 rounded-md`, 
            {backgroundColor: "rgba(119, 119, 119, 0.5)"}]}>{basketCount}</Text>
            <Text style={tw`font-bold text-lg text-white`}>View Basket</Text>
            <Text style={tw`font-bold text-white text-lg`}>$ {basketPrice}</Text>
        </TouchableOpacity>
      </View>}
    </View>
  )
}

export default React.memo(DetailPage)

const styles = StyleSheet.create({})