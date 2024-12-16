import React from 'react';
import { Users, Leaf, CheckCircle } from 'lucide-react';

export function StatsCard() {
  const stats = [
    {
      icon: Users,
      value: '1,000+',
      label: 'Pengguna Aktif'
    },
    {
      icon: Leaf,
      value: '4',
      label: 'Jenis Penyakit'
    },
    {
      icon: CheckCircle,
      value: '95%',
      label: 'Akurasi'
    }
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        Statistik
      </h3>
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/30">
              <stat.icon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}