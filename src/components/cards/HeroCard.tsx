import React from 'react';
import { Leaf } from 'lucide-react';

export function HeroCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-8 h-[400px] group transition-all duration-300 hover:shadow-lg">
      <div className="relative z-10 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Sistem Pakar Diagnosa
          <br />
          Penyakit Tanaman Padi
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
          Solusi cerdas untuk mendiagnosa penyakit tanaman padi Anda secara cepat dan akurat
          menggunakan teknologi sistem pakar.
        </p>
        <button className="inline-flex items-center px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
          <Leaf className="mr-2 h-5 w-5" />
          Mulai Diagnosa
        </button>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
        <img
          src="https://images.unsplash.com/photo-1595839095404-14e97c5fd60f?auto=format&fit=crop&q=80"
          alt="Rice Field Background"
          className="w-96 h-96 object-cover"
        />
      </div>
    </div>
  );
}