import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import axios from "axios"
import CharacterItem from "../components/characterID/CharacterItem"

const CharacterDetail = ({ route }) => {
    const [characterDetailedInfo, setCharacterDetailedInfo] = useState()

    const characterAPI = route.params.characterAPI
    const handleData = async () => {
        const response = await axios.get(characterAPI)
        setCharacterDetailedInfo(response.data)
    }
    useEffect(() => {
        handleData()
    }, [])

    return (
        <View style={styles.container}>
            {characterDetailedInfo &&
                <CharacterItem {...characterDetailedInfo} />
            }
        </View>
    )
}

export default CharacterDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})