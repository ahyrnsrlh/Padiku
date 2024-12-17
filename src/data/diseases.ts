import { Disease } from '../types/diagnosis';

export const diseases: Disease[] = [
  {
    id: 'bacterial_leaf_blight',
    name: 'Hawar Daun Bakteri (Bacterial Leaf Blight)',
    symptoms: ['yellow_leaves', 'leaf_blight', 'wilted_leaves'],
    causes: 'Infeksi bakteri Xanthomonas oryzae',
    treatment: 'Penggunaan varietas tahan penyakit, pemupukan yang seimbang, dan kontrol bakteri menggunakan bakterisida.',
    confidence: 0
  },
  {
    id: 'rice_blast',
    name: 'Blas Padi (Rice Blast)',
    symptoms: ['brown_spots', 'leaf_lesions', 'stunted_growth'],
    causes: 'Jamur Pyricularia oryzae',
    treatment: 'Aplikasi fungisida, penggunaan varietas tahan, dan manajemen air yang baik.',
    confidence: 0
  },
  {
    id: 'tungro',
    name: 'Penyakit Tungro',
    symptoms: ['yellow_leaves', 'stunted_growth', 'reduced_tillering'],
    causes: 'Virus yang ditularkan oleh wereng hijau',
    treatment: 'Pengendalian populasi wereng dengan insektisida dan penggunaan varietas tahan tungro.',
    confidence: 0
  },
  {
    id: 'root_rot',
    name: 'Busuk Akar (Root Rot)',
    symptoms: ['root_rot', 'wilted_leaves', 'yellow_leaves'],
    causes: 'Infeksi jamur tanah seperti Fusarium sp.',
    treatment: 'Meningkatkan drainase tanah dan penggunaan fungisida yang sesuai.',
    confidence: 0
  }
];