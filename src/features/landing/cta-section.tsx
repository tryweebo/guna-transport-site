import { SectionLabel } from '@shared/components/common/section-label'
import { Button } from '@shared/components/ui/button'
import Link from 'next/link'
import * as React from 'react'

export function CTASection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36" id="get-started">
      <div className="flex flex-col items-center container mx-auto px-5 tablet:px-0">
        <SectionLabel>Pesan & konsultasi</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Pesan transportasi sekarang juga dengan mudah dan murah
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Ayo pesan sekarang atau tanya tanya dulu mengenai biaya dan mobil atau
          kendaraan yang kamu perlukan. Kami mencoba melayani dengan maksimal.
        </p>

        <div className="flex flex-wrap items-center justify-center mt-20 gap-4">
          <Button
            className="transition-all duration-300 hover:scale-95"
            size={'lg'}
            asChild
          >
            <Link href={'/contact'}>Pesan sekarang</Link>
          </Button>
          <Button
            className="transition-all duration-300 hover:scale-95"
            size={'lg'}
            variant={'outline'}
            asChild
          >
            <Link href={'/trans-list'}>Lihat daftar kendaraan</Link>
          </Button>
          <Button
            className="transition-all duration-300 hover:scale-95"
            size={'lg'}
            variant={'secondary'}
            asChild
          >
            <Link href={'/contact'}>Tanya tanya dulu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
