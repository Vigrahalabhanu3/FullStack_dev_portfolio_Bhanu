import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
    {
        title: "Build Your Own Static Website",
        provider: "NXTwave",
        year: "2024",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1751294750/Screenshot_2025-06-30_201451_svxc91.png",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1751294750/Screenshot_2025-06-30_201451_svxc91.png",
    },
    {
        title: "Full Stack Dev",
        provider: "Coursera",
        year: "2023",
        image: "/certs/fullstack.png",
        link: "https://example.com/cert/fullstack",
    },
    {
        title: "Python for ML",
        provider: "IBM",
        year: "2024",
        image: "/certs/python.png",
        link: "https://example.com/cert/python",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.08, type: "spring", stiffness: 120 },
    }),
    hover: { scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" },
};

const modalBackdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.22 } },
    exit: { opacity: 0, transition: { duration: 0.18 } },
};

const modalContent = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 180, damping: 18 } },
    exit: { opacity: 0, y: 40, scale: 0.98, transition: { duration: 0.18 } },
};

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<any>(null);
    const [filterYear, setFilterYear] = useState("All");

    const years = Array.from(new Set(certifications.map((c) => c.year)));
    const filteredCerts =
        filterYear === "All"
            ? certifications
            : certifications.filter((c) => c.year === filterYear);

    return (
        <section className="section-container text-black">
            <motion.h2
                className="text-3xl font-bold mb-6 text-center text-blue-600"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                🎓 Certifications
            </motion.h2>

            {/* 🔽 Filter */}
            <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >
                <label className="font-semibold mr-3 text-gray-700">
                    Filter by Year:
                </label>
                <select
                    onChange={(e) => setFilterYear(e.target.value)}
                    className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 transition"
                >
                    <option>All</option>
                    {years.map((y) => (
                        <option key={y}>{y}</option>
                    ))}
                </select>
            </motion.div>

            {/* 📄 Cards */}
            <motion.div
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
            >
                <AnimatePresence>
                    {filteredCerts.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
                            onClick={() => setSelectedCert(cert)}
                            className="cursor-pointer rounded-lg overflow-hidden bg-white shadow-md border border-gray-100 transition"
                            layout
                        >
                            <motion.img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-48 object-cover"
                                initial={{ scale: 1.05 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                    {cert.title}
                                </h3>
                                <motion.p
                                    className="text-gray-600 text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.05 }}
                                >
                                    {cert.provider} — {cert.year}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* 🔍 Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                        variants={modalBackdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full"
                            variants={modalContent}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            layoutId={selectedCert.title}
                        >
                            <motion.button
                                className="absolute top-2 right-3 text-xl font-bold text-gray-700 hover:text-red-500"
                                onClick={() => setSelectedCert(null)}
                                whileTap={{ scale: 0.85, rotate: 15 }}
                                aria-label="Close"
                            >
                                ✖
                            </motion.button>
                            <motion.img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="w-full h-56 object-contain rounded mb-4"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                            />
                            <h3 className="text-2xl font-bold text-blue-600 mb-2">
                                {selectedCert.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {selectedCert.provider} — {selectedCert.year}
                            </p>
                            <a
                                href={selectedCert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800 transition"
                            >
                                🔗 View Certificate
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}