import { Disease } from '../types/diagnosis';

export const diseases: Disease[] = [
  {
    id: 'bacterial_leaf_blight',
    name: 'Hawar Daun Bakteri (Bacterial Leaf Blight)',
    symptoms: ['yellow_leaves', 'leaf_blight', 'wilted_leaves'],
    causes: 'Infeksi bakteri Xanthomonas oryzae',
    treatment: 'Penggunaan varietas tahan penyakit, pemupukan yang seimbang, dan kontrol bakteri menggunakan bakterisida.',
    image: 'https://images.unsplash.com/photo-1595839095404-14e97c5fd60f?auto=format&fit=crop&q=80',
    confidence: 0
  },
  {
    id: 'rice_blast',
    name: 'Blas Padi (Rice Blast)',
    symptoms: ['brown_spots', 'leaf_lesions', 'stunted_growth'],
    causes: 'Jamur Pyricularia oryzae',
    treatment: 'Aplikasi fungisida, penggunaan varietas tahan, dan manajemen air yang baik.',
    image: 'https://images.unsplash.com/photo-1595839095404-14e97c5fd60f?auto=format&fit=crop&q=80',
    confidence: 0
  },
  {
    id: 'tungro',
    name: 'Penyakit Tungro',
    symptoms: ['yellow_leaves', 'stunted_growth', 'reduced_tillering'],
    causes: 'Virus yang ditularkan oleh wereng hijau',
    treatment: 'Pengendalian populasi wereng dengan insektisida dan penggunaan varietas tahan tungro.',
    image: 'https://images.unsplash.com/photo-1595839095404-14e97c5fd60f?auto=format&fit=crop&q=80',
    confidence: 0
  },
  {
    id: 'root_rot',
    name: 'Busuk Akar (Root Rot)',
    symptoms: ['root_rot', 'wilted_leaves', 'yellow_leaves'],
    causes: 'Infeksi jamur tanah seperti Fusarium sp.',
    treatment: 'Meningkatkan drainase tanah dan penggunaan fungisida yang sesuai.',
    image: 'https://images.unsplash.com/photo-1595839095404-14e97c5fd60f?auto=format&fit=crop&q=80',
    confidence: 0
  }
];