import { Image, StyleSheet, View } from "react-native"
import Identify from "./Identify"


const CharacterItem = ({ name, gender, location, species, status, id, image }) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: image }} style={styles.image} resizeMode="stretch" />
                </View>
                <Identify id={id} name={name} gender={gender} location={location} species={species} status={status} image={image} />
            </View>
        </View>
    )
}

export default CharacterItem

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
        elevation: 8,
        backgroundColor: "transparent",
    },
    imgContainer: {
        flex: 1
    },
    image: {
        height: 250,
        width: "100%"
    },
})
