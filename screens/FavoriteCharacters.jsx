import { FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import CharacterItem from "../components/characters/CharacterItem"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { saveToStorage } from "../store/favoritesSlice"

const FavoriteCharacters = () => {

    const favoritesList = useSelector(state => state.favoritesSlice.favoriteList)
    const storageData = useSelector(state => state.favoritesSlice.storageData)
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
            console.log(e)
        }
    }

    useEffect(() => {
        if (favoritesList.length === 0) {
            getData()
        }
    }, [])

    return (


        <View style={styles.container} >
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