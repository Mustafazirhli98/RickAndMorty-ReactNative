import { Image, StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"
import Identify from "./Identify"

const CharacterCard = ({ name, gender, location, species, status, image, id }) => {
    const favoritesList = useSelector(state => state.favoritesSlice.favoriteList)
    const isMealFavorite = favoritesList.includes(id)

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: image }} style={styles.image} resizeMode="stretch" />
                </View>
                <Identify shape={isMealFavorite} name={name} gender={gender} location={location} species={species} status={status} />
            </View>
        </View>
    )
}

export default CharacterCard

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
    },
    innerContainer: {
        flexDirection: "row",
        margin: 10,
        elevation: 4,
        padding: 10
    },
    imgContainer: {
        flex: 1
    },
    image: {
        height: 300,
        width: "100%"
    },
})

