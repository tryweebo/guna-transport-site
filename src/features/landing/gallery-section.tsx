'use client'

import { Marquee } from '@shared/components/animation/marquee'
import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import landingData from './landing-data.json'
import { HeroGalleryItem } from './hero-gallery-item'
import { Button } from '@shared/components/ui/button'
import Link from 'next/link'
import { motion } from 'motion/react'

const heroGalleries = landingData.heroGalleries as string[]

export function GallerySection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          type: 'spring',
          ease: 'linear',
        }}
        viewport={{ once: true, margin: '-200px 0px' }}
        className="flex flex-col items-center container mx-auto px-5 tablet:px-0"
      >
        <SectionLabel>Bagaimana kami diperjalanan</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Setiap kenangan bersama di perjalanan yang jauh
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Momen kami bersama pelanggan di setiap perjalanan dan tujuan. Kami
          mengabdikan semuanya untuk kamu lihat bagaimana kami berkerja
        </p>

        <div className="flex items-center mt-16">
          <Button
            className="transition-all duration-300 hover:scale-95"
            size={'lg'}
            asChild
          >
            <Link href={'/moments'}>Lihat moment lainnya</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          type: 'spring',
          ease: 'linear',
        }}
        viewport={{ once: true, margin: '-200px 0px' }}
        className="flex mt-36"
      >
        <div className="flex relative w-full">
          <Marquee pauseOnHover>
            {heroGalleries.map((image, index) => (
              <HeroGalleryItem image={image} position={index + 1} key={index} />
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  )
}
