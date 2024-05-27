import { FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { saveToStorage } from "../store/favoritesSlice"
import GlobalStyles from "../constants/GlobalStyles"
import { SearchInput } from "../components"
import { CharacterItem } from "../components/characterList"

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
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("Favorites");
            const favList = jsonValue != null ? JSON.parse(jsonValue) : null
            dispatch(saveToStorage(favList))
        } catch (e) {
            console.log("getData hatası:", e)
        }
    }

    useEffect(() => {
        if (favoritesList.length === 0) {
            getData()
        }
    }, [])

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