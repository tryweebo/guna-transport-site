'use client'

import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import data from './landing-data.json'
import { BenefitData, BenefitItem } from './benefit-item'
import { motion } from 'motion/react'

const benefits = data.benefits as BenefitData[]

export function BenefitSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36" id="benefits">
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
        <SectionLabel>Kenapa harus pilih kami</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Banyak keuntungan menunggu di perjalanan bersama kami
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Kami menyediakan transportasi dan layanan untuk setiap keperluan kamu.
          Banyak keuntungan bekerja bersama kami dan nikmati perjalanan
        </p>

        <div className="flex items-center mt-36">
          <div className="flex flex-col gap-20 mx-auto w-full tablet:w-8/12">
            {benefits.map((benefit, index) => (
              <BenefitItem data={benefit} position={index + 1} key={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
