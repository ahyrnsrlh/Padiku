import React from 'react';
import { Search, BookOpen, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-12 h-12 text-green-600" />,
    title: "Diagnosa Penyakit Cepat",
    description: "Masukkan gejala yang dialami tanaman padi Anda, dan sistem kami akan memberikan hasil diagnosa beserta rekomendasi penanganan."
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-600" />,
    title: "Pusat Informasi Penyakit",
    description: "Pelajari lebih lanjut tentang berbagai penyakit yang sering menyerang tanaman padi, lengkap dengan gambar dan deskripsinya."
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-green-600" />,
    title: "Tips dan Saran Ahli",
    description: "Dapatkan tips terbaik untuk mencegah penyakit tanaman padi dari para ahli pertanian."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}