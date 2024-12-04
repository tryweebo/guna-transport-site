import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { ContactSection } from '@features/contact'

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description:
    'Tanya tanya tentang mobil, harga atau konsultasi perjalan kamu semuanya gratis. Kami selalu ada',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Hubungi Kami',
    description:
      'Tanya tanya tentang mobil, harga atau konsultasi perjalan kamu semuanya gratis. Kami selalu ada',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Hubungi Kami',
    description:
      'Tanya tanya tentang mobil, harga atau konsultasi perjalan kamu semuanya gratis. Kami selalu ada',
  },
}

export default function ContactPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <ContactSection />
    </div>
  )
}
