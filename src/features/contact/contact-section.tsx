import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import { ContactData, ContactItem } from './contact-item'
import data from './contact-data.json'
import { MapEmbed } from './map-embed'

const links = data.links as ContactData[]

export function ContactSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36">
      <div className="flex flex-col items-center container mx-auto px-5 tablet:px-0">
        <SectionLabel>Hubungi kami</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Pesan transportasi atau tanya tanya dulu juga bisa
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Mau pesan transportasi sekarang sangat mudah. Ragu?, kamu bisa tanya
          tanya dulu mengenai jenis mobile, biaya atau punya sesuatu untuk
          ditanyakan.
        </p>

        <div className="flex items-center mt-20">
          <div className="grid grid-cols-1 tablet:grid-cols-3 w-full tablet:w-10/12 mx-auto gap-3">
            {links.map((item, index) => (
              <ContactItem data={item} key={index} />
            ))}
          </div>
        </div>

        <div className="flex w-full mt-36">
          <div className="flex mx-auto w-10/12">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}
