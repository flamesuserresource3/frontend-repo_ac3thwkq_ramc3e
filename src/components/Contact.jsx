import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    alert(`Terima kasih, ${name}! Pesan kamu sudah terkirim.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <Mail size={22} /> Kolaborasi Yuk
      </motion.h2>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Nama</label>
            <input name="name" required className="w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 outline-none transition focus:border-gray-500 dark:border-gray-700" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input type="email" name="email" required className="w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 outline-none transition focus:border-gray-500 dark:border-gray-700" />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Pesan</label>
          <textarea name="message" rows="4" required className="w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 outline-none transition focus:border-gray-500 dark:border-gray-700" />
        </div>
        <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-white transition hover:bg-indigo-500">
          Kirim <Send size={18} />
        </button>
      </form>
    </section>
  );
}
