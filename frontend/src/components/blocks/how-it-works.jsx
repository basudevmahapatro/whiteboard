import { Plus, Users, Save } from "lucide-react";
import { cn } from "@/lib/utils";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Create a Room",
      description: "Initialize a new canvas board. A unique canvasId is generated and a dedicated WebSocket room is instantly spun up for you.",
      icon: Plus,
    },
    {
      title: "Invite & Draw",
      description: "Share the room URL. Authorized users can join the session, see live cursors, and collaborate in real-time.",
      icon: Users,
    },
    {
      title: "Auto-Save & Export",
      description: "All geometric state is serialized and persisted to MongoDB automatically. Export to PNG with a single click.",
      icon: Save,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How Drawkitect Works
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From an empty canvas to a fully preserved team diagram in three simple steps.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-[45px] left-0 right-0 h-0.5 bg-border hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-6 z-10 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-primary">
                    <Icon className="w-10 h-10 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed max-w-[320px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
