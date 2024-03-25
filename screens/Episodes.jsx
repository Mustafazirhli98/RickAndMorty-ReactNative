import { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { get } from "../services/Service"
import ENDPOINTS from "../constants/EndPoints"
import EpisodeOverView from "../components/EpisodeOverview"
import SearchInput from "../components/SearchInput"
import PaginationComponent from "../components/PaginationComponent"

const Episodes = ({ navigation }) => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)


    const handleData = async () => {
        const response = await get(ENDPOINTS.EPISODE_PAGE)
        setResults(response.results)
        console.log(response)
    }
    useEffect(() => {
        handleData()
    }, [])

    const handleLoadMore = async () => {
        const nextPage = currentPage + 1;
        if (nextPage <= 3) {
            setCurrentPage(nextPage);
            const response = await get(ENDPOINTS.EPISODE_PAGE_NEXT + nextPage);
            setResults([...results, ...response.results])
        }
    }
    const renderedItemHelper = (itemData) => {
        const item = itemData.item
        const handleEpisodeDetail = () => {
            navigation.navigate("EpisodeDetail", {
                episodeID: item.id
            })
        }
        return (
            <EpisodeOverView
                onPress={handleEpisodeDetail}
                name={item.name}
                airDate={item.air_date}
                episode={item.episode}
            />
        )
    }

    const checkData = (enteredText) => {
        const searchResult = results.filter(item =>
            (item.episode.toLowerCase() === enteredText.toLowerCase()) || (item.name.toLowerCase() === enteredText.toLowerCase()) || (item.air_date.toLowerCase() === enteredText.toLowerCase())
        )
        if (searchResult.length > 0) {
            setResults(searchResult)
        } else {
            handleData()
        }
    }

    return (
        <View style={styles.container}>
            <SearchInput checkData={checkData} />
            <FlatList
                data={results}
                renderItem={renderedItemHelper}
                keyExtractor={item => item.id}
                ListFooterComponent={currentPage < 3 && <PaginationComponent handleLoadMore={handleLoadMore} />}
            />
        </View>
    )
}

export default Episodes

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})