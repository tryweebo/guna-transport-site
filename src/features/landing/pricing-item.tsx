import { mergeClass } from '@shared/utils/helper'
import * as React from 'react'

export interface PricingData {
  title: string
  description: string
  features: string[]
}

interface PricingItemProps {
  data: PricingData
  className?: string
}

export function PricingItem({
  data,
  className,
}: PricingItemProps): React.ReactElement {
  const { title, description, features } = data

  return (
    <div
      className={mergeClass(
        'flex col-span-1 bg-surface group hover:bg-accent hover:text-accent-foreground border border-border rounded-2xl p-1 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-95',
        className,
      )}
    >
      <div className="flex flex-col p-4 border box-border rounded-xl">
        <h3 className="text-lg !leading-tight font-semibold">{title}</h3>
        <p className="text-sm !leading-relaxed opacity-60 mt-4">
          {description}
        </p>

        <ul className="flex flex-col gap-3 mt-8 ml-3 pb-6">
          {features.map((feature, index) => (
            <li
              className="flex items-center gap-1 text-sm opacity-60"
              key={index}
            >
              <i className="fi fi-rr-badge-check" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
