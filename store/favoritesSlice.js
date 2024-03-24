import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteList: [],
}

const favoriteSlice = createSlice({
    initialState,
    name: "favoritesSlice",
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteList = state.favoriteList.filter(item => item !== action.payload);
        },
        removeFavorite: (state, action) => {
            state.favoriteList.push(action.payload)
        },
        removeAll: (state) => {
            state.favoriteList = []
        }

    }
})

export const { addFavorite, removeFavorite, removeAll } = favoriteSlice.actions
export default favoriteSlice.reducer