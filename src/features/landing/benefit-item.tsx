import { mergeClass } from '@shared/utils/helper'
import Image from 'next/image'
import * as React from 'react'
import { motion } from 'motion/react'

export interface BenefitData {
  title: string
  description: string
  image: string
}

export interface BenefitItemProps {
  data: BenefitData
  position: number
}

export function BenefitItem({
  data,
  position,
}: BenefitItemProps): React.ReactElement {
  const { title, description, image } = data
  const isReverse = position % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: 0.2,
        type: 'spring',
        ease: 'linear',
      }}
      viewport={{ once: true, margin: '-100px 0px' }}
      className={mergeClass(
        'flex flex-col tablet:flex-row items-center gap-10 tablet:gap-20 cursor-pointer',
        isReverse && 'tablet:flex-row-reverse',
      )}
    >
      <picture className="relative overflow-hidden rounded-2xl w-full tablet:w-1/2 h-[200px] tablet:h-[493px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </picture>

      <div className="flex flex-col w-full tablet:w-1/2">
        <h2 className="text-2xl tablet:text-3xl !leading-tight text-pretty">
          {title}
        </h2>

        <p className="mt-9 text-foreground/60 !leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
