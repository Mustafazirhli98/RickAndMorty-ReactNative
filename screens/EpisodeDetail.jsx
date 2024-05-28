import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import ENDPOINTS from "../constants/EndPoints"
import { get } from "../services/Service"
import { CharacterOverView, SearchInput } from "../components"
import LoadingOverlay from "../components/loading/LoadingOverlay"
import List from "../components/list/List"
import UseFilter from "../hooks/UseFilter"

const EpisodeDetail = ({ navigation, route }) => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [secondData, setSecondData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const episodeID = route.params.episodeID

    const handleData = async () => {
        setIsLoading(true)
        const episodeResponse = await get(ENDPOINTS.EPISODE_PAGE + `/${episodeID}`);
        const totalCharacters = episodeResponse.characters.length;
        const firstPageEndIndex = Math.floor(totalCharacters / 2);
        const firstData = episodeResponse.characters.slice(0, firstPageEndIndex);
        const secondData = episodeResponse.characters.slice(firstPageEndIndex);
        setCharacters(firstData);
        setSecondData(secondData);
        setIsLoading(false)
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
                characterAPI: item
            })
        }
        return (
            <CharacterOverView character={item} onPress={handleCharacterDetail} />
        )
    }

    if (isLoading) {
        return <LoadingOverlay />
    }
    return (
        <View style={styles.container}>
            <List
                data={characters}
                currentPage={currentPage}
                totalPages={2}
                renderedItemHelper={renderedItemHelper}
                loadMore={handleLoadMore}
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