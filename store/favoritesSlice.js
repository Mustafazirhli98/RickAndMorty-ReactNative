import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteList: [],
}

const favoriteSlice = createSlice({
    initialState,
    name: "favoritesSlice",
    reducers: {
        addFavorite: (state, action) => {
            if (!state.favoriteList.includes(action.payload)) {
                if (state.favoriteList.length === 10) {
                    console.log("maximum karakter 10 olmalı!")
                } else {
                    state.favoriteList.push(action.payload)
                }
            }
        },
        removeFavorite: (state, action) => {
            state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload)
        },
        removeAll: (state) => {
            state.favoriteList = []
        },
        saveToStorage: (state, action) => {
            state.favoriteList = action.payload
        }

    }
})

export const { addFavorite, removeFavorite, removeAll, saveToStorage } = favoriteSlice.actions
export default favoriteSlice.reducer