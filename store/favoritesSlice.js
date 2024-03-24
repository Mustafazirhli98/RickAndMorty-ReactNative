import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFavorite: false
}

const favoriteSlice = createSlice({
    initialState,
    name: "favoritesSlice",
    reducers: {
        addFavorite: () => {

        },
        removeFavorite: () => {

        },
        removeAll: () => {

        }

    }
})

export const { addFavorite, removeFavorite, removeAll } = favoriteSlice.actions
export default favoriteSlice.reducer