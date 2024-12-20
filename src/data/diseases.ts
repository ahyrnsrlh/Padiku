import { Disease } from '../types/diagnosis';

export const diseases: Disease[] = [
  {
    id: 'busuk_malai',
    name: 'Busuk Malai',
    symptoms: [
      'tangkai_malai_busuk',
      'bercak_kecil_bulat'
    ],
    causes: 'Infeksi jamur yang berkembang dalam kondisi kelembaban tinggi dan sirkulasi udara yang buruk.',
    treatment: `
      1. Penggunaan fungisida seperti Delsen, Rabcide, Puanmur, Nordox, dll.
      2. Menanam dengan jarak yang cukup untuk memastikan sirkulasi udara yang baik dan mengurangi kelembaban.
      3. Aplikasi fungisida secara preventif pada tahap awal pertumbuhan tanaman untuk mencegah infeksi.
    `,
    confidence: 0
  },
  {
    id: 'wereng_batang_coklat',
    name: 'Wereng Batang Coklat',
    symptoms: [
      'tanaman_menguning',
      'hopperburn',
      'pengisian_bulir_tidak_maksimal',
      'tanaman_kerdil'
    ],
    causes: 'Hama yang menghisap cairan tanaman, menyebabkan tanaman padi tampak menguning dan kering, serta mengganggu proses pengisian bulir.',
    treatment: `
      1. Pola tanam yang baik.
      2. Tanam serentak sekurang-kurangnya meliputi satu wilayah kelompok.
      3. Pergiliran varietas tahan dengan sumber ketahanan yang berbeda.
      4. Penanaman varietas unggul tahan wereng (VUTW) sesuai dengan biotipe setempat.
      5. Eradikasi dan sanitasi tanaman terserang.
      6. Penggunaan agens hayati seperti Beauveria, Metarhizium.
      7. Aplikasi pestisida nabati seperti Nimba, sirsak, daun tembakau, dll.
      8. Aplikasi insektisida buprofezin (Applaud 10 WP) jika ditemukan wereng coklat.
      9. Aplikasi insektisida golongan karbamat (BPMC, MIPC) jika ditemukan wereng coklat.
    `,
    confidence: 0
  },
  {
    id: 'penggerek_batang',
    name: 'Penggerek Batang',
    symptoms: [
      'matinya_pucuk',
      'lubang_kecil_di_batang'
    ],
    causes: 'larva serangga yang memakan jaringan batang, menyebabkan matinya pucuk dan kerusakan pada tanaman.',
    treatment: `
      1. Penggunaan insektisida yang efektif terhadap larva penggerek.
      2. Pemangkasan bagian tanaman yang terinfeksi.
      3. Rotasi tanaman untuk mengurangi populasi hama.
      4. Menjaga kebersihan lahan dari sisa-sisa tanaman yang terinfeksi.
    `,
    confidence: 0
  },
  {
    id: 'busuk_pelepah',
    name: 'Busuk Pelepah',
    symptoms: [
      'lesi_oval_pada_pelepah'
    ],
    causes: 'Infeksi jamur yang menyebabkan lesi pada pelepah daun, sering kali diperparah oleh kelembaban yang tinggi dan sirkulasi udara yang buruk.',
    treatment: `
      1. Penggunaan fungisida untuk mengendalikan infeksi jamur.
      2. Memastikan sirkulasi udara yang baik di sekitar tanaman.
      3. Mengurangi kelembaban dengan pengaturan irigasi yang tepat.
    `,
    confidence: 0
  },
  {
    id: 'hawar_daun_bakteri',
    name: 'Hawar Daun Bakteri',
    symptoms: [
      'garis_coklat_panjang',
      'daun_kuning_oranye'
    ],
    causes: 'Infeksi bakteri yang menyebabkan garis-garis coklat panjang pada daun, biasanya terjadi dalam kondisi kelembaban tinggi dan kepadatan tanam yang berlebih.',
    treatment: `
      1. Menggunakan varietas tahan terhadap infeksi bakteri.
      2. Mengatur jarak tanam untuk meningkatkan sirkulasi udara.
      3. Aplikasi fungisida dan bakterisida sesuai kebutuhan.
    `,
    confidence: 0
  },
  {
    id: 'tungro',
    name: 'Tungro',
    symptoms: [
      'daun_muda_kuning_oranye'
    ],
    causes: 'Infeksi virus yang ditularkan oleh hama, menyebabkan daun berubah menjadi kuning oranye dan mengganggu pertumbuhan tanaman.',
    treatment: `
      1. Menggunakan varietas padi yang tahan terhadap virus tungro.
      2. Pengendalian hama secara efektif untuk mencegah penyebaran virus.
      3. Menghapus tanaman yang terinfeksi untuk mengurangi sumber infeksi.
    `,
    confidence: 0
  },
  {
    id: 'kerdil_rumput',
    name: 'Kerdil Rumput',
    symptoms: [
      'daun_pendek_kaku'
    ],
    causes: 'Infeksi virus yang ditularkan oleh wereng, menyebabkan daun yang terinfeksi menjadi pendek dan kaku, serta menghambat pertumbuhan tanaman.',
    treatment: `
      1. Menggunakan varietas tahan terhadap virus kerdil.
      2. Pengendalian hama secara teratur untuk mencegah infeksi.
      3. Menghapus tanaman yang terinfeksi untuk mengurangi penyebaran.
    `,
    confidence: 0
  },
  {
    id: 'kerdil_hampa',
    name: 'Kerdil Hampa',
    symptoms: [
      'tanaman_kerdil'
    ],
    causes: 'Infeksi virus yang menyebabkan tanaman tumbuh kerdil dan batang menjadi memendek, serta mengganggu pembentukan malai dan biji.',
    treatment: `
      1. Menggunakan varietas padi yang tahan terhadap virus kerdil hampa.
      2. Pengendalian hama untuk mencegah penyebaran virus.
      3. Menghapus tanaman yang terinfeksi untuk mengurangi sumber infeksi.
    `,
    confidence: 0
  }
];