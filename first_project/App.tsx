import React from "react";
import {
    Text,
    SafeAreaView,
    View,
    Button,
    Alert,
} from "react-native";


export default function App() {
    return (
        <SafeAreaView>
            <View>
                <Text>Hello World!</Text>
            </View>
            <Button title="click me" onPress={() => {
                Alert.alert("button clicked")
            }} />
        </SafeAreaView>
    )
}
