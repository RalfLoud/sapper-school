// components/VideoModal.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function VideoModal({ videoId, onClose }) {
  return (
    <AnimatePresence>
      {videoId && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-3xl aspect-video"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
            <button
              onClick={onClose}
              className="absolute -top-6 right-0 text-white text-4xl font-bold"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}