import React from 'react';
import { Target, Rocket } from 'lucide-react';

export function AboutCard() {
  return (
    <div className="rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        Tentang Kami
      </h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <Target className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-gray-800 dark:text-white">
              Visi
            </h4>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Meningkatkan kualitas dan kuantitas hasil pertanian melalui teknologi yang 
            inovatif dan mudah diakses.
          </p>
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-3">
            <Rocket className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-gray-800 dark:text-white">
              Misi
            </h4>
          </div>
          <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
            <li>• Memberikan solusi praktis diagnosa penyakit</li>
            <li>• Menyediakan edukasi pertanian</li>
            <li>• Mendukung pertanian berkelanjutan</li>
          </ul>
        </div>
      </div>
    </div>
  );
}