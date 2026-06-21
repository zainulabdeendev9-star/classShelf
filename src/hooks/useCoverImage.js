import { useEffect, useState } from "react";
import notesService from "../features/notes/notesService";

export const useCoverImage = (imageId) => {
    const [coverImageUrl, setCoverImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        const loadImage = async () => {
            if (!imageId) {
                if (isMounted) {
                    setCoverImageUrl("");
                    setError("");
                }
                return;
            }

            setIsLoading(true);
            setError("");

            try {
                const url = await notesService.getFile(imageId);
                if (isMounted) setCoverImageUrl(url);
            } catch (err) {
                if (isMounted) {
                    setError(err.message || "Failed to load cover image");
                    setCoverImageUrl("");
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        loadImage();

        return () => {
            isMounted = false;
        };
    }, [imageId]);

    return { coverImageUrl, isLoading, error };
};

export default useCoverImage;
