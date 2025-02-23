import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AppState {
  onboardingCompleted: boolean;
  selectedItem: any;
}

const initialState: AppState = {
  onboardingCompleted: false,
  selectedItem: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.onboardingCompleted = true;
      AsyncStorage.setItem("onboardingCompleted", "true");
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { completeOnboarding, setSelectedItem } = appSlice.actions;
export default appSlice.reducer;
