import { Ionicons } from "@expo/vector-icons"
import { StyleSheet } from "react-native"
import GlobalStyles from "../../constants/GlobalStyles"

const FavIcon = ({ name, size, onPress }) => {
    return (
        <Ionicons name={name} size={size} onPress={onPress} style={styles.starIcon} />
    )
}

export default FavIcon

export const styles = StyleSheet.create({
    starIcon: {
        color: GlobalStyles.COLORS.SummerSmith_PINK,
        textAlign: "right",
        paddingRight: 6,
        marginTop: -10,
    },
})
