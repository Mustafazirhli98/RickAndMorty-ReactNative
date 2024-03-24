import { Image, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const CharacterCard = ({ name, gender, location, species, status, type, image }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: image }} style={styles.image} resizeMode="stretch" />
            </View>
            <View style={styles.identify}>
                <View style={styles.iconContainer}>
                    <Ionicons name="star-outline" style={styles.starIcon} size={30} />
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
        </View>
    )
}

export default CharacterCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: "#ccc",
        margin: 10
    },
    imgContainer: {
        flex: 1
    },
    image: {
        height: 220,
        width: "100%"
    },
    identify: {
        justifyContent: "space-evenly",
        flex: 0.8
    },
    iconContainer: {
        textAlign: "center"
    },
    starIcon: {
        color: "#847e7e",
        textAlign: "right",
        padding: 5
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

