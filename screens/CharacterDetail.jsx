import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import CharacterCard from "../components/CharacterCard"
import axios from "axios"

const CharacterDetail = ({ navigation, route }) => {
    const [characterDetailedInfo, setCharacterDetailedInfo] = useState()

    const characterAPI = route.params.characterID

    const handleData = async () => {
        const response = await axios.get(characterAPI)
        setCharacterDetailedInfo(response.data)
    }
    useEffect(() => {
        handleData()
    }, [])
    console.log(characterDetailedInfo)


    return (
        <View style={styles.container}>
            {characterDetailedInfo &&
                <CharacterCard {...characterDetailedInfo} />
            }
        </View>
    )
}

export default CharacterDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})