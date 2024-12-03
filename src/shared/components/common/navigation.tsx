import { mergeClass } from '@shared/utils/helper'
import Link from 'next/link'
import * as React from 'react'

type NavigationItemProps = {
  children: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
  className?: string
}

export function NavigationItem({
  children,
  href,
  target,
  className,
}: NavigationItemProps): React.ReactElement {
  return (
    <li className="flex items-center">
      <Link
        href={href}
        target={target}
        className={mergeClass(
          'font-medium text-sm !leading-none transition-all duration-300 hover:-translate-y-1 text-foreground',
          className,
        )}
      >
        {children}
      </Link>
    </li>
  )
}
