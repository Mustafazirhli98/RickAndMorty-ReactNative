import { useEffect, useState } from "react"
import ENDPOINTS from "../constants/EndPoints"
import { get } from "../services/Service"
import { FlatList } from "react-native"
import CharacterCard from "../components/CharacterCard"

const CharacterDetail = ({ navigation, route }) => {
    const [characterDetailedInfo, setCharacterDetailedInfo] = useState([])

    const characterID = route.params.characterID
    const handleData = async () => {
        const response = await get(ENDPOINTS.CHARACTER + `/${characterID}`)
        setCharacterDetailedInfo(response);
    }

    useEffect(() => {
        handleData()
    }, [])

    const renderedItemHelper = (itemDetail) => {
        const item = itemDetail.item
        return (
            <CharacterCard {...item} />
        )
    }

    return (
        <FlatList data={characterDetailedInfo} renderItem={renderedItemHelper} keyExtractor={item => item.id} />
    )
}

export default CharacterDetail