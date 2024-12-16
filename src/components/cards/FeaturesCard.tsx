import React from 'react';
import { Search, BookOpen, MessageCircle } from 'lucide-react';

export function FeaturesCard() {
  const features = [
    {
      icon: Search,
      title: 'Diagnosa Cepat',
      description: 'Hasil diagnosa instan dengan tingkat akurasi tinggi'
    },
    {
      icon: BookOpen,
      title: 'Informasi Lengkap',
      description: 'Database penyakit tanaman padi yang komprehensif'
    },
    {
      icon: MessageCircle,
      title: 'Saran Ahli',
      description: 'Rekomendasi penanganan dari pakar pertanian'
    }
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        Fitur Utama
      </h3>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/30">
              <feature.icon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}