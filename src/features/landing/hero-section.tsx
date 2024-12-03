import { Marquee } from '@shared/components/animation/marquee'
import { SectionLabel } from '@shared/components/common/section-label'
import { Button } from '@shared/components/ui/button'
import Link from 'next/link'
import * as React from 'react'
import landingData from './landing-data.json'
import { HeroGalleryItem } from './hero-gallery-item'

const heroGalleries = landingData.heroGalleries as string[]

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36">
      <div className="flex flex-col items-center container mx-auto px-5 tablet:px-0">
        <SectionLabel>
          Yuk, konsultasi sebelum perjalanan, gratis loh
        </SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Transportasi untuk setiap perjalanan tanpa ribet
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Melayani transportasi umum untuk segala jenis keperluan seperti
          liburan, ajar ajar, upacara, pernikahan dan events di bali, jawa dan
          lombok tanpa ribet. Semuanya bisa diatur tanpa batas and minimal
          biaya.
        </p>

        <div className="flex items-center mt-16">
          <Button
            className="transition-all duration-300 hover:scale-95"
            size={'lg'}
            asChild
          >
            <Link href={'/contact'}>Pesan sekarang</Link>
          </Button>
        </div>
      </div>

      <div className="flex mt-36">
        <div className="flex relative w-full">
          <Marquee pauseOnHover>
            {heroGalleries.map((image, index) => (
              <HeroGalleryItem image={image} position={index + 1} key={index} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
