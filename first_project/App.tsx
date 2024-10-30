import React from "react";
import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
} from "react-native";
import Apppro from "./Apppro";


export default function App() {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.whiteText}>Hello World!</Text>
            </View>
            <Apppro />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    whiteText: {
        color: "#FFFFFF"
    }
});
