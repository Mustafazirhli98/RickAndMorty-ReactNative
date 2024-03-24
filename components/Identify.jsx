import { StyleSheet, Text, View } from "react-native"
import FavIcon from "./Icon/FavIcon"
import { addFavorite, removeFavorite } from "../store/favoritesSlice"
import { useDispatch } from "react-redux"

const Identify = ({ shape, name, gender, location, species, status, id }) => {

    const dispatch = useDispatch()

    const favoritesHandler = () => {
        if (isMealFavorite) {
            dispatch(addFavorite(id))
        } else {
            dispatch(removeFavorite(id))
        }
    }
    return (
        <View style={styles.identify}>
            <View style={styles.iconContainer}>
                <FavIcon name={shape ? "star" : "star-outline"} size={30} onPress={favoritesHandler} />
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