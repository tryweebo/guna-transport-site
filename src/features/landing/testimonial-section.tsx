'use client'

import { Marquee } from '@shared/components/animation/marquee'
import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import data from './landing-data.json'
import { TestimonialData, TestimonialItem } from './testimonial-item'
import { motion } from 'motion/react'

const testimonials = data.testimonials as TestimonialData[]

export function TestimonialSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36" id="testimonials">
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
        <SectionLabel>Ulasan dari pelanggan</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Apa yang meraka rasakan bersama kami
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Kami memberikan layanan yang memuaskan, kamu bisa melihat apa yang
          pelanggan kita katakan mengenai perjalanan mereka.
        </p>
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
        <div className="flex flex-col relative w-full">
          <Marquee pauseOnHover>
            {testimonials.map((item, index) => (
              <TestimonialItem data={item} key={index} />
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse>
            {testimonials.map((item, index) => (
              <TestimonialItem data={item} key={index} />
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  )
}
