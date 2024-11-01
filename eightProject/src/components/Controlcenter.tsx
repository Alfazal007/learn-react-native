import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from "react-native-vector-icons/MaterialIcons"

export default function ControlCenter() {
    const playBackState = usePlaybackState();
    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    }
    const skipToPrev = async () => {
        await TrackPlayer.skipToPrevious();
    }
    const togglePlayBack = async (playbackState: State) => {
        const currentTrack = await TrackPlayer.getActiveTrackIndex();
        if (currentTrack != null) {
            if (playBackState.state == State.Paused || playBackState.state == State.Ready) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrev}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            <Pressable onPress={() => togglePlayBack(playBackState.state as State)}>
                <Icon
                    style={styles.icon}
                    name={playBackState.state === State.Playing ? "pause" : "play-arrow"}
                    size={75} />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 56,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
});
