import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

const items = [
  {
    title: 'Rebranding Konsultan Finansial',
    desc: 'Meningkatkan kepercayaan audiens dengan sistem identitas visual yang profesional.',
    tag: 'Identity',
  },
  {
    title: 'Portfolio Fotografer Lifestyle',
    desc: 'Tampilan bersih, fokus pada storytelling tiap proyek untuk meningkatkan booking.',
    tag: 'Website',
  },
  {
    title: 'Optimasi Profil LinkedIn',
    desc: 'Menyusun headline, summary, dan konten konsisten untuk personal positioning.',
    tag: 'Content',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-white">
          <Rocket size={22} /> Proyek Unggulan
        </h2>
        <a href="#contact" className="text-sm text-indigo-600 hover:underline dark:text-indigo-400">
          Minta studi kasus lengkap
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                {it.tag}
              </span>
              <Star size={18} className="text-amber-500 opacity-0 transition group-hover:opacity-100" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
