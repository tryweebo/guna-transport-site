import { mergeClass } from '@shared/utils/helper'
import Image from 'next/image'
import * as React from 'react'

type HeroGalleryItemProps = {
  image: string
  position: number
}

export function HeroGalleryItem({
  position,
  image,
}: React.PropsWithRef<HeroGalleryItemProps>): React.ReactElement {
  return (
    <picture
      className={mergeClass(
        'flex flex-col items-center justify-center relative overflow-hidden rounded-2xl  h-[356px] w-[250px] cursor-pointer transition-all duration-500 hover:scale-95',
        position % 2 === 1 && 'w-[173px] h-[265px]',
      )}
    >
      <Image
        src={image}
        alt="Gallery"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </picture>
  )
}
