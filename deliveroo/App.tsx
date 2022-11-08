import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font'
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import DetailPage from './components/DetailPage'
import { Content } from './components/Content';
import Basket from './components/Basket';
import Splash from './components/RestruantsList/Splash';
import Map from './components/Map';
import { dishItemType } from './components/DetailPage';

export type foodTypeFromBasket = {
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

export type StackParamsLists = {
  Home: undefined;
  Detail_Page: {id: number};
  Basket: {food: foodTypeFromBasket | undefined};
  Splash: {food: foodTypeFromBasket | undefined};
  Map: {food: foodTypeFromBasket | undefined}
}

export default function App() {

  const client = new ApolloClient({
  uri: 'https://deliveroo-api-23.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

  const Stack = createNativeStackNavigator<StackParamsLists>()

  const [loaded] = useFonts({
    'roboto_md': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto': require('./assets/fonts/Roboto-Regular.ttf')
  })

  return (
    <Content>
      {loaded && 
      <ApolloProvider client={client}>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen options={{animation: 'slide_from_right'}} name='Detail_Page' component={DetailPage} />
            <Stack.Screen options={{presentation: 'modal', animation: 'slide_from_bottom'}} name='Basket' component={Basket} />
            <Stack.Screen name='Splash' component={Splash} options={{animation: 'slide_from_bottom'}} />
            <Stack.Screen name='Map' component={Map} options={{animation: 'slide_from_bottom'}} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>}
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
