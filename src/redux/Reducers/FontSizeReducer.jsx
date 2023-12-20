import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fSize:32
}

const FontSizeReducer = createSlice({
  name: 'FontSizeReducer',
  initialState,
  reducers: {
    changeFontSizeAction: (state,action) => {
        const {payload} = action;
        state.fSize += payload;
    }
  }
});

export const {changeFontSizeAction} = FontSizeReducer.actions

export default FontSizeReducer.reducer