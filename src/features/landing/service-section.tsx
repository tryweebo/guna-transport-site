import { SectionLabel } from '@shared/components/common/section-label'
import Image from 'next/image'
import * as React from 'react'

const services = [
  {
    image:
      'https://images.unsplash.com/photo-1678875922927-0ef08326ee3d?q=80&w=2770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Upacara adat',
  },
  {
    image:
      'https://images.unsplash.com/photo-1571589246138-60dc080e4c09?q=80&w=2322&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Liburan',
  },
  {
    image:
      'https://images.unsplash.com/photo-1625756598235-b9553edbe17e?q=80&w=2734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Pernikahan',
  },
  {
    image:
      'https://images.unsplash.com/photo-1591825926827-bbf73deb9fb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ajar ajar (Pengabenan)',
  },
]

const locations: string[] = ['Jawa', 'Bali', 'Lombok']

interface ServiceItemProps {
  data: {
    image: string
    title: string
  }
}

function ServiceItem({ data }: ServiceItemProps): React.ReactElement {
  const { image, title } = data
  return (
    <div className="flex flex-col col-span-1 cursor-pointer transition-all duration-300 hover:-translate-y-1">
      <picture className="relative overflow-hidden rounded-2xl w-full h-[452px]">
        <Image
          src={image}
          alt="Image"
          fill
          className="object-cover transition-all duration-500 hover:scale-105"
        />
      </picture>

      <span className="text-lg font-semibold !leading-none mt-6">{title}</span>
    </div>
  )
}

interface ServiceLocationItemProps {
  children: React.ReactNode
}

function ServiceLocationItem({
  children,
}: ServiceLocationItemProps): React.ReactElement {
  return (
    <span className="h-14 px-7 rounded-full bg-surface border border-border flex justify-center items-center font-semibold transition-all duration-300 hover:scale-95 cursor-pointer">
      {children}
    </span>
  )
}

export function ServiceSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36">
      <div className="flex flex-col items-center container mx-auto px-5 tablet:px-0">
        <SectionLabel>Pelayanan & paket perjalanan</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Layanan transportasi untuk berbagai keperluan
        </h2>

        <p className="text-foreground/60 !leading-relaxed w-full tablet:w-6/12 text-center mt-10 tablet:px-10">
          Kami menyediakan paket pelayanan untuk berbagai keperluan kamu untuk
          transportasi khusus untuk bali, jawa dan lombok
        </p>

        <div className="flex items-center mt-16 gap-4">
          {locations.map((location, index) => (
            <ServiceLocationItem key={index}>{location}</ServiceLocationItem>
          ))}
        </div>

        <div className="flex mt-36 w-full">
          <div className="grid grid-cols-4 gap-4 w-10/12 mx-auto">
            {services.map((item, index) => (
              <ServiceItem data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
