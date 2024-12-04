import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import { MomentData, MomentItem } from './moment-item'
import data from './moments-data.json'

const moments = data.moments as MomentData[]

export function MomentSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36">
      <div className="flex flex-col items-center container mx-auto px-5 tablet:px-0">
        <SectionLabel>Moment- Catatan perjalanan</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Catatan perjalanan dan kenangan indah bersama
        </h2>

        <div className="flex items-center mt-16 tablet:mt-24 w-full">
          <div className="grid grid-cols-2 tablet:grid-cols-4 gap-3 gap-y-14 w-full tablet:w-10/12 m-auto">
            {moments.map((moment, index) => (
              <MomentItem moment={moment} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
