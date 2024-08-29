import { useState } from "react";
import { type StepItems } from "@/lib/ui/Stepper";
import { ArrowLeft } from "lucide-react";
import TransportInfo from "./TransportInfo";

const index = ({ starterTrigger }: { starterTrigger: () => void }) => {
  const [steps] = useState<StepItems["title"]>("Transport");

  return (
    <div className="relative animate-slide-right-to-left">
      <div className="space-y-5">
        <div>
          <div className="font-medium text-lg">{steps}</div>
          <div className="text-muted-foreground font-light">
            A counle more snecitics we want to det eventhing riaht.
          </div>
        </div>

        <TransportInfo />
      </div>

      <div
        onClick={() => (steps === "Transport" ? starterTrigger() : null)}
        className="absolute top-0 -left-12 w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary"
      >
        <ArrowLeft width={18} />
      </div>
    </div>
  );
};

export default index;
