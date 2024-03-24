import { FlatList, Pressable, Text, View } from "react-native"
import ENDPOINTS from "../constants/EndPoints"
import { useEffect, useState } from "react"
import { get } from "../services/Service"
import CharacterCard from "./CharacterCard"

const CharacterOverView = ({ character, onPress }) => {
    const [characterInfo, setCharacterInfo] = useState([])

    const handleData = async () => {
        const parts = character.split("/");
        const characterID = parts[parts.length - 1]
        const response = await get(ENDPOINTS.CHARACTER + `/${characterID}`)
        setCharacterInfo(response)
    }
    useEffect(() => {
        handleData()
    }, [])


    return (
        <CharacterCard characterInfo={characterInfo} />
    )
}

export default CharacterOverView