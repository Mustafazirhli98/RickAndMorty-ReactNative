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
                    console.log(`Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden
çıkarmalısınız.`)
                } else state.favoriteList.push(action.payload)
            }
        },
        removeFavorite: (state, action) => {
            state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload)
        },
        storeFavList: (state, action) => {
            state.favoriteList = action.payload
        }
    }
})

export const { addFavorite, removeFavorite, storeFavList } = favoriteSlice.actions
export default favoriteSlice.reducer