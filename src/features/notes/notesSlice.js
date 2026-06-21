import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import notesService from "./notesService";


const fetchNotes = createAsyncThunk(
    "notes/fetchNotes",
    async () => {
        const response = await notesService.listNotes();
        return response;
    }
)

const fetchNoteById = createAsyncThunk(
    "notes/fetchNoteById",
    async (noteId, { rejectWithValue }) => {
        try {
            const response = await notesService.getNote(noteId);
            return response;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to fetch note");
        }
    }
)

const initialState = {
    notes: [],
    selectedNote: null,
    status: "idle",
    selectedNoteStatus: "idle",
    error: null,
    selectedNoteError: null
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.notes = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || action.error.message;
            })
            .addCase(fetchNoteById.pending, (state) => {
                state.selectedNoteStatus = "loading";
                state.selectedNoteError = null;
            })
            .addCase(fetchNoteById.fulfilled, (state, action) => {
                state.selectedNoteStatus = "succeeded";
                state.selectedNote = action.payload;
            })
            .addCase(fetchNoteById.rejected, (state, action) => {
                state.selectedNoteStatus = "failed";
                state.selectedNoteError = action.payload || action.error.message;
            })
    }
})

export default notesSlice.reducer;
export { fetchNotes, fetchNoteById };