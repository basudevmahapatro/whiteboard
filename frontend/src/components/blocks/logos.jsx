import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiSocketdotio } from "react-icons/si";

export const Logos = () => {
  const stack = [
    { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Node.js", Icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Express", Icon: SiExpress, color: "text-foreground" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "WebSockets", Icon: SiSocketdotio, color: "text-foreground" },
  ];

  return (
    <section className="pb-28 lg:pb-32 overflow-hidden bg-muted/30">
      <div className="container space-y-10 lg:space-y-16 py-12">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Built on a modern, high-performance tech stack.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground mt-2 inline-block">
              Ensuring pixel-perfect state persistence and lightning-fast multiplayer.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Desktop static version */}
          <div className="hidden md:block w-full max-w-5xl">
            <div className="flex items-center justify-between gap-8 flex-wrap">
              {stack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-3 group cursor-default">
                  <div className="w-20 h-20 flex items-center justify-center bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl shadow-sm group-hover:shadow-md group-hover:border-primary/40 transition-all">
                    <tech.Icon className={cn("w-10 h-10 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110", tech.color)} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden w-full">
            {(() => {
              let MarqueeComponent = Marquee;
              if (Marquee && Marquee.default) {
                MarqueeComponent = Marquee.default;
              }
              if (MarqueeComponent && typeof MarqueeComponent === 'object' && MarqueeComponent.render) {
                MarqueeComponent = MarqueeComponent.render;
              }
              return (
                <MarqueeComponent pauseOnHover className="py-4">
                  {stack.map((tech, index) => (
                    <div key={index} className="mx-6 flex flex-col items-center gap-2">
                      <div className="w-16 h-16 flex items-center justify-center bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl shadow-sm">
                        <tech.Icon className={cn("w-8 h-8 opacity-70", tech.color)} />
                      </div>
                    </div>
                  ))}
                </MarqueeComponent>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};