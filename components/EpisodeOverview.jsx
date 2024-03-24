import { Pressable, StyleSheet, Text, View } from "react-native"

const EpisodeOverView = ({ name, airDate, episode, onPress }) => {
    return (
        <View style={styles.outerContainer}>
            <Pressable
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.episode}>{episode}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.date}>{airDate}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default EpisodeOverView

const styles = StyleSheet.create({
    outerContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    innerContainer: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "red",
        width: "95%"
    },
    textContainer: {
        alignItems: "left",
        height: 35
    },
    name: {
        maxWidth: 150,
        fontWeight: "bold"
    },
    episode: {
        fontSize: 13
    },
    date: {
        textAlign: "right",
    }
})