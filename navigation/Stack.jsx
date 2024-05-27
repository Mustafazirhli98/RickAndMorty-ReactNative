import { createNativeStackNavigator } from "@react-navigation/native-stack"
import EpisodeDetail from "../screens/EpisodeDetail"
import CharacterDetail from "../screens/CharacterDetail"
import TopTabs from "./TopTabs"
import GlobalStyles from "../constants/GlobalStyles"

const Stack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: GlobalStyles.COLORS.RickSanchez_GREEN
        }}>
            <Stack.Screen
                name="Home"
                component={TopTabs}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: GlobalStyles.COLORS.Evil_Morty_Siyah
                    },
                    contentStyle: {
                        backgroundColor: "red"
                    }
                }}
            />
            <Stack.Screen
                name="EpisodeDetail"
                component={EpisodeDetail}
                options={{
                    title: "Characters",
                    headerStyle: {
                        backgroundColor: GlobalStyles.COLORS.Evil_Morty_Siyah
                    },
                    headerTintColor: GlobalStyles.COLORS.RickSanchez_GREEN,
                    contentStyle: {
                        backgroundColor: GlobalStyles.COLORS.RickSanchez_GREEN
                    }
                }} />
            <Stack.Screen
                name="CharacterDetail"
                component={CharacterDetail}
                options={{
                    title: "identity",
                    headerStyle: {
                        backgroundColor: GlobalStyles.COLORS.Evil_Morty_Siyah
                    },
                    headerTintColor: GlobalStyles.COLORS.JerrySmith_ORANGE,
                    contentStyle: {
                        backgroundColor: GlobalStyles.COLORS.JerrySmith_ORANGE
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default Stack