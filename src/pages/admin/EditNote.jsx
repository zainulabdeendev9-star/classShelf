import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNoteById } from '../../features/notes/notesSlice'
import NoteForm from '../../components/forms/NoteForm'
import { Button } from '../../ui'


export default function EditNote() {

        const { slug } = useParams();
        
        const dispatch = useDispatch();
        const {
            selectedNote,
            selectedNoteStatus,
            selectedNoteError
        } = useSelector((state) => state.notes);

        useEffect(() => {
            if (!slug) return;
        dispatch(fetchNoteById(slug));
        }, [slug, dispatch]);

        

        if (selectedNoteStatus === "loading") {
            return (
            <div className="container mx-auto px-4 py-16 text-center text-gray-600">
                Loading note details...
            </div>
        );
        }

        if (selectedNoteStatus === "failed") {
        return (
            <div className="container mx-auto px-4 py-16 text-center text-red-600">
                Unable to load note details. {selectedNoteError || "Please try again later."}
            </div>
        );
    }

    if (!selectedNote) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm text-center">
                    <h1 className="text-3xl font-bold mb-4">Note not found</h1>
                    <p className="text-gray-600 mb-6">
                        We could not find the note you are looking for. Try returning to the notes listing.
                    </p>
                    <Button
                        as={Link}
                        to="/notes"
                        variant="secondary"
                    >
                        Back to All Notes
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <NoteForm note={selectedNote} />
    )
}
