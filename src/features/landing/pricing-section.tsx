'use client'

import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import data from './landing-data.json'
import { PricingData, PricingItem } from './pricing-item'
import { Button } from '@shared/components/ui/button'
import Link from 'next/link'
import { motion } from 'motion/react'

const plans = data.plans as PricingData[]

export function PricingSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36" id="plans">
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
        <SectionLabel>Paket & harga</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Harga dan paket yang ditawarkan untuk transportasi
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Kamu bisa lihat paket harga untuk perjalanan kamu, kami juga
          menawarkan paket kustom sesuai kebutuhan kamu. Jadi semuanya murah dan
          bisa didiskusikan.
        </p>

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
          className="flex items-center mt-16 tablet:mt-24 justify-center"
        >
          <div className="grid grid-cols-1 tablet:grid-cols-3 w-full tablet:w-10/12 gap-3">
            {plans.map((plan, index) => (
              <PricingItem data={plan} key={index} />
            ))}
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
          className="flex items-center mt-16"
        >
          <Button
            className="transition-all duration-300 hover:scale-95"
            size={'lg'}
            asChild
          >
            <Link href={'/contact'}>Tanya tanya dulu</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
