import { motion } from "framer-motion";

function NotesLoader() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 208 }}
        transition={{ duration: 0.35 }}
        className="mb-10 h-10 rounded bg-gray-200"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: item * 0.04 }}
            className="rounded-xl border p-5"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-4 h-6 rounded bg-gray-200"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
              className="mb-2 h-4 rounded bg-gray-200"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="h-4 w-3/4 rounded bg-gray-200"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NotesLoader;