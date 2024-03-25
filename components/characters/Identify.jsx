import { Alert, StyleSheet, Text, View } from "react-native"
import FavIcon from "../Icon/FavIcon"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../../store/favoritesSlice"

const Identify = ({ name, gender, location, species, status, id, image }) => {


    const dispatch = useDispatch()

    const favoritesList = useSelector(state => state.favoritesSlice.favoriteList)
    const isMealFavorite = favoritesList.find(item => item.id === id);

    const favoritesHandler = () => {
        if (isMealFavorite) {
            Alert.alert("Uyarı!", `${name} isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?`, [
                { text: "Evet", style: "default", onPress: () => dispatch(removeFavorite(id)) },
                { text: "Hayır", style: "cancel" }
            ])

        } else {
            dispatch(addFavorite({ name, gender, location, species, status, id, image }))
        }
    }

    return (
        <View style={styles.identify}>
            <View style={styles.iconContainer}>
                <FavIcon name={isMealFavorite ? "star" : "star-outline"} size={30} onPress={favoritesHandler} />
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