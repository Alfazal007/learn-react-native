import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addTrack, setUpPlayer } from '../musicPlayerService';

export default function App() {
    const [isPlayerReady, setIsPlayerReady] = useState(false);


    async function setUp() {
        let isSetup = await setUpPlayer();
        if (isSetup) {
            await addTrack();
        }
        setIsPlayerReady(isSetup);
    }



    useEffect(() => {
        setUp();
    }, []);



    if (!isPlayerReady) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }
    return (
        <View>
            <Text>App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
