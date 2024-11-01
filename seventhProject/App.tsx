import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


export default function App() {
    const [currentState, setCurrentState] = useState<string[][]>([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [gameWon, setGameWon] = useState<boolean>(false);
    const [winner, setWinner] = useState<"X" | "O" | "">("");
    const [moves, setMoves] = useState<number>(0);
    const [currentMove, setCurrentMove] = useState<"X" | "O">("X");

    const gameOver = (moveDoneBy: "O" | "X") => {
        if (moveDoneBy == "X") {
            setCurrentMove("O");
        } else {
            setCurrentMove("X");
        }
        // check rows
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (currentState[row][col] != moveDoneBy) {
                    break;
                } else if (col == 2 && currentState[row][col] == moveDoneBy) {
                    // found a winner
                    setGameWon(true);
                    setWinner(moveDoneBy);
                    setCurrentState([
                        ["", "", ""],
                        ["", "", ""],
                        ["", "", ""],
                    ]);
                    return;
                }
            }
        }
        // check cols
        for (let col = 0; col < 3; col++) {
            for (let row = 0; row < 3; row++) {
                if (currentState[row][col] != moveDoneBy) {
                    break;
                } else if (row == 2 && currentState[row][col] == moveDoneBy) {
                    // found a winner
                    setGameWon(true);
                    setWinner(moveDoneBy);
                    setCurrentState([
                        ["", "", ""],
                        ["", "", ""],
                        ["", "", ""],
                    ]);
                    return;
                }
            }
        }
        // check left to right diagonal
        if (currentState[0][0] == moveDoneBy && currentState[1][1] == moveDoneBy && currentState[2][2] == moveDoneBy) {
            setGameWon(true);
            setWinner(moveDoneBy);
            setCurrentState([
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]);
            return;
        }
        if (currentState[0][2] == moveDoneBy && currentState[1][1] == moveDoneBy && currentState[2][0] == moveDoneBy) {
            setGameWon(true);
            setWinner(moveDoneBy);
            setCurrentState([
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]);
            return;
        }
        setMoves((prev) => prev + 1);
        if (moves == 9) {
            setGameWon(true);
            setWinner("");
            setCurrentState([
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]);
        }
    }

    return (
        <View>
            <Text>Tic tac toe</Text>
            <View style={styles.padder}>
                {
                    currentState.map((row, index) => {
                        return <View key={index} style={styles.rower}> {
                            row.map((item, index2) => {
                                if (item == "") {
                                    return <Button title="NA" key={"" + index + index2} onPress={() => {
                                        let currentArr = currentState;
                                        currentArr[index][index2] = currentMove;
                                        gameOver(currentMove);
                                    }} />
                                } else {
                                    return <Button title={item} key={"" + index + index2} />
                                }
                            })
                        }
                        </View>
                    })
                }
            </View>
            {
                gameWon && winner == "" && (
                    <Text style={styles.whiter}>No one won</Text>
                )
            }
            {
                gameWon && (
                    <Text style={styles.whiter}>{winner} won</Text>
                )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    whiter: {
        color: "#FFFFFF"
    },
    padder: {
        padding: 20
    },
    rower: {
        flexDirection: "row"
    }
})
