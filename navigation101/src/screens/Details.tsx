import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'



type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">

export default function Details({ route, navigation }: DetailsProps) {
    const { productId } = route.params;
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Details</Text>
            <Text style={styles.smallText}>{productId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#FFFFFF"
    }
})
