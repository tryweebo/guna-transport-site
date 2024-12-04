'use client'

import * as React from 'react'

export interface ContactData {
  icon: string
  title: string
  description: string
  url: string
}

interface ContactItemProps {
  data: ContactData
}

export function ContactItem({ data }: ContactItemProps): React.ReactElement {
  const { icon, title, description, url } = data
  const isValidURL = url.match(/^https?:\/\//)

  function handleClick() {
    if (isValidURL) {
      window.open(url, '_blank')
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => {})
        .catch(() => {})
    }
  }

  return (
    <div
      className="flex bg-surface border border-border rounded-2xl p-1 cursor-pointer transition-all duration-300 hover:scale-95"
      onClick={handleClick}
    >
      <div className="flex flex-col border border-border rounded-xl p-4">
        <div className="flex items-center gap-2">
          <i className={`${icon} text-base`} />
          <h3 className="font-semibold text-base !leading-tight">{title}</h3>
        </div>

        <p className="text-sm text-foreground/60 !leading-relaxed mt-4">
          {description}
        </p>
      </div>
    </div>
  )
}
