import { Button, View } from "react-native"


const PaginationComponent = ({ handleLoadMore }) => {

    return (
        <View>
            <Button title="Next" onPress={handleLoadMore} />
        </View>
    )
}

export default PaginationComponent

