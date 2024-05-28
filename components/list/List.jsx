import { FlatList, StyleSheet, View } from "react-native"
import PaginationComponent from "../PaginationComponent"

const List = ({ data, renderedItemHelper, currentPage,totalPages, loadMore }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderedItemHelper}
                keyExtractor={item => item.id}
                ListFooterComponent={currentPage < totalPages && <PaginationComponent handleLoadMore={loadMore} />}
            />
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        paddingTop:8,
        flex: 1
    }
})