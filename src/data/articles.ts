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
    `,
    image: "/artikel4.svg",
    date: "March 10, 2024",
    readTime: 7,
    category: "Fertilization",
    tags: ["fertilizer", "nutrition", "soil health"],
  },
  {
    id: "4",
    title: "Panduan Pengelolaan Tanaman Padi",
    excerpt:
      "Panduan lengkap pengelolaan tanaman padi, mulai dari persiapan lahan hingga panen.",
    content: `
      <h2>Panduan Pengelolaan Tanaman Padi</h2>
      <p>Langkah-langkah untuk pengelolaan tanaman padi dari awal hingga panen dengan teknik modern.</p>
    `,
    image: "/artikel3.svg",
    date: "March 10, 2024",
    readTime: 7,
    category: "Fertilization",
    tags: ["fertilizer", "nutrition", "soil health"],
  },
];
