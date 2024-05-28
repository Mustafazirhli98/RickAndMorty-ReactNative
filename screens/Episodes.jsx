import { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { get } from "../services/Service"
import ENDPOINTS from "../constants/EndPoints"
import GlobalStyles from "../constants/GlobalStyles"
import { EpisodeOverview, PaginationComponent, SearchInput } from "../components"
import LoadingOverlay from "../components/loading/LoadingOverlay"
import UseFilter from "../hooks/UseFilter"
import List from "../components/list/List"

const Episodes = ({ navigation }) => {
    const [episodeData, setEpisodeData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(3)
    const [isLoading, setIsLoading] = useState(true)
    const { filteredData, isSearchSuccess, checkFilter } = UseFilter(episodeData, "episode")

    const handleData = async () => {
        setIsLoading(true)
        const response = await get(ENDPOINTS.EPISODE_PAGE)
        setEpisodeData(response.results)
        setTotalPages(response.info.pages)
        setIsLoading(false)
    }
    useEffect(() => {
        handleData()
    }, [])

    const handleLoadMore = async () => {
        setCurrentPage(prev => prev + 1)
        const response = await get(ENDPOINTS.EPISODE_PAGE_NEXT + `${currentPage + 1}`)
        setEpisodeData(prev => [...prev, ...response.results])
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

    if (isLoading) {
        return <LoadingOverlay />
    }
    return (
        <View style={styles.container}>
            <SearchInput checkData={checkFilter} title={"wanna search some?"} />
            <List
                data={isSearchSuccess ? filteredData : episodeData}
                currentPage={currentPage}
                totalPages={totalPages}
                renderedItemHelper={renderedItemHelper}
                loadMore={handleLoadMore}
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