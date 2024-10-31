import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
    const [randomBgColor, setRandomBgColor] = useState("#FFFFFF");
    const generateColor = () => {
        console.log("Clicked the random color generator");
        const hexRange = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += hexRange.charAt(Math.round(Math.random() * hexRange.length));
        }
        setRandomBgColor(color);
    }
    return (
        <>
            <StatusBar backgroundColor={"black"} />
            <View style={[styles.container, { backgroundColor: randomBgColor }]}>
                <TouchableOpacity onPress={generateColor}>
                    <View style={styles.actionBtn}>
                        <Text style={styles.actionBtnText}>Click me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    whiteText: {
        color: "#FFFFFF"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    actionBtn: {
        borderRadius: 12,
        backgroundColor: "#6A1B4D",
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    actionBtnText: {
        fontSize: 24,
        color: "#FFFFFF",
        textTransform: "uppercase"
    }
});
