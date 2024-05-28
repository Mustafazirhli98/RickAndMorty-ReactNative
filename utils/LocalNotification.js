import * as Notification from "expo-notifications"
import { NotificationMessages } from "../constants/NotificationsMessages"

Notification.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldPlaySound: true,
            shouldSetBadge: true,
            shouldShowAlert: true
        }
    }
})

export const scheduleNotification = async () => {
    try {
        await Notification.scheduleNotificationAsync({
            content: {
                title: "Favori kutun doldu!",
                body: NotificationMessages.MaxFav,
                data: { deneme: "deneme" }
            },
            trigger: null,
        })
    } catch (error) {
        console.error(error)
    }

}
