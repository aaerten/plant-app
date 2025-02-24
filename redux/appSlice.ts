import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "@/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AppState {
  onboardingCompleted: boolean;
  selectedItem: any;
  questions: any[];
  categories: any[];
  loading: boolean;
  error: string | null;
}

const initialState: AppState = {
  onboardingCompleted: false,
  selectedItem: null,
  questions: [],
  categories: [],
  loading: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk(
  "app/fetchQuestions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData("getQuestions");
      return response;
    } catch (error) {
      return rejectWithValue("Failed to fetch questions");
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "app/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData("getCategories");
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch categories");
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { completeOnboarding, setSelectedItem } = appSlice.actions;
export default appSlice.reducer;
