import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [{
  title: "General & Features",
  questions: [{
    question: "How is live collaboration handled?",
    answer: "Through dedicated WebSocket rooms linked to your canvas ID."
  }, {
    question: "Can anyone see my comments?",
    answer: "No, comments are strictly restricted to the canvas owner and authorized shared users via backend middleware."
  }, {
    question: "Are my drawings saved automatically?",
    answer: "Yes, serialized state is persisted directly to MongoDB."
  }, {
    question: "Can I export my work?",
    answer: "Yes, you can export any canvas instantly as a PNG."
  }]
}];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2
}) => {
  return (
    <section id="faq" className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto flex flex-col gap-12 max-w-3xl items-center", className2)}>
          <div className="space-y-4 text-center">
            {headerTag === "h1" ? (
              <h1 className="text-3xl tracking-tight md:text-5xl lg:text-6xl font-bold">
                FAQs
              </h1>
            ) : (
              <h2 className="text-3xl tracking-tight md:text-5xl lg:text-6xl font-bold">
                FAQs
              </h2>
            )}
          </div>

          <div className="w-full text-left">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="w-full">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger className="text-lg md:text-xl font-semibold text-left">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};