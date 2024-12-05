import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { HeroSection } from '@features/about'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Cari tahu siapa Guna Transport dan apa yang kami layani',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Tentang Kami',
    description: 'Cari tahu siapa Guna Transport dan apa yang kami layani',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Tentang Kami',
    description: 'Cari tahu siapa Guna Transport dan apa yang kami layani',
  },
}

export default function PrivacyPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <HeroSection />
    </div>
  )
}
