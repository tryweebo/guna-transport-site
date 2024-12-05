import Image from 'next/image'
import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col pt-2 py-20 tablet:pt-2 tablet:py-36">
      <div className="flex w-full p-3">
        <picture className="relative overflow-hidden h-[40vh] tablet:h-[80vh] w-full rounded-xl cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1506521693878-ba0ce32fb9bb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            alt="hero"
            className="object-cover transition-all duration-500 hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </picture>
      </div>

      <div className="flex flex-col items-center container mx-auto px-5 tablet:px-0 mt-20 gap-16">
        <div className="flex flex-col w-full tablet:w-6/12 mx-auto">
          <h2 className="text-2xl tablet:text-3xl font-medium mt-9 !leading-tight text-pretty">
            Kami menyediakan solusi untuk setiap perjalanan
          </h2>

          <p className="text-foreground/60 !leading-relaxed w-full mt-6">
            Di Guna Transport, kami berkomitmen untuk memberikan solusi
            transportasi yang lancar, andal, dan nyaman. Dengan semangat
            menghubungkan orang dan tempat, kami menyediakan layanan
            transportasi terbaik yang dirancang untuk memenuhi beragam kebutuhan
            pelanggan. Apakah Anda merencanakan perjalanan singkat, perjalanan
            jarak jauh, atau membutuhkan logistik yang efisien untuk barang
            Anda, kami siap membantu Anda bergerak dengan aman dan tepat waktu.
          </p>
        </div>
        <div className="flex flex-col w-full tablet:w-6/12 mx-auto">
          <h2 className="text-2xl tablet:text-3xl font-medium mt-9 !leading-tight text-pretty">
            Misi kami
          </h2>

          <p className="text-foreground/60 !leading-relaxed w-full mt-6">
            Misi kami adalah menyediakan layanan transportasi unggulan yang
            melebihi harapan, memastikan setiap perjalanan aman, tepat waktu,
            dan bebas hambatan.
          </p>

          <p className="text-foreground/60 !leading-relaxed w-full mt-6">
            Misi kami adalah menyediakan layanan transportasi unggulan yang
            melebihi harapan, memastikan setiap perjalanan aman, tepat waktu,
            dan bebas hambatan.
          </p>

          <ul className="list-disc mt-10">
            <li className="list-item text-foreground/60 !leading-relaxed py-1 ml-6">
              Beragam Layanan: Mulai dari sewa mobil pribadi hingga bus untuk
              kelompok besar, kami menawarkan solusi yang disesuaikan untuk
              individu, keluarga, dan bisnis.
            </li>
            <li className="list-item text-foreground/60 !leading-relaxed py-1 ml-6">
              Beragam Layanan: Mulai dari sewa mobil pribadi hingga bus untuk
              kelompok besar, kami menawarkan solusi yang disesuaikan untuk
              individu, keluarga, dan bisnis.
            </li>
            <li className="list-item text-foreground/60 !leading-relaxed py-1 ml-6">
              Keandalan: Kami memahami pentingnya ketepatan waktu. Percayakan
              kepada kami untuk membawa Anda ke tujuan tepat waktu, setiap saat.
            </li>
            <li className="list-item text-foreground/60 !leading-relaxed py-1 ml-6">
              Pendekatan Berpusat pada Pelanggan: Tim kami yang ramah dan
              profesional berdedikasi untuk memberikan pengalaman positif di
              setiap langkah perjalanan Anda.
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full tablet:w-6/12 mx-auto">
          <h2 className="text-2xl tablet:text-3xl font-medium mt-9 !leading-tight text-pretty">
            Armada Kami
          </h2>

          <p className="text-foreground/60 !leading-relaxed w-full mt-6">
            Armada kami yang modern dan terawat dengan baik mencakup mobil, bus,
            dan kendaraan khusus yang dilengkapi dengan fasilitas terbaru untuk
            memastikan kenyamanan dan kemudahan Anda.
          </p>
        </div>
        <div className="flex flex-col w-full tablet:w-6/12 mx-auto">
          <h2 className="text-2xl tablet:text-3xl font-medium mt-9 !leading-tight text-pretty">
            Visi Kami
          </h2>

          <p className="text-foreground/60 !leading-relaxed w-full mt-6">
            Kami membayangkan dunia di mana transportasi menjadi mudah dan dapat
            diakses oleh semua orang. Dengan terus berinovasi dan meningkatkan
            layanan, kami berusaha menjadi mitra terpercaya dalam semua
            kebutuhan perjalanan dan logistik Anda.
          </p>

          <p className="text-foreground/60 !leading-relaxed w-full mt-6">
            Apakah Anda bepergian untuk bekerja, merencanakan liburan keluarga,
            atau mengangkut barang, Guna Transport adalah mitra terpercaya Anda
            untuk setiap perjalanan. Izinkan kami membantu Anda menikmati
            perjalanan yang lebih baik.
          </p>
        </div>
        <div className="flex flex-col w-full tablet:w-6/12 mx-auto">
          <h2 className="text-2xl tablet:text-3xl font-medium mt-9 !leading-tight text-pretty">
            Hubungi Kami Hari Ini
          </h2>

          <p className="text-foreground/60 !leading-relaxed w-full mt-6">
            Kami membayangkan dunia di mana transportasi menjadi mudah dan dapat
            diakses oleh semua orang. Dengan terus berinovasi dan meningkatkan
            layanan, kami berusaha menjadi mitra terpercaya dalam semua
            kebutuhan perjalanan dan logistik Anda.
          </p>

          <p className="text-foreground/60 !leading-relaxed w-full mt-6">
            Siap memulai perjalanan Anda? Hubungi kami untuk memesan perjalanan
            berikutnya atau pelajari lebih lanjut tentang layanan kami. Bersama,
            kami akan membuat perjalanan Anda luar biasa.
          </p>
        </div>
      </div>
    </section>
  )
}
