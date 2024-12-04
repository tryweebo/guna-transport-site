import Image from 'next/image'
import * as React from 'react'

export interface MomentData {
  description: string
  image: string
}

interface MomentItemProps {
  moment: MomentData
}

export function MomentItem({ moment }: MomentItemProps): React.ReactElement {
  const { description, image } = moment

  return (
    <div className="flex flex-col col-span-1 group transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <picture className="relative w-full h-[240px] tablet:h-[360px] overflow-hidden rounded-xl">
        <Image src={image} fill alt="Gallery" className="object-cover" />
      </picture>

      <span className="mt-4 !leading-relaxed text-sm text-foreground/60">
        {description}
      </span>
    </div>
  )
}
