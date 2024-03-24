import { useEffect, useState } from "react"
import { FlatList } from "react-native"
import ENDPOINTS from "../constants/EndPoints"
import { get } from "../services/Service"
import CharacterOverView from "../components/CharacterOverView"
import { splitAPI } from "../utils/splitAPI"

const EpisodeDetail = ({ navigation, route }) => {
    const [characters, setCharacters] = useState([])
    const episodeID = route.params.episodeID

    const handleData = async () => {
        const episodeResponse = await get(ENDPOINTS.EPISODE_PAGE + `/${episodeID}`)
        setCharacters(episodeResponse.characters);
    }

    useEffect(() => {
        handleData()
    }, [])


    const renderedItemHelper = (itemData) => {
        const item = itemData.item

        const handleCharacterDetail = () => {
            const characterID = characters.map(item => splitAPI(item))
            navigation.navigate("CharacterDetail", {
                characterID: characterID
            })
        }
        return (
            <CharacterOverView character={item} onPress={handleCharacterDetail} />
        )
    }

    return (
        <FlatList data={characters} renderItem={renderedItemHelper} keyExtractor={item => item} />
    )
}

export default EpisodeDetail