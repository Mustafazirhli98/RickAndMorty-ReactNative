import { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import ENDPOINTS from "../constants/EndPoints"
import { get } from "../services/Service"
import PaginationComponent from "../components/PaginationComponent"
import { CharacterOverView } from "../components"

const EpisodeDetail = ({ navigation, route }) => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [secondData, setSecondData] = useState();
    const episodeID = route.params.episodeID

    const handleData = async () => {
        const episodeResponse = await get(ENDPOINTS.EPISODE_PAGE + `/${episodeID}`);
        const totalCharacters = episodeResponse.characters.length;
        const firstPageEndIndex = Math.floor(totalCharacters / 2);
        const firstData = episodeResponse.characters.slice(0, firstPageEndIndex);
        const secondData = episodeResponse.characters.slice(firstPageEndIndex);
        setCharacters(firstData);
        setSecondData(secondData);
    }

    useEffect(() => {
        handleData()
    }, [])

    const handleLoadMore = () => {
        setCurrentPage(prev => prev + 1)
        setCharacters([...characters, ...secondData])
    }

    const renderedItemHelper = (itemData) => {
        const item = itemData.item

        const handleCharacterDetail = () => {
            navigation.navigate("CharacterDetail", {
                characterID: item
            })
        }
        return (
            <CharacterOverView character={item} onPress={handleCharacterDetail} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={characters}
                renderItem={renderedItemHelper}
                keyExtractor={item => item}
                ListFooterComponent={currentPage < 2 && <PaginationComponent handleLoadMore={handleLoadMore} />}
            />
        </View>
    )
}

export default EpisodeDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})