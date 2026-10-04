import { motion } from "framer-motion";
import { Button } from "../../ui";
import { useNavigate } from "react-router-dom";
import useCoverImage from "../../hooks/useCoverImage";
import { LuBookOpen, LuFileText } from "react-icons/lu";

const NoteCard = ({ note, isAdmin, onDelete }) => {
  const navigate = useNavigate();
  const { coverImageUrl } = useCoverImage(note?.coverImageId);
  const subjectName =
    typeof note?.subject === "object" ? note.subject?.name : note?.subject;
  const fileType = note?.type?.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-linear-to-br from-gray-200 to-gray-300">
        {coverImageUrl ? (
          <motion.img
            src={coverImageUrl}
            alt={note.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full object-cover"
          />
        ) : (
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-400 to-blue-200"
          >
            <svg
              className="h-16 w-16 text-white opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </motion.div>
        )}
        {fileType && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-slate-900/75 px-2.5 py-1.5 text-[11px] font-bold tracking-wider text-white shadow-lg shadow-slate-900/20 backdrop-blur-md"
          >
            <LuFileText size={13} aria-hidden="true" />
            {fileType.toUpperCase()}
          </motion.span>
        )}
      </div>

      {/* Content Container */}
      <div className="flex grow flex-col px-5 py-4">
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
          {note.name}
        </h3>

        <div className="mb-4 flex flex-wrap gap-2">
          {subjectName && (
            <span className="inline-flex max-w-full items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800 shadow-sm shadow-blue-900/5">
              <LuBookOpen
                size={14}
                className="shrink-0 text-blue-600"
                aria-hidden="true"
              />
              <span className="truncate">{subjectName}</span>
            </span>
          )}
        </div>
      </div>

      {/* Button Container */}
      <div className="p-4">
        <Button
          onClick={() => {
            navigate(`/notes/${note.$id}`);
          }}
          variant="primary"
          fullWidth={true}
        >
          View File
        </Button>
      </div>
    </motion.div>
  );
};

export default NoteCard;
