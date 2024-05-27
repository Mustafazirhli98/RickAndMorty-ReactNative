import { FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import GlobalStyles from "../constants/GlobalStyles"
import { SearchInput } from "../components"
import { CharacterItem } from "../components/characterList"
import { storeFavList } from "../store/favoritesSlice"

const FavoriteCharacters = () => {

    const favoritesList = useSelector(state => state.favoritesSlice.favoriteList)
    const dispatch = useDispatch()

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
        const jsonValue = await AsyncStorage.getItem("Favorites")
        const storedFavList = jsonValue ? JSON.parse(jsonValue) : []
        dispatch(storeFavList(storedFavList))
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

    const checkData = (enteredText) => {
        const searchResult = favoritesList.filter(item =>
            item.name.toLowerCase() === enteredText.toLowerCase()
        )
        if (enteredText === "") {
            setFavData(favoritesList)
        } if (searchResult.length > 0) {
            setFavData(searchResult);
        }
    };

    return (
        <View style={styles.container} >
            {
                favoritesList.length > 0 ?
                    <>
                        <SearchInput checkData={checkData} title={"search maybe?"} />
                        <FlatList data={favoritesList} renderItem={renderedItemHelper} keyExtractor={item => item.id} />
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