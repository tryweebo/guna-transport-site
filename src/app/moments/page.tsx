import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { MomentSection } from '@features/moments'

export const metadata: Metadata = {
  title: 'Moments',
  description: 'Catatan perjalanan dan gallery tours',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Moments',
    description: 'Catatan perjalanan dan gallery tours',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Moments',
    description: 'Catatan perjalanan dan gallery tours',
  },
}

export default function PrivacyPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <MomentSection />
    </div>
  )
}
