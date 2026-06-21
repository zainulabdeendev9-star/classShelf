import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotesSearch from "../../components/notes/NotesSearch";
import NotesGrid from "../../components/notes/NotesGrid";
import { fetchNotes } from "../../features/notes/notesSlice";

export default function AllNotes() {
    const dispatch = useDispatch();
    const { notes, status, error } = useSelector((state) => state.notes);
    const authStatus = useSelector(state => state.auth.authStatus)

    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("");
    const [fileType, setFileType] = useState("");

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchNotes());
        }
    }, [dispatch, status]);

    const categories = useMemo(() => {
        return [...new Set(notes.map(
            (note) => note.subject && typeof note.subject === 'object' 
            ? note?.subject?.$id
            : note?.subject
        )
            .filter(Boolean))];
    }, [notes]);

    const fileTypes = useMemo(() => {
        return [...new Set(notes.map((note) => note.type).filter(Boolean))];
    }, [notes]);

    const filteredNotes = useMemo(() => {
        const normalizedSearch = searchText.trim().toLowerCase();

        return notes.filter((note) => {
            const matchesSearch = normalizedSearch
                ? [note.name, note.subject, note.type, note.description]
                      .filter(Boolean)
                      .some((value) => value.toLowerCase().includes(normalizedSearch))
                : true;

            const matchesCategory = category ? note.subject === category : true;
            const matchesFileType = fileType ? note.type === fileType : true;

            return matchesSearch && matchesCategory && matchesFileType;
        });
    }, [notes, searchText, category, fileType]);

    const handleReset = () => {
        setSearchText("");
        setCategory("");
        setFileType("");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">All Notes</h1>
                <p className="text-gray-600">Search and filter class notes by category and file type.</p>
            </div>

            <NotesSearch
                searchText={searchText}
                category={category}
                fileType={fileType}
                categories={categories}
                fileTypes={fileTypes}
                onSearchTextChange={setSearchText}
                onCategoryChange={setCategory}
                onFileTypeChange={setFileType}
                onReset={handleReset}
            />

            {status === "loading" && (
                <div className="text-center py-16 text-gray-500">Loading notes...</div>
            )}

            {status === "failed" && (
                <div className="text-center py-16 text-red-600">
                    Unable to load notes. {error || "Please try again later."}
                </div>
                
            )}

            {status === "succeeded" && <NotesGrid notes={filteredNotes} isAdmin={authStatus}/>}
        </div>
    );
}

