import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import * as fonts from '@shared/fonts'
import config from '@shared/libs/config'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { PosthogProvider } from '@shared/providers/posthog-provider'
import { AnimationProvider } from '@shared/providers/animation-provider'
import { Header } from '@shared/components/common/header'
import { Footer } from '@shared/components/common/footer'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Guna Transport',
  description:
    'Melayani transportasi untuk upacara, liburan, pernikahan dan event jawa, bali, lombok harga terjangkau',
  applicationName: 'Guna Transport',
  alternates: {},
  keywords: [
    'Guna Transport',
    'Transportasi',
    'Transportasi jawa, bali, lombok',
    'Transportasi murah dan terjangkau',
    'Transportasi ajar ajar',
    'Upacara',
    'Liburan',
    'Pernikahan',
    'Acara',
  ],
  authors: [
    { name: 'Nyoman Sunima', url: 'https://nyomansunima.one' },
    { name: 'Weebo', url: 'https://tryweebo.one' },
  ],
  publisher: 'Nyoman Sunima',
  creator: 'Nyoman Sunima',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Guna Transport',
    description:
      'Melayani transportasi untuk upacara, liburan, pernikahan dan event jawa, bali, lombok harga terjangkau',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Guna Transport',
    description:
      'Melayani transportasi untuk upacara, liburan, pernikahan dan event jawa, bali, lombok harga terjangkau',
  },
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${fonts.manrope.variable}`}
      suppressHydrationWarning
    >
      <PosthogProvider>
        <AnimationProvider>
          <body suppressHydrationWarning>
            <Header />
            {children}
            <Footer />
          </body>
        </AnimationProvider>
      </PosthogProvider>
    </html>
  )
}
