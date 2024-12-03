import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import {
  BenefitSection,
  CTASection,
  FAQsSection,
  GallerySection,
  HeroSection,
  PricingSection,
  ServiceSection,
  TestimonialSection,
} from '@features/landing'

export const metadata: Metadata = {
  title: 'Guna Transport',
  description:
    'Melayani transportasi untuk upacara, liburan, pernikahan dan event jawa, bali, lombok harga terjangkau',
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
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BenefitSection />
      <ServiceSection />
      <GallerySection />
      <TestimonialSection />
      <PricingSection />
      <FAQsSection />
      <CTASection />
    </div>
  )
}
