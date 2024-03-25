import { StyleSheet, TextInput, View } from "react-native"

const SearchInput = ({ checkData }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} caretHidden onChangeText={checkData} />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "black",
        color: "black",
        margin: 10,
        fontSize: 15,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },

})