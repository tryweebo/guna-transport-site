import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'

export function PricingSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36">
      <div className="flex flex-col items-center container mx-auto px-5 tablet:px-0">
        <SectionLabel>Paket & harga</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Harga dan paket yang ditawarkan untuk transportasi
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Kamu bisa lihat paket harga untuk perjalanan kamu, kami juga
          menawarkan paket kustom sesuai kebutuhan kamu. Jadi semuanya murah dan
          bisa didiskusikan.
        </p>

        <div className="flex items-center mt-16"></div>
      </div>
    </section>
  )
}
