import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';


export type RootStackParamList = {
    Home: undefined;
    Details: { productId: string };
}

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{
                    title: "Trending products"
                }} />
                <Stack.Screen name='Details' component={Details} options={{
                    title: "Details of the products"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

