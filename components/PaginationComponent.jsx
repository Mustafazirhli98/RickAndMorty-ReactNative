import { Pressable, StyleSheet, Text, View } from "react-native"
import GlobalStyles from "../constants/GlobalStyles"


const PaginationComponent = ({ handleLoadMore }) => {

    return (
        <View style={styles.container}>
            <Pressable title="Next" onPress={handleLoadMore} style={styles.button}>
                <Text style={styles.text}>Next</Text>
            </Pressable>
        </View>
    )
}

export default PaginationComponent


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        padding: 8,
        borderWidth: 1,
        backgroundColor: GlobalStyles.COLORS.Evil_Morty_Siyah,
        borderBlockColor: GlobalStyles.COLORS.RickSanchez_GREEN,
        width: "80%"
    },
    text: {
        textAlign: "center",
        color: GlobalStyles.COLORS.RickSanchez_GREEN,
        fontSize: 20
    }
})