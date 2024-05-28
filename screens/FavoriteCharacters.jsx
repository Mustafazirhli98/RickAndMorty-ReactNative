import { FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import GlobalStyles from "../constants/GlobalStyles"
import { SearchInput } from "../components"
import { storeFavList } from "../store/favoritesSlice"
import LoadingOverlay from "../components/loading/LoadingOverlay"
import UseFilter from "../hooks/UseFilter"
import CharacterItem from "../components/characterID/CharacterItem"

const FavoriteCharacters = () => {

    const favoritesList = useSelector(state => state.favoritesSlice.favoriteList)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { isSearchSuccess, filteredData, checkFilter } = UseFilter(favoritesList, "character")

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

    const getStoredItems = async () => {
        setIsLoading(true)
        const jsonValue = await AsyncStorage.getItem("Favorites")
        const storedFavList = jsonValue ? JSON.parse(jsonValue) : []
        dispatch(storeFavList(storedFavList))
        setIsLoading(false)
    }
    const storeItem = async () => {
        await AsyncStorage.setItem("Favorites", JSON.stringify(favoritesList))
    }

    useEffect(() => {
        getStoredItems()
    }, [])

    useEffect(() => {
        storeItem()
    }, [favoritesList])

    if (isLoading) {
        return <LoadingOverlay />
    }
    return (
        <View style={styles.container} >
            {
                favoritesList.length > 0 ?
                    <>
                        <SearchInput checkData={checkFilter} title={"search maybe?"} />
                        <FlatList
                            data={isSearchSuccess ? filteredData : favoritesList}
                            renderItem={renderedItemHelper}
                            keyExtractor={item => item.id}
                        />
                    </>
                    :
                    <View style={styles.noDataContainer}>
                        <Text style={styles.noDataText}>there are no fav yet.</Text>
                    </View>
            }
        </View>
    )
}

export default FavoriteCharacters

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.COLORS.BethSmith_YELLOW
    },
    noDataContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    noDataText: {
        fontSize: 20
    }
})