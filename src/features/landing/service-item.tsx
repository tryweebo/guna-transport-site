import Image from 'next/image'
import * as React from 'react'

export interface ServiceData {
  image: string
  title: string
}

interface ServiceItemProps {
  data: ServiceData
}

export function ServiceItem({ data }: ServiceItemProps): React.ReactElement {
  const { image, title } = data
  return (
    <div className="flex flex-col col-span-1 cursor-pointer transition-all duration-300 hover:-translate-y-1">
      <picture className="relative overflow-hidden rounded-2xl w-full h-[240px] tablet:h-[452px]">
        <Image
          src={image}
          alt="Image"
          fill
          className="object-cover transition-all duration-500 hover:scale-105"
        />
      </picture>

      <span className="text-base tablet:text-lg font-semibold !leading-none mt-6">
        {title}
      </span>
    </div>
  )
}
