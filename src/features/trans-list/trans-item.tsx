import { Button } from '@shared/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

export interface TransportationData {
  image: string
  title: string
  description: string
  items: string[]
}

interface TransportationItemProps {
  data: TransportationData
}

export function TransportationItem({
  data,
}: TransportationItemProps): React.ReactElement {
  const { image, title, description, items } = data

  return (
    <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-10 group cursor-pointer">
      <div className="flex tablet:w-5/12 border box-border p-1 rounded-2xl">
        <picture className="relative overflow-hidden rounded-xl h-[240px] tablet:h-[500px] w-full">
          <Image
            src={image}
            fill
            alt={title}
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />
        </picture>
      </div>

      <div className="flex flex-col p-3 tablet:w-6/12">
        <h3 className="text-xl font-semibold !leading-tight mt-6">{title}</h3>

        <p className="text-foreground/60 !leading-relaxed mt-4 text-sm">
          {description}
        </p>

        <ul className="flex flex-col mt-9 ml-3 pb-5 gap-1">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2 py-1 text-sm !leading-tight">
              <i className="fi fi-sr-check-circle text-sm text-green-600" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex mt-14">
          <Button
            variant={'secondary'}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <Link href={'/contact'}>Pesan sekarang</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
