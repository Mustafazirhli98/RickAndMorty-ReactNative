import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Episodes from "../screens/Episodes"
import FavoriteCharacters from "../screens/FavoriteCharacters"

const TopTabs = () => {

    const TopTabs = createMaterialTopTabNavigator()

    return (
        <TopTabs.Navigator screenOptions={{
            tabBarStyle: {
                marginTop: 30,
                padding: 5
            }
        }}>
            <TopTabs.Screen name="Episodes" component={Episodes} />
            <TopTabs.Screen name="Favorites" component={FavoriteCharacters} />
        </TopTabs.Navigator>
    )
}

export default TopTabs