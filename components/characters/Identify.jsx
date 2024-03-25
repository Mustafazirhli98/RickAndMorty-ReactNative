import { Alert, StyleSheet, Text, View } from "react-native"
import FavIcon from "../Icon/FavIcon"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite, saveToStorage } from "../../store/favoritesSlice"
import { AlertsConst } from "../../constants/AlertsConst"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"

const Identify = ({ name, gender, location, species, status, id, image }) => {
    const dispatch = useDispatch()
    const favoritesList = useSelector(state => state.favoritesSlice.favoriteList)
    const isFavorite = favoritesList.find(item => item.id === id);

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem("Favorites", JSON.stringify(value))
            dispatch(saveToStorage(value))
        } catch (e) {
            console.log("storeData hatası:", e)
        }
    }


    useEffect(() => {
        storeData(favoritesList)
    }, [favoritesList])

    const favoritesHandler = () => {
        if (!isFavorite) {
            dispatch(addFavorite({ name, gender, location, species, status, id, image }))
        } else {
            Alert.alert(
                AlertsConst.deleteAlert.title, `${name} ${AlertsConst.deleteAlert.body}`, [
                { text: AlertsConst.deleteAlert.button1, style: "default", onPress: () => dispatch(removeFavorite(id)) },
                { text: AlertsConst.deleteAlert.button2, style: "cancel" }
            ])
        }
    }

    return (
        <View style={styles.identify}>
            <View style={styles.iconContainer}>
                <FavIcon name={isFavorite ? "star" : "star-outline"} size={30} onPress={favoritesHandler} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    <Text style={styles.title}>Name:</Text> {name}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.title}>Gender:</Text> {gender}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.title}>Location:</Text> {location.name}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.title}>Status:</Text> {status}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.title}>Species:</Text> {species}
                </Text>
            </View>
        </View>
    )
}

export default Identify

const styles = StyleSheet.create({
    identify: {
        justifyContent: "space-evenly",
        flex: 0.8,
        backgroundColor: "#ccc",
    },
    iconContainer: {
        textAlign: "center"
    },
    textContainer: {
        maxWidth: 150,
        paddingHorizontal: 8
    },
    text: {
        fontSize: 14,
        marginBottom: 10,
    },
    title: {
        fontWeight: "bold"
    },
})
