import React from 'react';
import { Sprout } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Sprout className="mr-2" />
            <span className="font-bold">RiceDiagnose</span>
          </div>
          <div className="text-center md:text-right">
            <p>Hak Cipta © 2024 Sistem Pakar Diagnosa Penyakit Tanaman Padi.</p>
            <p className="text-sm text-green-200">Didukung oleh teknologi terkini untuk membantu petani Indonesia.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}