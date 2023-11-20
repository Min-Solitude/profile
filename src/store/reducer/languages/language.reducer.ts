import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Language } from "./language.type";

const initialState: Language = {
  changeLanguage: "en",
};

export const ChangeLanguage = createAsyncThunk(
  "language/changeLanguage",
  async (language: string) => {
    return language;
  }
);

const reducer = createSlice({
  name: "language",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ChangeLanguage.fulfilled, (state, action) => {
      state.changeLanguage = action.payload;
    });
  },
});

export const LanguageAction = reducer.actions;
export const LanguageReducer = reducer.reducer;
