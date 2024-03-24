import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import ENDPOINTS from "../constants/EndPoints"
import { useEffect, useState } from "react"
import { get } from "../services/Service"
import { splitAPI } from "../utils/splitAPI"

const CharacterOverView = ({ character, onPress }) => {
    const [characterInfo, setCharacterInfo] = useState([])

    const handleData = async () => {
        const characterID = splitAPI(character)
        const response = await get(ENDPOINTS.CHARACTER + `/${characterID}`)
        setCharacterInfo(response)

    }
    useEffect(() => {
        handleData()
    }, [])

    return (
        <View style={styles.outerContainer}>
            <Pressable
                android_ripple={styles.ripple_android}
                style={({ pressed }) => [pressed ? styles.ripple_ios : null, styles.innerContainer]}
                onPress={onPress}
            >
                <View>
                    <Image source={{ uri: characterInfo.image }} style={styles.image} resizeMode="stretch" />
                    <Text style={styles.text}>{characterInfo.name}</Text>
                </View>
            </Pressable>
        </View >
    )
}

export default CharacterOverView

const styles = StyleSheet.create({
    outerContainer: {
        overflow: "hidden",
        alignItems: "center",
        flex: 1,
    },
    innerContainer: {
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 8,
    },
    image: {
        height: 200,
        width: 250,
    },
    text: {
        padding: 10,
        textAlign: "center"
    },
    ripple_android: {
        color: "#ccc"
    },
    ripple_ios: {
        opacity: Platform.OS === "ios" ? 0.25 : 1
    }
})