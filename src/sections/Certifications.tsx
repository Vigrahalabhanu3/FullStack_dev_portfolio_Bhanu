import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar, ChevronDown, ExternalLink, X } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

interface Certification {
    title: string;
    provider: string;
    year: string;
    image: string;
    link: string;
}

const certifications: Certification[] = [
    {
        title: "Build Your Own Static Website",
        provider: "NXTwave",
        year: "2024",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1751294750/Screenshot_2025-06-30_201451_svxc91.png",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1751294750/Screenshot_2025-06-30_201451_svxc91.png",
    },
    {
        title: "Build Your Own Responsive Website",
        provider: "NXTwave",
        year: "2024",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1751297209/Screenshot_2025-03-20_100324_k1osrm.png",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1751297209/Screenshot_2025-03-20_100324_k1osrm.png",
    },
    {
        title: "Build Your Own Dynamic Web Application",
        provider: "NXTwave",
        year: "2025",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1771222364/WhatsApp_Image_2026-02-16_at_11.41.49_lz6wo0.jpg",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1771222364/WhatsApp_Image_2026-02-16_at_11.41.49_lz6wo0.jpg",
    },
    {
        title: "SQL Certification",
        provider: "NXTwave",
        year: "2024",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1751296180/Screenshot_2025-03-19_223342_wld48c.png",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1751296180/Screenshot_2025-03-19_223342_wld48c.png",
    },
    {
        title: "Python Certification",
        provider: "NXTwave",
        year: "2025",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/e_background_removal/c_crop,ar_4:3,f_png/v1771221576/Screenshot_2026-02-16_at_11.28.15_AM_o0pgxm.png",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/e_background_removal/c_crop,ar_4:3,f_png/v1771221576/Screenshot_2026-02-16_at_11.28.15_AM_o0pgxm.png",
    },
    {
        title: "Developer Foundations Certification",
        provider: "NXTwave",
        year: "2026",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1785525424/copy_of_screenshot_2026-08-01_at_124608_am_nitupr.png",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1785525424/copy_of_screenshot_2026-08-01_at_124608_am_nitupr.png",
    },
    {
        title: "Responsive Website Design Using Flexbox Certification",
        provider: "NXTwave",
        year: "2026",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1785525250/copy_of_screenshot_2026-08-01_at_124200_am_af43yh.png",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1785525250/copy_of_screenshot_2026-08-01_at_124200_am_af43yh.png",
    },
    {
        title: "Node.js Certification",
        provider: "NXTwave",
        year: "2026",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1785524797/copy_of_screenshot_2026-08-01_at_123414_am_a42hbo.png",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1785524797/copy_of_screenshot_2026-08-01_at_123414_am_a42hbo.png",
    },
    {
        title: "Intro to OS Certification",
        provider: "NXTwave",
        year: "2026",
        image: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1785525931/copy_of_screenshot_2026-08-01_at_125434_am_jgp8qq.png",
        link: "https://res.cloudinary.com/dzu7g2yts/image/upload/v1785525931/copy_of_screenshot_2026-08-01_at_125434_am_jgp8qq.png",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.08, type: "spring", stiffness: 130, damping: 18 },
    }),
};

const modalBackdrop = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
        opacity: 1,
        backdropFilter: "blur(8px)",
        transition: { duration: 0.28, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        backdropFilter: "blur(0px)",
        transition: { duration: 0.22, ease: "easeIn" },
    },
};

const modalContent = {
    hidden: { opacity: 0, y: 70, scale: 0.9, rotateX: -8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 220,
            damping: 22,
            mass: 0.85,
            when: "beforeChildren",
            staggerChildren: 0.08,
        },
    },
    exit: {
        opacity: 0,
        y: 38,
        scale: 0.92,
        rotateX: 6,
        transition: { duration: 0.2, ease: "easeIn" },
    },
};

const modalItem = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
};

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
    const [filterYear, setFilterYear] = useState("All");
    const [showCertifications, setShowCertifications] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.15,
        triggerOnce: true,
    });

    const years = ["All", ...Array.from(new Set(certifications.map((c) => c.year)))];
    const filteredCerts =
        filterYear === "All"
            ? certifications
            : certifications.filter((c) => c.year === filterYear);

    return (
        <section className="section-container text-black" ref={ref}>
            <SectionTitle
                title="My Certifications"
                highlight="Certifications"
                subtitle="Verified learning milestones that show my growth across frontend, backend, database, and programming fundamentals"
            />

            <div className="mb-8 flex justify-center md:hidden">
                <button
                    type="button"
                    onClick={() => setShowCertifications((current) => !current)}
                    className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-colors duration-300 hover:bg-blue-700"
                    aria-expanded={showCertifications}
                    aria-controls="certifications-mobile-content"
                >
                    {showCertifications ? "Hide Certifications" : "Show Certifications"}
                    <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                            showCertifications ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </div>

            <div id="certifications-mobile-content" className={`${showCertifications ? "block" : "hidden"} md:block`}>
                <motion.div
                    className="mb-12 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <div className="inline-flex flex-wrap justify-center gap-1 rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setFilterYear(year)}
                                className={`relative min-w-20 rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                                    filterYear === year
                                        ? "text-white"
                                        : "text-gray-600 hover:text-blue-600"
                                }`}
                            >
                                {filterYear === year && (
                                    <motion.span
                                        layoutId="certification-year-filter"
                                        className="absolute inset-0 rounded-md bg-blue-600 shadow-md"
                                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                                    />
                                )}
                                <span className="relative z-10">{year}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCerts.map((cert, i) => (
                            <motion.article
                                key={cert.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: 24, scale: 0.96, transition: { duration: 0.2 } }}
                                whileHover={{ y: -10 }}
                                onClick={() => setSelectedCert(cert)}
                                className="cert-card group cursor-pointer"
                                layout
                            >
                                <div className="relative h-44 overflow-hidden bg-slate-100 sm:h-52">
                                    <motion.img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="h-full w-full object-cover"
                                        initial={{ scale: 1.04 }}
                                        animate={{ scale: 1 }}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow-sm backdrop-blur">
                                        <Calendar className="h-3.5 w-3.5 text-blue-600" />
                                        {cert.year}
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-lg">
                                            View certificate
                                            <ExternalLink className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>

                                <div className="flex min-h-[180px] flex-col p-5 sm:min-h-[196px] sm:p-6">
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                                        <Award className="h-5 w-5" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                                        {cert.provider}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
                                        <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                                            Verified
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                                            Open
                                            <ExternalLink className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-8"
                        variants={modalBackdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-2xl shadow-slate-950/30"
                            variants={modalContent}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            layoutId={selectedCert.title}
                        >
                            <motion.button
                                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white/90 text-slate-700 shadow-md backdrop-blur transition-colors duration-300 hover:bg-red-50 hover:text-red-600"
                                onClick={() => setSelectedCert(null)}
                                whileHover={{ rotate: 90, scale: 1.06 }}
                                whileTap={{ scale: 0.88 }}
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </motion.button>

                            <div className="grid md:grid-cols-[1.15fr_0.85fr]">
                                <motion.div className="bg-slate-100 p-4" variants={modalItem}>
                                    <motion.img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        className="h-60 w-full rounded-md object-contain sm:h-80 md:h-[360px]"
                                        initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                </motion.div>

                                <div className="flex flex-col p-6 md:p-8">
                                    <motion.div
                                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100"
                                        variants={modalItem}
                                        whileHover={{ rotate: -8, scale: 1.06 }}
                                    >
                                        <Award className="h-6 w-6" />
                                    </motion.div>
                                    <motion.p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700" variants={modalItem}>
                                        {selectedCert.provider} - {selectedCert.year}
                                    </motion.p>
                                    <motion.h3 className="mb-4 text-2xl font-bold leading-tight text-slate-900" variants={modalItem}>
                                        {selectedCert.title}
                                    </motion.h3>
                                    <motion.p className="mb-8 leading-relaxed text-gray-600" variants={modalItem}>
                                        This certification highlights hands-on practice and structured learning in modern web development fundamentals.
                                    </motion.p>
                                    <motion.a
                                        href={selectedCert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative mt-auto inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-colors duration-300 hover:bg-blue-700"
                                        variants={modalItem}
                                        whileHover={{ y: -3, boxShadow: "0 18px 34px rgba(37, 99, 235, 0.28)" }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <motion.span
                                            className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-white/45 blur-sm"
                                            initial={{ x: "-140%", opacity: 0 }}
                                            whileHover={{ x: "140%", opacity: [0, 0.55, 0] }}
                                            transition={{ duration: 0.72, ease: "easeOut" }}
                                        />
                                        <span className="relative z-10">View Certificate</span>
                                        <motion.span
                                            className="relative z-10"
                                            whileHover={{ x: 4, rotate: -8 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 18 }}
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </motion.span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
