import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Header from './Header'
import Category from './Category'
import tw from 'twrnc'
import First from './RestruantsList/First'
import Second from './RestruantsList/Second'
import { gql, useQuery } from '@apollo/client'
import Third from './RestruantsList/Third'
import { FoodContent } from './Content'
import { useNavigation } from '@react-navigation/native'

export type foodDataType = {
    id: number
    title: string;
    type: string[]
    address: string[]
    rating: number;
    image: string
}

const QUERY_FOOD = gql`
    query GetFood {
      foods {
        id
        title
        type
        image
        rating
        address
      }
    }
`

const Home = () => {

  const [foodData, setFoodData] = React.useState<foodDataType | []>([])

  const value = React.useContext(FoodContent)

  const navigation = useNavigation()

  const {data, loading, error, refetch} = useQuery(QUERY_FOOD)

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      value?.setBasket([])
    })
  }, [navigation])
   
  return (
    <SafeAreaView style={tw`flex-1 bg-white px-2`}>
      <StatusBar barStyle='dark-content' backgroundColor={'white'} />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Category />
        {!loading && 
          <View>
            <First data={data.foods.filter((item: foodDataType) => item.type.includes('Best Selling'))} />
            <Second data={data.foods.filter((item: foodDataType) => item.type.includes('Featured'))} />
            <Third data={data.foods.filter((item: foodDataType) => item.type.includes('Tasty Discounts'))} />
          </View>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})