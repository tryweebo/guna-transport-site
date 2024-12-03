import { SectionLabel } from '@shared/components/common/section-label'
import Image from 'next/image'
import * as React from 'react'

export function BenefitSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36">
      <div className="flex flex-col items-center container mx-auto px-5 tablet:px-0">
        <SectionLabel>Kenapa harus pilih kami</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Banyak keuntungan menunggu di perjalanan bersama kami
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Kami menyediakan transportasi dan layanan untuk setiap keperluan kamu.
          Banyak keuntungan bekerja bersama kami dan nikmati perjalanan
        </p>

        <div className="flex items-center mt-36">
          <div className="flex flex-col gap-20 mx-auto w-8/12">
            <div className="flex items-center gap-20 cursor-pointer">
              <picture className="relative overflow-hidden rounded-2xl w-1/2 h-[493px]">
                <Image
                  src="https://images.unsplash.com/photo-1714292696681-87e963191463?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Feature Image"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </picture>

              <div className="flex flex-col w-1/2">
                <h2 className="text-3xl !leading-tight text-pretty">
                  Perjalanan nyaman, bersih dan terjaga
                </h2>

                <p className="mt-9 text-foreground/60 !leading-relaxed">
                  Di setiap perjalanan kami selalu memastikan setiap sudut
                  mobile, kendaraan, kursi dan badan mobile bersih, rapi dan
                  wangi. Sehingga kamu nyaman untuk waktu yang lama.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-20 cursor-pointer">
              <div className="flex flex-col w-1/2">
                <h2 className="text-3xl !leading-tight text-pretty">
                  Kami sampai tepat waktu sampai tujuan kamu
                </h2>

                <p className="mt-9 text-foreground/60 !leading-relaxed">
                  Kami selalu mencoba sampai tujuan yang kamu inginkan tepat
                  waktu. Mengusahakan yang terbaik untuk kepuasan kamu di setiap
                  perjalanan.
                </p>
              </div>

              <picture className="relative overflow-hidden rounded-2xl w-1/2 h-[493px]">
                <Image
                  src="https://images.unsplash.com/photo-1631035012469-751baca1d4a0?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Feature Image"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </picture>
            </div>

            <div className="flex items-center gap-20 cursor-pointer">
              <picture className="relative overflow-hidden rounded-2xl w-1/2 h-[493px]">
                <Image
                  src="https://images.unsplash.com/photo-1705374104830-bbb99e8b77f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Feature Image"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </picture>

              <div className="flex flex-col w-1/2">
                <h2 className="text-3xl !leading-tight text-pretty">
                  Tanpa minimal biaya, selalu bisa membantu
                </h2>

                <p className="mt-9 text-foreground/60 !leading-relaxed">
                  Kami selalu ingin membantu kemanapun kamu mau tanpa batas dan
                  minimal biaya. Kami selalu bisa kapanpun kamu mau. Walaupun
                  hanya untuk sedikit biaya.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-20 cursor-pointer">
              <div className="flex flex-col w-1/2">
                <h2 className="text-3xl !leading-tight text-pretty">
                  Supir berpengalaman dan perjalanan yang aman
                </h2>

                <p className="mt-9 text-foreground/60 !leading-relaxed">
                  Setiap supir memiliki pengalaman dalam mengendarai mobil, bus.
                  Sehingga kamu akan aman tanpa harus takut dengan insiden di
                  perjalanan.
                </p>
              </div>

              <picture className="relative overflow-hidden rounded-2xl w-1/2 h-[493px]">
                <Image
                  src="https://images.unsplash.com/photo-1620400588895-9b3c4ae9bdb0?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Feature Image"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
