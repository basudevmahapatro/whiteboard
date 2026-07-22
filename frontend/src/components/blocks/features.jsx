import { motion } from "motion/react";
import { MousePointer2, MessageSquare, Pen, Square, Circle, Lock, Shield, Key } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Visual Components ---

const RealTimeCollabVisual = () => (
  <div className="relative w-full h-full min-h-[200px] bg-muted/30 rounded-xl overflow-hidden flex items-center justify-center border bg-dot-pattern" style={{ backgroundImage: 'radial-gradient(circle, var(--color-border) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
    <motion.div 
      className="absolute flex flex-col items-center pointer-events-none"
      animate={{ x: [-50, 50, 0, -50], y: [-20, 20, 50, -20] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <MousePointer2 className="w-5 h-5 text-blue-500 fill-blue-500" />
      <div className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm mt-1">Alex</div>
    </motion.div>
    <motion.div 
      className="absolute flex flex-col items-center pointer-events-none"
      animate={{ x: [40, -40, 20, 40], y: [40, 0, -40, 40] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <MousePointer2 className="w-5 h-5 text-orange-500 fill-orange-500" />
      <div className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm mt-1">Sam</div>
    </motion.div>
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,100 Q100,50 150,100 T250,100" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
      <circle cx="150" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500" strokeDasharray="4 4" />
    </svg>
  </div>
);

const SpatialCommentingVisual = () => (
  <div className="relative w-full h-full min-h-[200px] bg-muted/30 rounded-xl overflow-hidden flex items-center justify-center border">
    <motion.div 
      className="relative flex items-center justify-center"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute w-12 h-12 bg-blue-500/20 rounded-full animate-ping" />
      <div className="relative bg-background border shadow-lg rounded-xl p-3 flex gap-3 items-start w-48">
        <MessageSquare className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
        <div className="space-y-1.5 w-full">
          <div className="h-2 w-12 bg-muted rounded" />
          <div className="h-2 w-full bg-muted rounded" />
          <div className="h-2 w-4/5 bg-muted rounded" />
        </div>
      </div>
    </motion.div>
  </div>
);

const AdvancedEngineVisual = () => (
  <div className="relative w-full h-full min-h-[200px] bg-muted/30 rounded-xl overflow-hidden flex flex-col items-center justify-center border gap-4">
    <div className="bg-background border shadow-md rounded-lg flex items-center p-1 gap-1">
      <div className="p-2 bg-muted rounded cursor-pointer"><MousePointer2 className="w-4 h-4 text-foreground" /></div>
      <div className="p-2 hover:bg-muted rounded cursor-pointer transition-colors"><Pen className="w-4 h-4 text-muted-foreground" /></div>
      <div className="p-2 hover:bg-muted rounded cursor-pointer transition-colors"><Square className="w-4 h-4 text-muted-foreground" /></div>
      <div className="p-2 hover:bg-muted rounded cursor-pointer transition-colors"><Circle className="w-4 h-4 text-muted-foreground" /></div>
    </div>
    <div className="w-32 h-32 border-2 border-dashed border-foreground/30 rounded-lg flex items-center justify-center relative">
       <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-blue-500 rounded-sm" />
       <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-500 rounded-sm" />
       <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-blue-500 rounded-sm" />
       <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-blue-500 rounded-sm" />
    </div>
  </div>
);

const StatePersistenceVisual = () => (
  <div className="relative w-full h-full min-h-[200px] bg-muted/30 rounded-xl overflow-hidden flex items-center justify-center border font-mono text-[10px] text-muted-foreground p-4">
    <div className="w-1/2 h-full flex flex-col justify-center gap-1 border-r pr-2 border-dashed">
      <div>{"{"}</div>
      <div className="pl-2">"type": "rectangle",</div>
      <div className="pl-2">"x": 120, "y": 45,</div>
      <div className="pl-2">"width": 200,</div>
      <div className="pl-2">"height": 100,</div>
      <div className="pl-2">"fill": "#3b82f6"</div>
      <div>{"}"}</div>
    </div>
    <div className="w-1/2 h-full flex items-center justify-center pl-2">
      <motion.div 
        className="w-20 h-10 bg-blue-500 rounded-sm shadow-md"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  </div>
);

const CanvasDashboardVisual = () => (
  <div className="relative w-full h-full min-h-[200px] bg-muted/30 rounded-xl overflow-hidden border p-4 grid grid-cols-2 gap-3">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-background border rounded-lg p-2 flex flex-col gap-2 shadow-sm">
        <div className="w-full h-12 bg-muted rounded flex items-center justify-center">
           <Square className="w-4 h-4 text-muted-foreground/30" />
        </div>
        <div className="h-2 w-3/4 bg-muted rounded" />
        <div className="h-2 w-1/2 bg-muted rounded" />
      </div>
    ))}
  </div>
);

const RobustSecurityVisual = () => (
  <div className="relative w-full h-full min-h-[200px] bg-muted/30 rounded-xl overflow-hidden flex items-center justify-center border">
    <div className="relative">
      <motion.div 
        className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="relative bg-background border shadow-xl rounded-2xl p-6 flex flex-col items-center gap-4">
        <Lock className="w-8 h-8 text-green-500" />
        <div className="flex gap-2">
          <div className="flex items-center gap-1 bg-green-500/10 text-green-600 text-[10px] px-2 py-1 rounded-full font-medium border border-green-500/20">
            <Shield className="w-3 h-3" /> Admin
          </div>
          <div className="flex items-center gap-1 bg-blue-500/10 text-blue-600 text-[10px] px-2 py-1 rounded-full font-medium border border-blue-500/20">
            <Key className="w-3 h-3" /> Editor
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Component ---

export const Features = () => {
  const featureList = [
    {
      title: "Real-Time Collaboration",
      description: "Dedicated WebSocket rooms (via canvasId) ensure lightning-fast synchronization. Draw together with teammates seamlessly with live cursor tracking.",
      Visual: RealTimeCollabVisual,
      className: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Spatial Commenting System",
      description: "Pin comments to specific (x, y) coordinates on the canvas. Resolve discussions exactly where the context lives.",
      Visual: SpatialCommentingVisual,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Robust Security",
      description: "JWT authentication and backend middleware restrict comments and canvas access to owners and authorized users only.",
      Visual: RobustSecurityVisual,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Advanced Whiteboard Engine",
      description: "Powered by Rough.js and Perfect-Freehand for an authentic, responsive hand-drawn feel.",
      Visual: AdvancedEngineVisual,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Intelligent State Persistence",
      description: "Complex graphics are serialized and instantly persisted to MongoDB. Never lose your creative momentum.",
      Visual: StatePersistenceVisual,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Dynamic Canvas Dashboard",
      description: "Organize, manage, and retrieve all your saved canvases through an intuitive grid dashboard.",
      Visual: CanvasDashboardVisual,
      className: "lg:col-span-2 lg:row-span-1",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-foreground mb-2">
            Powerful Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything you need to map out your ideas.
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Drawkitect provides a comprehensive suite of tools designed for seamless visual collaboration and diagramming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {featureList.map((feature, i) => (
            <div 
              key={i} 
              className={cn(
                "group relative bg-card border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col gap-4",
                feature.className
              )}
            >
              <div className="flex-1 flex flex-col justify-center">
                <feature.Visual />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};