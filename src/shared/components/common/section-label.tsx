import { mergeClass } from '@shared/utils/helper'
import * as React from 'react'

type SectionLabelProps = {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({
  children,
  className,
}: React.PropsWithRef<SectionLabelProps>): React.ReactElement {
  return (
    <span
      className={mergeClass(
        'font-semibold text-xs text-foreground/60 rounded-full border border-border px-4 py-2 bg-surface transition-all duration-300 hover:scale-95 cursor-pointer',
        className,
      )}
    >
      {children}
    </span>
  )
}
