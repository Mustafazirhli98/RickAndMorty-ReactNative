import { Text } from "react-native"

const CharacterCard = ({ characterInfo }) => {
    return (
        <Text>{characterInfo.name}</Text>
    )
}

export default CharacterCard