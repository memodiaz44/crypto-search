import { createSlice, PayloadAction } from "@reduxjs/toolkit";




const coinSlice = createSlice({
  name: 'coins',
  initialState: {
    currency: 'USD'

  },
  reducers: {
    setAllCoins: (state, action) => {
      state.currency = action.payload

    },
  },
});

export const {setAllCoins} = coinSlice.actions;
export default coinSlice.reducer;