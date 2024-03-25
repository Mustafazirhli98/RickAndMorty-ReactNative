import { FlatList, StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"
import CharacterItem from "../components/characters/CharacterItem"

const FavoriteCharacters = () => {

    const favoritesList = useSelector(state => state.favoritesSlice.favoriteList)

    const renderedItemHelper = (itemData) => {
        const item = itemData.item
        const data = {
            name: item.name,
            gender: item.gender,
            location: item.location,
            species: item.species,
            status: item.status,
            id: item.id,
            image: item.image,
        }

        return (
            <CharacterItem {...data} />
        )
    }
    return (
        <View style={styles.container}>
            {
                favoritesList.length > 0 ?
                    <FlatList data={favoritesList} renderItem={renderedItemHelper} keyExtractor={item => item.id} />
                    :
                    <View style={styles.noDataContainer}>
                        <Text>there are no fav yet.</Text>
                    </View>
            }
        </View>
    )
}

export default FavoriteCharacters

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noDataContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})