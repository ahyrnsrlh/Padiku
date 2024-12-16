import React from 'react';
import { Target, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tentang Kami</h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600">
            Sistem Pakar Diagnosa Penyakit pada Tanaman Padi adalah solusi digital yang dirancang 
            untuk meningkatkan efisiensi dan keberhasilan dalam budidaya tanaman padi. 
            Dikembangkan oleh tim ahli teknologi dan pertanian, sistem ini menggunakan metode 
            forward chaining dan case-based reasoning untuk mendiagnosa penyakit berdasarkan data gejala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center p-6">
            <Target className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Visi</h3>
            <p className="text-gray-600">
              Meningkatkan kualitas dan kuantitas hasil pertanian melalui teknologi yang 
              inovatif dan mudah diakses.
            </p>
          </div>
          <div className="text-center p-6">
            <Rocket className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Misi</h3>
            <ul className="text-gray-600 text-left list-disc pl-6">
              <li>Memberikan solusi praktis bagi petani dalam mendiagnosa penyakit tanaman.</li>
              <li>Menyediakan edukasi dan informasi seputar penyakit tanaman padi.</li>
              <li>Mendukung pertanian berkelanjutan di Indonesia.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}