import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shared/components/ui/accordion'
import * as React from 'react'

export interface FAQData {
  question: string
  answer: string
}

export interface FAQItemProps {
  data: FAQData
  position: number
}

export function FAQItem({
  data: { answer, question },
  position,
}: FAQItemProps): React.ReactElement {
  return (
    <AccordionItem
      value={`item-${position}`}
      className="transition-all duration-300 hover:-translate-y-1"
    >
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
