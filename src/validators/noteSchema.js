import { z } from "zod";

export const noteSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name is too long"),

  fileId: z
    .string()
    .trim()
    .min(1, "Drive File ID is required")
    .max(500, "Drive File ID is too long"),

  subject: z
    .string()
    .min(1, "Please select a subject"),

  type: z.enum(["PDF", "DOCX", "PPT", "IMAGE", "OTHER"], {
    errorMap: () => ({ message: "Select a valid file type" })
  }),

  status: z.enum(["active", "inactive"], {
    errorMap: () => ({ message: "Select a valid status" })
  }),

  file: z
    .any()
    .optional()
    .nullable()
    .refine(
      (file) => {
        const selectedFile = file instanceof FileList ? file[0] : file;
        return !selectedFile || selectedFile instanceof File;
      },
      { message: "Please choose a valid image file" }
    )
    .refine(
      (file) => {
        const selectedFile = file instanceof FileList ? file[0] : file;
        return !selectedFile || selectedFile.size <= 2 * 1024 * 1024;
      },
      { message: "Max size is 2MB" }
    )
    .refine(
      (file) => {
        const selectedFile = file instanceof FileList ? file[0] : file;
        return !selectedFile || ["image/png", "image/jpeg"].includes(selectedFile.type);
      },
      { message: "Only PNG or JPG allowed" }
    )
});