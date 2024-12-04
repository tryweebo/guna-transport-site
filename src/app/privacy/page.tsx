import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { ArticleContent } from '@shared/components/common/content'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Baca aturan privasi kami',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Kebijakan Privasi',
    description: 'Baca aturan privasi kami',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Kebijakan Privasi',
    description: 'Baca aturan privasi kami',
  },
}

export default function PrivacyPage(): React.ReactElement {
  return (
    <div className="flex flex-col py-20 tablet:py-36">
      <section className="container mx-auto px-5 tablet:px-0">
        <div className="flex tablet:w-6/12 mx-auto">
          <ArticleContent>
            <h1>Kebijakan Privasi</h1>
            <p>
              Terakhir diperbarui: <strong>4 Desember 2024</strong>
            </p>

            <div>
              <h2>Informasi yang Kami Kumpulkan</h2>
              <p>
                Kami dapat mengumpulkan informasi berikut untuk memberikan
                layanan kami:
              </p>
              <ul>
                <li>
                  <strong>Data Pribadi:</strong> Nama lengkap, nomor KTP/SIM,
                  alamat email, nomor telepon, dan alamat pengirim/penerima.
                </li>
                <li>
                  <strong>Informasi Terkait Senjata:</strong> Jenis, nomor seri,
                  spesifikasi senjata, dan dokumen perizinan yang relevan.
                </li>
                <li>
                  <strong>Data Transaksi:</strong> Rincian pembayaran dan bukti
                  dokumen pengiriman.
                </li>
                <li>
                  <strong>Data Lokasi:</strong> Informasi lokasi pengambilan dan
                  tujuan pengiriman.
                </li>
              </ul>
            </div>

            <div>
              <h2>Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
              <ul>
                <li>Memproses dan mengelola pesanan transportasi senjata.</li>
                <li>
                  Memastikan kepatuhan terhadap hukum dan peraturan transportasi
                  senjata.
                </li>
                <li>
                  Mengelola komunikasi dengan pelanggan, seperti pembaruan
                  pengiriman atau konfirmasi pesanan.
                </li>
                <li>
                  Meningkatkan kualitas layanan kami berdasarkan umpan balik
                  pengguna.
                </li>
                <li>
                  Mematuhi kewajiban hukum atau proses hukum yang berlaku.
                </li>
              </ul>
            </div>

            <div>
              <h2>Pembagian Informasi</h2>
              <p>
                Kami dapat membagikan informasi Anda kepada pihak ketiga berikut
                jika diperlukan:
              </p>
              <ul>
                <li>
                  <strong>Otoritas Pemerintah dan Penegak Hukum:</strong> Jika
                  diminta oleh pihak berwenang sesuai dengan hukum yang berlaku.
                </li>
                <li>
                  <strong>Mitra Logistik:</strong> Untuk tujuan penyelesaian
                  layanan pengiriman.
                </li>
                <li>
                  <strong>Penyedia Layanan Pihak Ketiga:</strong> Seperti
                  penyedia layanan pembayaran atau teknologi.
                </li>
              </ul>
              <p>
                Kami tidak akan menjual atau menyewakan informasi pribadi Anda
                kepada pihak ketiga untuk tujuan komersial.
              </p>
            </div>

            <div>
              <h2>Keamanan Data</h2>
              <p>
                Kami menggunakan langkah-langkah teknis dan organisasi yang
                sesuai untuk melindungi data pribadi Anda dari akses yang tidak
                sah, kehilangan, atau penyalahgunaan, seperti enkripsi data dan
                autentikasi keamanan.
              </p>
              <p>
                Namun, kami tidak dapat menjamin keamanan data sepenuhnya di
                luar kendali kami.
              </p>
            </div>

            <div>
              <h2>Hak Anda</h2>
              <p>Anda memiliki hak-hak berikut:</p>
              <ul>
                <li>
                  <strong>Mengakses:</strong> Informasi pribadi Anda yang kami
                  simpan.
                </li>
                <li>
                  <strong>Memperbaiki:</strong> Data yang tidak akurat atau
                  tidak lengkap.
                </li>
                <li>
                  <strong>Menghapus:</strong> Data tertentu sesuai permintaan
                  Anda.
                </li>
                <li>
                  <strong>Menarik Persetujuan:</strong> Untuk pemrosesan data
                  pribadi tertentu.
                </li>
              </ul>
              <p>
                Silakan hubungi kami di{' '}
                <strong>higunatransport@gmail.com</strong> untuk menggunakan hak
                Anda.
              </p>
            </div>

            <div>
              <h2>Penyimpanan Data</h2>
              <p>
                Kami akan menyimpan data pribadi Anda hanya selama diperlukan
                untuk tujuan layanan atau untuk memenuhi kewajiban hukum kami.
                Setelah itu, data Anda akan dihapus secara aman.
              </p>
            </div>

            <div>
              <h2>Perubahan Kebijakan Privasi</h2>
              <p>
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke
                waktu. Perubahan akan diberitahukan melalui email atau di situs
                web kami. Harap tinjau kebijakan ini secara berkala.
              </p>
            </div>

            <div>
              <h2>Hubungi Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang
                Kebijakan Privasi ini, silakan{' '}
                <Link href={'/contact'}>hubungi kami</Link>
              </p>
            </div>
          </ArticleContent>
        </div>
      </section>
    </div>
  )
}
