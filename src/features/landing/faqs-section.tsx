'use client'

import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import { FAQData, FAQItem } from './faq-item'
import { Accordion } from '@shared/components/ui/accordion'
import landingData from './landing-data.json'
import { motion } from 'motion/react'

const faqs = landingData.faqs as FAQData[]

export function FAQsSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36" id="faqs">
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
        <SectionLabel>Sering ditanyakan</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Pertanyaan yang sering di tanyakan oleh pelanggan
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Kamu punya pertanyaan? coba lihat dibawah ini dulu. Banyak hal yang
          ditanyakan oleh beberapa pelanggan kami.
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
          className="flex items-center justify-center w-full mt-16 target:mt-24"
        >
          <Accordion
            type="single"
            collapsible
            className="flex flex-col w-full tablet:w-5/12 gap-3"
          >
            {faqs.map((item, index) => (
              <FAQItem data={item} position={index + 1} key={index} />
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  )
}
