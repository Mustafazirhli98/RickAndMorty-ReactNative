import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Episodes from "../screens/Episodes"
import FavoriteCharacters from "../screens/FavoriteCharacters"
import GlobalStyles from "../constants/GlobalStyles"

const TopTabs = () => {

    const TopTabs = createMaterialTopTabNavigator()

    return (
        <TopTabs.Navigator screenOptions={{
            tabBarAndroidRipple: false,
            tabBarContentContainerStyle: {
                backgroundColor: GlobalStyles.COLORS.Evil_Morty_Siyah
            },
            tabBarActiveTintColor: GlobalStyles.COLORS.RickSanchez_GREEN,
            tabBarInactiveTintColor: GlobalStyles.COLORS.Birdperson_GREY,
            tabBarItemStyle: {
                paddingTop: 50
            },
        }}>
            <TopTabs.Screen name="Episodes" component={Episodes} />
            <TopTabs.Screen name="Favorites" component={FavoriteCharacters} />
        </TopTabs.Navigator>
    )
}

export default TopTabs