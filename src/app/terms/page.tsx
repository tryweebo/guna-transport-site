import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { ArticleContent } from '@shared/components/common/content'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ketentuan Pengguna',
  description: 'Baca ketentuan pengguna kami',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Ketentuan Pengguna',
    description: 'Baca ketentuan pengguna kami',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Ketentuan Pengguna',
    description: 'Baca ketentuan pengguna kami',
  },
}

export default function TermsPage(): React.ReactElement {
  return (
    <div className="flex flex-col py-20 tablet:py-36">
      <section className="container mx-auto px-5 tablet:px-0">
        <div className="flex tablet:w-6/12 mx-auto">
          <ArticleContent>
            <h1>Syarat dan Ketentuan</h1>
            <p>
              Terakhir diperbarui: <strong>4 Desember 2024</strong>
            </p>

            <div>
              <h2>Penerimaan Syarat</h2>
              <p>
                Dengan menggunakan layanan transportasi senjata yang disediakan
                oleh Guna Transport, Anda dianggap telah membaca, memahami, dan
                menyetujui Syarat dan Ketentuan ini. Jika Anda tidak menyetujui
                salah satu bagian dari Syarat dan Ketentuan ini, harap tidak
                menggunakan layanan kami.
              </p>
            </div>

            <div>
              <h2>Layanan yang Ditawarkan</h2>
              <p>
                Kami menyediakan layanan transportasi senjata sesuai dengan
                peraturan perundang-undangan yang berlaku. Layanan ini meliputi:
              </p>
              <ul>
                <li>Pengambilan senjata dari lokasi yang ditentukan.</li>
                <li>Pengiriman senjata ke lokasi tujuan.</li>
                <li>
                  Memastikan kepatuhan dengan dokumen dan izin transportasi yang
                  diperlukan.
                </li>
              </ul>
            </div>

            <div>
              <h2>Persyaratan Pengguna</h2>
              <p>
                Untuk menggunakan layanan kami, Anda harus memenuhi persyaratan
                berikut:
              </p>
              <ul>
                <li>
                  Berusia minimal 21 tahun atau sesuai dengan usia legal di
                  wilayah Anda.
                </li>
                <li>
                  Memiliki dokumen izin resmi terkait senjata api, termasuk izin
                  transportasi yang valid.
                </li>
                <li>
                  Memberikan informasi yang akurat dan lengkap selama proses
                  pemesanan.
                </li>
              </ul>
            </div>

            <div>
              <h2>Tanggung Jawab Pengguna</h2>
              <p>Pengguna bertanggung jawab untuk:</p>
              <ul>
                <li>
                  Memastikan semua dokumen izin yang diperlukan tersedia dan
                  valid.
                </li>
                <li>
                  Tidak menggunakan layanan untuk tujuan ilegal atau yang
                  melanggar hukum.
                </li>
                <li>
                  Membayar biaya layanan sesuai dengan tarif yang telah
                  ditentukan.
                </li>
              </ul>
            </div>

            <div>
              <h2>Tanggung Jawab Kami</h2>
              <p>Kami berkomitmen untuk:</p>
              <ul>
                <li>
                  Memastikan keamanan pengiriman senjata selama transportasi.
                </li>
                <li>Mematuhi semua peraturan dan hukum yang berlaku.</li>
                <li>
                  Memberikan layanan dengan transparansi dan profesionalisme.
                </li>
              </ul>
              <p>
                Kami tidak bertanggung jawab atas kerugian yang timbul akibat
                kesalahan atau kelalaian pihak ketiga di luar kendali kami.
              </p>
            </div>

            <div>
              <h2>Larangan</h2>
              <p>Pengguna dilarang menggunakan layanan kami untuk:</p>
              <ul>
                <li>Mengangkut senjata yang tidak memiliki izin resmi.</li>
                <li>Menggunakan dokumen palsu atau memalsukan informasi.</li>
                <li>Melanggar hukum atau peraturan yang berlaku.</li>
              </ul>
            </div>

            <div>
              <h2>Pembatalan dan Pengembalian</h2>
              <p>Pembatalan layanan dapat dilakukan dengan syarat:</p>
              <ul>
                <li>
                  Pembatalan dilakukan minimal 24 jam sebelum waktu pengambilan.
                </li>
                <li>
                  Biaya pembatalan dapat berlaku sesuai dengan kebijakan kami.
                </li>
              </ul>
              <p>
                Pengembalian dana hanya berlaku dalam kasus tertentu, seperti
                kesalahan yang dilakukan oleh pihak kami.
              </p>
            </div>

            <div>
              <h2>Perubahan Syarat dan Ketentuan</h2>
              <p>
                Kami dapat memperbarui Syarat dan Ketentuan ini dari waktu ke
                waktu. Perubahan akan diberitahukan melalui email atau di situs
                web kami. Dengan terus menggunakan layanan kami, Anda dianggap
                menyetujui perubahan tersebut.
              </p>
            </div>

            <div>
              <h2>Hukum yang Berlaku</h2>
              <p>
                Syarat dan Ketentuan ini diatur oleh hukum yang berlaku di Bali,
                Indonesia. Sengketa yang timbul akan diselesaikan melalui jalur
                hukum yang sesuai.
              </p>
            </div>

            <div>
              <h2>Hubungi Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan atau keluhan terkait Syarat dan
                Ketentuan ini, silakan{' '}
                <Link href={'/contact'}>hubungi kami</Link>.
              </p>
            </div>
          </ArticleContent>
        </div>
      </section>
    </div>
  )
}
