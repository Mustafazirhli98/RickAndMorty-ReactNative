import { ActivityIndicator, StyleSheet, View } from "react-native"
import GlobalStyles from "../../constants/GlobalStyles"

const LoadingOverlay = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"xl"} color={GlobalStyles.COLORS.Evil_Morty_Siyah} />
        </View>
    )
}

export default LoadingOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.COLORS.RickSanchez_GREEN
    }
})