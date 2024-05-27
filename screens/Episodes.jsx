import { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { get } from "../services/Service"
import ENDPOINTS from "../constants/EndPoints"
import GlobalStyles from "../constants/GlobalStyles"
import { EpisodeOverview, PaginationComponent, SearchInput } from "../components"

const Episodes = ({ navigation }) => {
    const [episodeData, setEpisodeData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(3)
    const [isSearching, setIsSearching] = useState(false)


    const handleData = async () => {
        const response = await get(ENDPOINTS.EPISODE_PAGE)
        setEpisodeData(response.results)
        setTotalPages(response.info.pages)
    }
    useEffect(() => {
        handleData()
    }, [])

    const handleLoadMore = async () => {
        setCurrentPage(prev => prev + 1)
        const response = await get(ENDPOINTS.EPISODE_PAGE_NEXT + `${currentPage + 1}`)
        setEpisodeData([...episodeData, ...response.results])
    }
    const renderedItemHelper = (itemData) => {
        const item = itemData.item
        const handleEpisodeDetail = () => {
            navigation.navigate("EpisodeDetail", {
                episodeID: item.id
            })
        }
        return (
            <EpisodeOverview
                onPress={handleEpisodeDetail}
                name={item.name}
                airDate={item.air_date}
                episode={item.episode}
            />
        )
    }

    const checkData = (enteredText) => {
        const searchResult = episodeData.filter(item =>
            (item.episode.toLowerCase() === enteredText.toLowerCase()) ||
            (item.name.toLowerCase() === enteredText.toLowerCase()) ||
            (item.air_date.toLowerCase() === enteredText.toLowerCase())
        )
        if (searchResult > 0) {
            setIsSearching(true)
            setEpisodeData(searchResult)
        } else {
            handleData()
            setIsSearching(false)
        }
    }
    return (
        <View style={styles.container}>
            <SearchInput checkData={checkData} title={"wanna search some?"} />
            <FlatList
                data={episodeData}
                renderItem={renderedItemHelper}
                keyExtractor={item => item.id}
                ListFooterComponent={((currentPage < totalPages) && !isSearching) && <PaginationComponent handleLoadMore={handleLoadMore} />}
            />
        </View>
    )
}

export default Episodes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.COLORS.Birdperson_GREY
    }
})