import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type basketType = {
    id: number;
    name: string;
    image: string;
    price: number
    count: number
}[]

type valueType = {
    basket: basketType | [];
    setBasket: React.Dispatch<React.SetStateAction<basketType | []>>
}

type providerProps = {
    children: React.ReactNode
}

const FoodContent = React.createContext<valueType | null>(null)

const Content = ({children}: providerProps) => {

  const [basket, setBasket] = React.useState([] as basketType)

  return (
    <FoodContent.Provider value={{basket, setBasket}}>
        {children}
    </FoodContent.Provider>
  )
}

export {Content, FoodContent}

const styles = StyleSheet.create({})