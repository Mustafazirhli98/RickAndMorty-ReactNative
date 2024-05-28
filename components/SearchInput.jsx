import { StyleSheet, TextInput, View } from "react-native"
import GlobalStyles from "../constants/GlobalStyles"

const SearchInput = ({ checkData, title }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={checkData}
                placeholder={title}
                placeholderTextColor={GlobalStyles.COLORS.Evil_Morty_Siyah} />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "black",
        color: "black",
        marginTop: 10,
        marginHorizontal: 10,
        marginBottom: 5,
        fontSize: 15,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8
    },

})