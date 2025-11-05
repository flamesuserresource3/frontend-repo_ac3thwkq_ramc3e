import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-white">
            <User size={22} /> Tentang Saya
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Saya membantu profesional dan kreator membangun personal brand yang kuat melalui strategi visual dan narasi yang konsisten. Fokus pada positioning, diferensiasi, serta pengalaman digital yang berkesan.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Brand narrative dan tone of voice</li>
            <li>• Desain identitas visual</li>
            <li>• Website portfolio dan landing page</li>
            <li>• Optimasi profil LinkedIn & konten</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">50+ </p>
              <p className="text-sm text-gray-500">Proyek</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">8<sup className="text-base">/10</sup></p>
              <p className="text-sm text-gray-500">Rata-rata rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">5 th</p>
              <p className="text-sm text-gray-500">Pengalaman</p>
            </div>
          </div>
          <div className="mt-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-4 text-sm text-gray-700 dark:text-gray-300">
            "Brand yang kuat dimulai dari konsistensi cerita, visual, dan pengalaman."
          </div>
        </motion.div>
      </div>
    </section>
  );
}
