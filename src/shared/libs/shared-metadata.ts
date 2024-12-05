import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

export const openGraph: OpenGraph = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1733386577548/ce844eb8-441e-4e60-847f-1135107a405c.png',
  ],
  locale: 'en_US',
  type: 'website',
  siteName: 'Guna Transport',
}

export const twitter: Twitter = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1733386577548/ce844eb8-441e-4e60-847f-1135107a405c.png',
  ],
  card: 'summary_large_image',
  creator: '@nyomansunima',
  site: 'Guna Transport',
}
