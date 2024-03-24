import { createNativeStackNavigator } from "@react-navigation/native-stack"
import EpisodeDetail from "../screens/EpisodeDetail"
import CharacterDetail from "../screens/CharacterDetail"
import TopTabs from "./TopTabs"

const Stack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TopTabs} />
            <Stack.Screen name="Episode Detail" component={EpisodeDetail} />
            <Stack.Screen name="Character Detail" component={CharacterDetail} />
        </Stack.Navigator>
    )
}

export default Stack