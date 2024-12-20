import { Article } from "../types/article";

export const articles: Article[] = [
  {
    id: "1",
    title: "Mengenal Teknik Budidaya Padi Modern",
    excerpt:
      "Pelajari teknik terbaru dalam budidaya padi yang dapat meningkatkan hasil panen hingga 30%.",
    content: `
      <h2>Teknik Budidaya Padi Modern</h2>
      <p>Dalam era pertanian modern, teknologi dan inovasi telah membawa perubahan signifikan dalam cara kita membudidayakan padi. Artikel ini akan membahas beberapa teknik modern yang dapat meningkatkan produktivitas tanaman padi Anda.</p>

      <h3>1. Sistem Tanam Jajar Legowo</h3>
      <p>Sistem tanam jajar legowo adalah teknik penanaman dengan pola khusus yang memberikan ruang lebih lebar di antara kelompok barisan tanaman padi. Keuntungan dari sistem ini meliputi:</p>
      <ul>
        <li>Peningkatan populasi tanaman hingga 30%</li>
        <li>Semua barisan rumpun tanaman berada pada bagian pinggir yang memberikan efek tanaman pinggir</li>
        <li>Memudahkan pemeliharaan tanaman</li>
      </ul>

      <h3>2. Penggunaan Bibit Unggul</h3>
      <p>Pemilihan bibit yang tepat sangat penting untuk hasil yang optimal. Beberapa kriteria bibit unggul:</p>
      <ul>
        <li>Tahan terhadap hama dan penyakit</li>
        <li>Umur panen lebih pendek</li>
        <li>Produktivitas tinggi</li>
      </ul>

      <h3>3. Manajemen Air Modern</h3>
      <p>Pengaturan air yang tepat sangat penting untuk pertumbuhan optimal tanaman padi. Beberapa teknik modern meliputi:</p>
      <ul>
        <li>Sistem irigasi tetes</li>
        <li>Penggunaan sensor kelembaban tanah</li>
        <li>Manajemen air berbasis IoT</li>
      </ul>
    `,
    image: "/artikel2.svg",
    date: "March 15, 2024",
    readTime: 8,
    category: "Cultivation",
    tags: ["modern farming", "rice cultivation", "agriculture"],
  },
  {
    id: "2",
    title: "Cara Mencegah Penyakit Blast pada Padi",
    excerpt:
      "Tips dan strategi efektif untuk mencegah dan menangani penyakit blast yang sering menyerang tanaman padi.",
    content: `
      <h2>Mengenal dan Mencegah Penyakit Blast pada Padi</h2>
      <p>Penyakit blast yang disebabkan oleh jamur Pyricularia oryzae merupakan salah satu penyakit paling serius yang mengancam produksi padi. Mari kita pelajari cara mencegah dan menanganinya.</p>

      <h3>Gejala Penyakit Blast</h3>
      <p>Beberapa gejala yang perlu diwaspadai:</p>
      <ul>
        <li>Bercak berbentuk belah ketupat pada daun</li>
        <li>Bercak berwarna cokelat dengan tepi lebih gelap</li>
        <li>Daun mengering dan mati</li>
      </ul>

      <h3>Strategi Pencegahan</h3>
      <p>Beberapa langkah pencegahan yang dapat dilakukan:</p>
      <ul>
        <li>Penggunaan varietas tahan blast</li>
        <li>Pengaturan jarak tanam yang tepat</li>
        <li>Pemupukan berimbang</li>
        <li>Sanitasi lahan yang baik</li>
      </ul>

      <h3>Pengendalian Terpadu</h3>
      <p>Jika penyakit sudah muncul, lakukan pengendalian terpadu:</p>
      <ul>
        <li>Aplikasi fungisida yang tepat</li>
        <li>Perbaikan drainase</li>
        <li>Pengaturan pemupukan nitrogen</li>
      </ul>
    `,
    image: "/artikel.svg",
    date: "March 12, 2024",
    readTime: 6,
    category: "Disease Prevention",
    tags: ["plant disease", "prevention", "rice blast"],
  },
  {
    id: "3",
    title: "Pemupukan yang Tepat untuk Tanaman Padi",
    excerpt:
      "Panduan lengkap tentang jenis, dosis, dan waktu yang tepat untuk pemupukan tanaman padi.",
    content: `
      <h2>Panduan Lengkap Pemupukan Tanaman Padi</h2>
      <p>Pemupukan yang tepat merupakan kunci keberhasilan dalam budidaya padi. Mari kita pelajari cara pemupukan yang efektif dan efisien.</p>

      <h3>Jenis-jenis Pupuk</h3>
      <p>Beberapa jenis pupuk yang dibutuhkan tanaman padi:</p>
      <ul>
        <li>Pupuk Nitrogen (Urea)</li>
        <li>Pupuk Fosfat (SP-36)</li>
        <li>Pupuk Kalium (KCl)</li>
        <li>Pupuk organik</li>
      </ul>

      <h3>Waktu Pemupukan yang Tepat</h3>
      <p>Jadwal pemupukan yang direkomendasikan:</p>
      <ul>
        <li>Pemupukan dasar: saat pengolahan tanah</li>
        <li>Pemupukan susulan 1: 7-10 hari setelah tanam</li>
        <li>Pemupukan susulan 2: 25-30 hari setelah tanam</li>
        <li>Pemupukan susulan 3: 40-45 hari setelah tanam</li>
      </ul>

      <h3>Dosis Pemupukan</h3>
      <p>Dosis pupuk per hektar yang direkomendasikan:</p>
      <ul>
        <li>Urea: 250-300 kg</li>
        <li>SP-36: 100-150 kg</li>
        <li>KCl: 100 kg</li>
        <li>Pupuk organik: 2-5 ton</li>
      </ul>
    `,
    image: "/artikel4.svg",
    date: "March 10, 2024",
    readTime: 7,
    category: "Fertilization",
    tags: ["fertilizer", "nutrition", "soil health"],
  },
  {
    id: "4",
    title: "Teknik Irigasi untuk Tanaman Padi",
    excerpt:
      "Panduan lengkap tentang teknik irigasi yang efektif untuk meningkatkan hasil panen padi.",
    content: `
      <h2>Teknik Irigasi untuk Tanaman Padi</h2>
      <p>Irigasi yang baik sangat penting untuk pertumbuhan tanaman padi. Artikel ini membahas berbagai teknik irigasi yang dapat diterapkan.</p>
      <h3>1. Irigasi Permukaan</h3>
      <p>Teknik irigasi yang paling umum digunakan, di mana air dialirkan ke lahan melalui saluran terbuka. Kelebihan dan kekurangan:</p>
      <ul>
        <li>Kelebihan: Biaya rendah dan mudah diterapkan.</li>
        <li>Kekurangan: Penggunaan air yang tidak efisien dan risiko erosi tanah.</li>
      </ul>
      <h3>2. Irigasi Tetes</h3>
      <p>Teknik irigasi yang lebih efisien, di mana air diberikan langsung ke akar tanaman. Kelebihan dan kekurangan:</p>
      <ul>
        <li>Kelebihan: Menghemat air dan meningkatkan hasil panen.</li>
        <li>Kekurangan: Biaya awal yang tinggi dan memerlukan pemeliharaan yang baik.</li>
      </ul>
      <h3>3. Irigasi Berbasis Teknologi</h3>
      <p>Penggunaan teknologi modern seperti sensor kelembaban tanah dan sistem otomatis untuk mengatur irigasi. Kelebihan:</p>
      <ul>
        <li>Meningkatkan efisiensi penggunaan air.</li>
        <li>Memudahkan pengelolaan irigasi.</li>
      </ul>
    `,
    image: "/artikel3.svg",
    date: "March 25, 2024",
    readTime: 5,
    category: "Irrigation",
    tags: ["irrigation", "rice cultivation", "agriculture"],
  },
];
