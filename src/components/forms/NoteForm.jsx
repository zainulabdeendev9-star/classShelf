import { zodResolver } from "@hookform/resolvers/zod";
import { noteSchema } from "../../validators/noteSchema";
import { useForm } from "react-hook-form";
import notesService from "../../features/notes/notesService";
import { FormField, FormProvider, Button } from "../../ui";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from "../../features/notes/subjectsSlice";
import useCoverImage from "../../hooks/useCoverImage";
import { fetchNotes } from "../../features/notes/notesSlice";

export default function NoteForm({ note }) {
    const { subjects, subjectsStatus, subjectsError } = useSelector((state) => state.subjects);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { coverImageUrl } = useCoverImage(note?.coverImageId);

    useEffect(() => {
        if (subjectsStatus === "idle") {
            dispatch(fetchSubjects());
        }
    }, [subjectsStatus, dispatch]);

    const fileTypes = [
        { value: "PDF", label: "PDF" },
        { value: "DOCX", label: "DOCX" },
        { value: "PPT", label: "PPT" },
        { value: "IMAGE", label: "IMAGE" },
        { value: "OTHER", label: "OTHER" },
    ];

    const subjectOptions = subjects.map((subject) => ({
        value: subject.$id || "",
        label: `${subject.name} (${subject.code})`
    }));

    const defaultValues = {
        name: note?.name || "",
        type: note?.type || fileTypes[0].value,
        subject: note?.subject?.$id || "",
        fileId: note?.fileId || "",
        file: null,
        status: note?.status || "active",
    };

    const submitHandler = async (formData) => {
        try {
            setLoading(true);
            setError(null);

            const { file, ...noteData } = formData;
            const selectedFile = file?.[0] || file;

            if (note) {
                const uploadedFile = selectedFile
                    ? await notesService.uploadFile({ file: selectedFile })
                    : null;

                if (uploadedFile && note.coverImageId) {
                    await notesService.deleteFile(note.coverImageId);
                }

                const updatedNote = await notesService.updateNote(note.$id, {
                    ...noteData,
                    coverImageId: uploadedFile ? uploadedFile.$id : note.coverImageId
                });

                if (updatedNote) {
                    navigate(`/notes/${updatedNote.$id}`);
                }
            } else {
                const uploadedFile = selectedFile
                    ? await notesService.uploadFile({ file: selectedFile })
                    : null;

                const newNote = await notesService.createNote({
                    ...noteData,
                    coverImageId: uploadedFile ? uploadedFile.$id : undefined,
                });

                if (newNote) {
                    dispatch(fetchNotes())
                    navigate(`/notes/${newNote.$id}`);
                }
            }
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const methods = useForm({
        defaultValues,
        resolver: zodResolver(noteSchema)
    });

    return (
        <FormProvider methods={methods} onSubmit={submitHandler}>
            <div className="p-6">
                <div>
                    <h1 className="text-2xl font-bold mb-4">{note ? "Edit Note" : "Create Note"}</h1>
                    <p className="text-gray-600 mb-6">{note ? "Edit your note details" : "Fill in the details to create a new note"}</p>
                </div>

                {error && (
                    <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {subjectsError && (
                    <div className="mb-4 rounded-md bg-yellow-50 p-3 text-sm text-yellow-700">
                        {subjectsError}
                    </div>
                )}

                <div className="flex bg-white p-6 rounded-lg shadow-md gap-6">
                    <div className="flex-1 space-y-4">
                        <FormField
                            name={"name"}
                            label={"Name"}
                            placeholder={"Enter note name"}
                        />
                        <FormField
                            name={"fileId"}
                            label={"File ID"}
                            placeholder={"Enter Drive file ID"}
                        />
                        <FormField
                            name={"type"}
                            label={"File Type"}
                            placeholder={"select file type"}
                            component="select"
                            options={fileTypes}
                        />
                        <FormField
                            name={"subject"}
                            label={"Subject"}
                            placeholder={subjectsStatus === "loading" ? "Loading subjects..." : "select subject"}
                            component="select"
                            options={subjectOptions}
                            disabled={subjectsStatus === "loading"}
                        />
                    </div>

                    <div className="w-64 flex-1">
                        <FormField
                            name={"file"}
                            label={"Upload Image"}
                            type={"file"}
                        />
                        <p className="text-sm text-gray-500 mt-2">Supported formats: JPG, PNG. Max size: 2MB.</p>

                        <div className="mt-4 rounded-md overflow-hidden">
                            {coverImageUrl ? (
                                <img
                                    src={coverImageUrl}
                                    alt="Cover"
                                    className="w-full h-40 object-cover rounded-md"
                                />
                            ) : (
                                <div className="flex h-40 items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500">
                                    No cover image
                                </div>
                            )}
                        </div>

                        <div className="mt-4">
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading}
                            >
                                {loading
                                    ? "Loading..."
                                    : note
                                        ? "Update Note"
                                        : "Create Note"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}