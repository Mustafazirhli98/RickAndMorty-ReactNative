import { Pressable, StyleSheet, Text, View } from "react-native"

const EpisodeOverView = ({ name, airDate, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
        >
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.date}>{airDate}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
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
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center",
        height: 35
    },
    name: {
        maxWidth: 150
    },
    date: {
        textAlign: "right",
    }
})