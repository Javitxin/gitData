import { createSlice }from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        loading: false,        
    },
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setUser, setLoading} = userSlice.actions;
export default userSlice.reducer;