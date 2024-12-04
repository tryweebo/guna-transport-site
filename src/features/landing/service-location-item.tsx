import * as React from 'react'

interface ServiceLocationItemProps {
  children: React.ReactNode
}

export function ServiceLocationItem({
  children,
}: ServiceLocationItemProps): React.ReactElement {
  return (
    <span className="h-14 px-7 rounded-full bg-surface border border-border flex justify-center items-center font-semibold transition-all duration-300 hover:scale-95 cursor-pointer">
      {children}
    </span>
  )
}
