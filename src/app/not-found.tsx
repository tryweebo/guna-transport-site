import { Button } from '@shared/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Tidak Ditemukan',
  description: 'Halaman yang Anda cari tidak ada atau sudah dihapus',
}

export default function NotFoundPage(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col items-center py-20 tablet:py-36 container mx-auto px-5 tablet:px-0">
        <div className="flex flex-col items-center w-8/12 text-center">
          <h1 className="!leading-tight text-3xl tablet:text-4xl text-center font-medium">
            Alamat Tidak Ditemukan
          </h1>

          <p className="mt-7 !leading-relaxed laptop:w-10/12 text-center text-foreground">
            Opps, terjadi kesalahan saat mengakses halaman yang Anda cari. Ini
            terjadi karena halaman yang Anda cari tidak ada atau sudah dihapus.
            Silakan kembali ke halaman utama.
          </p>

          <div className="mt-16">
            <Button
              asChild
              variant={'text'}
              size={'lg'}
              className="transition-all hover:scale-95"
            >
              <Link href={'/'}>
                Kembali ke beranda <i className="fi fi-rr-arrow-right" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
