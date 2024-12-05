'use client'

import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import data from './landing-data.json'
import { ServiceData, ServiceItem } from './service-item'
import { ServiceLocationItem } from './service-location-item'
import { motion } from 'motion/react'

const locations = data.serviceLocations as string[]
const services = data.services as ServiceData[]

export function ServiceSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36" id="services">
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
        <SectionLabel>Pelayanan & paket perjalanan</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Layanan transportasi untuk berbagai keperluan
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Kami menyediakan paket pelayanan untuk berbagai keperluan kamu untuk
          transportasi khusus untuk bali, jawa dan lombok
        </p>

        <div className="flex flex-wrap items-center mt-10 tablet:mt-16 gap-4">
          {locations.map((location, index) => (
            <ServiceLocationItem key={index}>{location}</ServiceLocationItem>
          ))}
        </div>

        <div className="flex mt-16 tablet:mt-36 w-full">
          <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4 gap-y-10 tablet:gap-y-16 w-full tablet:w-10/12 mx-auto">
            {services.map((item, index) => (
              <ServiceItem data={item} key={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
