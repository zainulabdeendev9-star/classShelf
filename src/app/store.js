import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import notesReducer from "../features/notes/notesSlice";
import subjectsReducer from "../features/notes/subjectsSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        notes: notesReducer,
        subjects: subjectsReducer,
    }
})

export default store;