import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        list: []
    },
    reducers: {
        setCharacterList: (state, action) => {
            state.list = action.payload;
        }
    }
})

export const { setCharacterList } = characterSlice.actions;
export default characterSlice.reducer

export const fetchAllCharacters = () => (dispatch) => {

    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
        dispatch(setCharacterList(response.data.results));
    }).catch((error) => console.log(error))
}