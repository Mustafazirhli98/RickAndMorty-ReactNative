import { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { get } from "../services/Service"
import ENDPOINTS from "../constants/EndPoints"
import EpisodeOverView from "../components/EpisodeOverview"

const Episodes = ({ navigation }) => {
    const [results, setResults] = useState([]);

    const handleData = async () => {
        const response = await get(ENDPOINTS.EPISODE_PAGE)
        setResults(response.results)
    }
    useEffect(() => {
        handleData()
    }, [])



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
    return (
        <View style={styles.container}>
            <FlatList data={results} renderItem={renderedItemHelper} keyExtractor={item => item.id} />
        </View>
    )
}

export default Episodes

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})