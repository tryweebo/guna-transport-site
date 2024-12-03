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
    <AccordionItem value={`item-${position}`}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
