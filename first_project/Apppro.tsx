import { StyleSheet, Text, View, useColorScheme } from "react-native";

export default function (): JSX.Element {
    const isDarkMode = useColorScheme();
    return (
        <View style={styles.container}>
            <Text style={isDarkMode === "dark" ? styles.whiteText : styles.blackText}>This text is from app pro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    whiteText: {
        color: "#FFFFFF",
    },
    blackText: {
        color: "#000000"
    }
});
