import { FlatList, StyleSheet, View } from "react-native"
import PaginationComponent from "../PaginationComponent"

const List = ({ data, renderedItemHelper, currentPage, totalPages, loadMore, isSearchSuccess }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderedItemHelper}
                keyExtractor={(item, index) => index}
                ListFooterComponent={
                    (currentPage < totalPages) && !isSearchSuccess &&
                    <PaginationComponent handleLoadMore={loadMore} />
                }
            />
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        flex: 1
    }
})