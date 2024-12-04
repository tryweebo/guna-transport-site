import * as React from 'react'

export interface TestimonialData {
  name: string
  location: string
  date: string
  quote: string
}

export interface TestimonialItemProps {
  data: TestimonialData
}

export function TestimonialItem({
  data,
}: TestimonialItemProps): React.ReactElement {
  const { date, location, name, quote } = data

  return (
    <div className="flex bg-surface border border-border rounded-2xl gap-4 w-[380px] h-[200px] p-1 text-sm cursor-pointer group transition-all duration-300 hover:scale-95">
      <div className="flex flex-col h-full w-full border border-border rounded-xl p-3">
        <div className="flex flex-col">
          <h3 className="flex-grow !leading-tight font-semibold text-base">
            {name}
          </h3>

          <span className="text-foreground/60">{location}</span>
        </div>

        <p className="flex flex-col text-foreground/60 !leading-relaxed mt-4">
          {quote}
        </p>

        <div className="flex justify-end mt-5">
          <span className="text-sm !leading-tight text-foreground/50 group-hover:text-foreground ">
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}
