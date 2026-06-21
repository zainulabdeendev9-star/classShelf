import NoteCard from "./NoteCard";
import EmptyNotes from "./EmptyNotes";

const NotesGrid = ({ notes, isAdmin=false }) => {
    if (notes.length === 0) {
        return <EmptyNotes />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {notes.map((note) => (
                <NoteCard key={note.$id || note.id} note={note} isAdmin={isAdmin}/>
            ))}

        </div>
    );
};

export default NotesGrid;