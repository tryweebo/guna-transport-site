import config from '@shared/libs/config'
import { MetadataRoute } from 'next'

const BASE_URL = config.app.host

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/trans-list`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/moments`,
      lastModified: new Date().toISOString(),
    },
  ]
}
