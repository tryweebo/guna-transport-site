import { SectionLabel } from '@shared/components/common/section-label'
import * as React from 'react'
import { TransportationData, TransportationItem } from './trans-item'
import data from './trans-data.json'

const trans = data.list as TransportationData[]

export function TransportationSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 tablet:py-36">
      <div className="flex flex-col items-center container mx-auto px-5 tablet:px-0">
        <SectionLabel>Transportasi kami</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl font-medium mt-9 !leading-tight text-pretty tablet:w-7/12 text-center">
          Lihat dan pilih jenis transportasi untuk perjalanan selanjutnya
        </h2>

        <div className="flex items-center mt-16 tablet:mt-24 w-full">
          <div className="flex w-full tablet:w-9/12 mx-auto">
            <div className="flex flex-col gap-16">
              {trans.map((tran, index) => (
                <TransportationItem data={tran} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
