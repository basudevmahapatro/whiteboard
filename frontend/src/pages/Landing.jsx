import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/blocks/navbar';
import { Hero } from '@/components/blocks/hero';
import { Logos } from '@/components/blocks/logos';
import { Features } from '@/components/blocks/features';
import { HowItWorks } from '@/components/blocks/how-it-works';
import { FAQ } from '@/components/blocks/faq';
import { Footer } from '@/components/blocks/footer';

export default function Landing() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="drawkitect-ui-theme">
      <div className="landing-theme text-foreground bg-stone-100 dark:bg-stone-950 min-h-screen p-2 md:p-3 lg:p-4 xl:p-6 flex flex-col">
        <div className="flex-1 theme-wrapper flex flex-col font-sans rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-border/50">
          <Navbar />
          <main className="flex-1">
            <Hero />
            <Logos />
            <Features />
            <HowItWorks />
            <FAQ />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
