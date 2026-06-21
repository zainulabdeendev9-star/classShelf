import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import subjectsService from "./subjectsService";


const fetchSubjects = createAsyncThunk(
    "subjects/fetchSubjects",
    async () => {
        const response = await subjectsService.getSubjects();
        return response;
    }
)

const initialState = {
    subjects: [],
    subjectsStatus: "idle",
    subjectsError: null,
}

const subjectsSlice = createSlice({
    name: 'subjects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubjects.pending, (state) => {
                state.subjectsStatus = "loading";
                state.subjectsError = null;
            })
            .addCase(fetchSubjects.fulfilled, (state, action) => {
                state.subjectsStatus = "succeeded";
                state.subjects = action.payload;
            })
            .addCase(fetchSubjects.rejected, (state, action) => {
                state.subjectsStatus = "failed";
                state.subjectsError = action.payload || action.subjectsError.message;
            })
    }
})

export default subjectsSlice.reducer;
export { fetchSubjects };