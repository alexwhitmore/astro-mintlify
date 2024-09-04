import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

interface AccordionItemType {
  trigger: string
  content: string
}

interface DocsAccordionProps {
  items: AccordionItemType[]
}

const DocsAccordion: React.FC<DocsAccordionProps> = ({ items }) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full border rounded-xl divide-y'>
      {items.map((item, index) => (
        <AccordionItem
          key={`item-${index + 1}`}
          value={`item-${index + 1}`}
          className={`
            ${index === 0 ? 'rounded-t-xl overflow-hidden' : ''}
            ${index === items.length - 1 ? 'rounded-b-xl overflow-hidden' : ''}
          `}>
          <AccordionTrigger
            className={`
              px-4 hover:bg-muted
              ${index === 0 ? 'rounded-t-xl' : ''}
              ${index === items.length - 1 ? 'rounded-b-xl' : ''}
            `}>
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className='px-4'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

// const DocsAccordion = () => {
//   return (
//     <Accordion
//       type='single'
//       collapsible
//       className='w-full border rounded-xl divide-y'>
//       <AccordionItem value='item-1'>
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
// <AccordionContent>
//   Yes. It adheres to the WAI-ARIA design pattern.
// </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value='item-2'>
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value='item-3'>
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It's animated by default, but you can disable it if you prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   )
// }

export default DocsAccordion
