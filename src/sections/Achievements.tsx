import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar, ExternalLink, TrendingUp, X, BookOpen } from "lucide-react";
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
    title: "Responsive Website Design Using Flexbox",
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

const progressUrl =
  "https://learning.ccbp.in/progress/public?uid=36db577c-9a08-4d6a-98b2-2559e18cf120";

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

const modalContent = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 240, damping: 24 },
  },
  exit: { opacity: 0, y: 20, scale: 0.96, transition: { duration: 0.18 } },
};

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [filterYear, setFilterYear] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  const years = ["All", ...Array.from(new Set(certifications.map((c) => c.year)))];
  const filteredCerts =
    filterYear === "All" ? certifications : certifications.filter((c) => c.year === filterYear);

  return (
    <section className="section-container bg-slate-50/60" ref={ref} aria-label="Achievements">
      <SectionTitle
        title="Achievements"
        highlight="Achievements"
        subtitle="Certifications earned and learning milestones reached through the NXTwave / CCBP program"
      />

      {/* ── CERTIFICATIONS ── */}
      <div className="mb-20">
        <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold text-slate-900">
            Certifications
            <span className="ml-2 rounded-full bg-blue-50 px-2.5 py-0.5 text-sm font-medium text-blue-700">
              {certifications.length}
            </span>
          </h3>

          {/* Year filter */}
          <motion.div
            className="inline-flex flex-wrap gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setFilterYear(year)}
                className={`relative min-w-[3.5rem] rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                  filterYear === year ? "text-white" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {filterYear === year && (
                  <motion.span
                    layoutId="cert-year-filter"
                    className="absolute inset-0 rounded-lg bg-blue-600"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{year}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, i) => (
              <motion.article
                key={cert.title}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 22 }}
                onClick={() => setSelectedCert(cert)}
                className="cert-card group cursor-pointer"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => e.key === "Enter" && setSelectedCert(cert)}
                aria-label={`View ${cert.title} certificate`}
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                    <Calendar className="h-3 w-3 text-blue-600" />
                    {cert.year}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow">
                      View certificate <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="mb-2 flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-blue-700">
                        {cert.title}
                      </h4>
                      <p className="mt-0.5 text-xs font-medium text-slate-400">{cert.provider}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                      Verified
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                      Open <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── LEARNING PROGRESS ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.55 }}
      >
        <h3 className="mb-6 text-xl font-semibold text-slate-900">Learning Progress</h3>
        <div className="progress-card overflow-hidden p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-lg font-semibold text-slate-900">CCBP Learning Profile</h4>
              <p className="mb-5 leading-relaxed text-sm text-slate-500">
                My public CCBP learning profile — tracking course completion, practice, and verified
                progress across the Developer Foundations program.
              </p>
              <a
                href={progressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="blue-button inline-flex text-sm"
              >
                <BookOpen className="h-4 w-4" />
                View Live Progress
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: "Courses", value: "9+" },
                { label: "Certifications", value: "9" },
                { label: "Program", value: "CCBP" },
                { label: "Status", value: "Active" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
                  <p className="text-xl font-bold text-blue-600">{value}</p>
                  <p className="text-xs font-medium text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── CERTIFICATE MODAL ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white shadow-2xl"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-slate-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-red-50 hover:text-red-600"
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Content */}
              <div className="grid md:grid-cols-[1.2fr_0.8fr]">
                {/* Image */}
                <div className="bg-slate-100 p-4">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="h-60 w-full rounded-xl object-contain md:h-80"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Award className="h-5 w-5" />
                  </div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                    {selectedCert.provider} · {selectedCert.year}
                  </p>
                  <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900">
                    {selectedCert.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-500">
                    Verified certification earned through hands-on coursework and structured learning
                    in modern web development.
                  </p>
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue-button mt-auto text-sm"
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
