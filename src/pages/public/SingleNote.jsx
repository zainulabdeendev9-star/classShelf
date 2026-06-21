import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LuArrowLeft, LuFileText, LuFolderOpen, LuInfo, LuTrash2 } from "react-icons/lu";
import { fetchNoteById, fetchNotes } from "../../features/notes/notesSlice";
import { Button } from "../../ui";
import notesService from "../../features/notes/notesService";

export default function SingleNote() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const dispatch = useDispatch();
    const {
        selectedNote,
        selectedNoteStatus,
        selectedNoteError
    } = useSelector((state) => state.notes);
    const authStatus = useSelector(state => state.auth.authStatus);

    const note = selectedNote;
    

    useEffect(() => {
        if (!slug) return;
        dispatch(fetchNoteById(slug));
    }, [dispatch, slug]);

    const deleteNote = async () => {
        try {
            if (!note?.$id) return;
            const response = await notesService.deleteNote(note.$id);
            if(response){

                if (note.coverImageId) {
                    await notesService.deleteFile(note.coverImageId);
                }
                dispatch(fetchNotes())
                navigate('/admin/notes');
            }

            
        } catch (error) {
            throw error;
        }
    }

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

    if (!note) {
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

    const drivePreviewUrl = note.fileId
        ? `https://drive.google.com/file/d/${note.fileId}/preview`
        : null;

    return (
        <div className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-blue-600">
                            <LuFileText size={16} />
                            Note Details
                        </div>
                        <h1 className="mt-3 text-4xl font-bold text-slate-900">{note.name}</h1>
                        {note.subject && (
                            <p className="mt-2 text-sm text-slate-500">
                                {typeof note.subject === "object"
                                    ? `${note.subject.name || "Subject"} (${note.subject.code || note.subject.$id || "No code"})`
                                    : note.subject}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Button
                            as={Link}
                            to="/notes"
                            variant="secondary"
                            className="inline-flex items-center gap-2"
                        >
                            <LuArrowLeft size={16} />
                            Back to Notes
                        </Button>
                        {authStatus && (
                            <>
                                <Button
                                    as={Link}
                                    to={`/admin/edit/${note.$id}`}
                                    variant="success"
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={deleteNote}
                                    className="inline-flex items-center gap-2"
                                >
                                    <LuTrash2 size={16} />
                                    Delete
                                </Button>
                            </>
                        )}
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <section className="space-y-6">
                        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                <LuInfo size={16} />
                                Metadata
                            </div>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">File Name</p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">{note.name}</p>
                                </div>
                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">File Type</p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">{note.type || "Unknown"}</p>
                                </div>
                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">Subject Name</p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">{note.subject?.name || "Uncategorized"}</p>
                                </div>
                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">Subject Code</p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">{note.subject?.code || note.subject?.$id || "Not provided"}</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                <LuFolderOpen size={16} />
                                Notes File
                            </div>
                            {note.description ? (
                                <p className="mt-4 leading-7 text-slate-600">{note.description}</p>
                            ) : (
                                <p className="mt-4 leading-7 text-slate-600">No additional note description is available for this item.</p>
                            )}

                            {drivePreviewUrl ? (
                                <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
                                    <iframe
                                        title={note.name}
                                        src={drivePreviewUrl}
                                        className="block w-full max-w-full"
                                        style={{
                                            width: "100%",
                                            height: "70vh",
                                            minHeight: 420,
                                            maxWidth: "100%"
                                        }}
                                        allow="autoplay; encrypted-media"
                                        loading="lazy"
                                    />
                                </div>
                            ) : (
                                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                                    <p className="text-slate-600">This note does not have a Google Drive file attached yet.</p>
                                </div>
                            )}
                        </div>
                    </section>

                    <aside className="space-y-6">
                        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                <LuInfo size={16} />
                                Quick Info
                            </div>
                            <ul className="mt-4 space-y-4 text-slate-700">
                                <li className="rounded-2xl bg-slate-50 p-4">
                                    <span className="block text-sm text-slate-500">Status</span>
                                    <span className="mt-1 block text-base font-semibold text-slate-900">{note.status || "Active"}</span>
                                </li>
                                <li className="rounded-2xl bg-slate-50 p-4">
                                    <span className="block text-sm text-slate-500">Preview Available</span>
                                    <span className="mt-1 block text-base font-semibold text-blue-600">{drivePreviewUrl ? "Yes" : "No"}</span>
                                </li>
                            </ul>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
}
