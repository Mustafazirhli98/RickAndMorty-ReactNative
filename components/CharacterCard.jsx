import { Image, Pressable, StyleSheet, Text, View } from "react-native"

const CharacterCard = ({ name, gender, location, species, status, type, image }) => {
    return (
        <Pressable>
            <View>
                <Image source={{ uri: image }} style={styles.image} />
                <View>
                    <Text>{name}</Text>
                    <Text>{gender}</Text>
                    <Text>{type ? type : "human"}</Text>
                    <Text>{location.name}</Text>
                    <Text>{status}</Text>
                    <Text>{species}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CharacterCard

const styles = StyleSheet.create({
    container: {

    },
    image: {
        height: 100,
        width: 100
    }
})

//location20 get işlemi ile "url": "https://rickandmortyapi.com/api/location/20"}
