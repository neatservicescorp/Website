"use client";

import { Accordion, AccordionItem } from "@heroui/react";

type Props = {
  faqs: { question: string; answer: string }[];
};

export default function FinanceFAQ({ faqs }: Props) {
  return (
    <Accordion
      variant="splitted"
      className="px-0 gap-3"
      itemClasses={{
        base: "shadow-sm border border-gray-200",
        title: "font-cocogoose font-semibold text-black",
        content: "font-cocogoose text-gray-600 pb-4",
      }}
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.question}
          aria-label={faq.question}
          title={faq.question}
        >
          {faq.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
