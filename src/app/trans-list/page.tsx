import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { TransportationSection } from '@features/trans-list'

export const metadata: Metadata = {
  title: 'Jenis Transportasi Kami',
  description: 'Lihat jenis dan model transportasi kami',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Jenis Transportasi Kami',
    description: 'Lihat jenis dan model transportasi kami',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Jenis Transportasi Kami',
    description: 'Lihat jenis dan model transportasi kami',
  },
}

export default function PrivacyPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <TransportationSection />
    </div>
  )
}
