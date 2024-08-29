import { type TStepItem } from "../CheckoutHome";
import { ArrowLeft } from "lucide-react";
import TransportInfo from "./TransportInfo";
import AdressDetail from "./AdressDetail";

type TSubProps = {
  items: TStepItem[];
  starterTrigger: () => void;
  setSubSteps: React.Dispatch<React.SetStateAction<TStepItem[]>>;
};

const index = ({ starterTrigger, setSubSteps, items }: TSubProps) => {
  
  const nextAction = (activeStep?: TStepItem) => {
    setSubSteps((prev) => {
      const findIndex = prev.findIndex(
        (item) => item.title === activeStep?.title
      );
      const nextActive = prev[findIndex + 1];

      const finalUpdate: TStepItem[] = prev.map((item) => {
        if (item.title === activeStep?.title) {
          return { ...item, status: "finish" };
        }
        if (nextActive.title === item.title) {
          return { ...item, status: "process" };
        }
        return item;
      });
      localStorage.setItem('step-assets', JSON.stringify(finalUpdate))
      return finalUpdate;
    });
  };

  const activeStep = items.find((item) => item.status === "process");

  return (
    <div className="relative animate-slide-right-to-left">
      <div className="space-y-5">
        <div>
          <div className="font-medium text-lg">{activeStep?.title}</div>
          <div className="text-muted-foreground font-light">
            A counle more snecitics we want to det eventhing riaht.
          </div>
        </div>

        {activeStep?.title === "Transport" && (
          <TransportInfo
            toNext={() => nextAction(activeStep)}
            activeStep={activeStep}
          />
        )}

        {activeStep?.title === "Pickup" && <AdressDetail />}
      </div>

      <div
        onClick={() =>
          activeStep?.title === "Transport" ? starterTrigger() : null
        }
        className="absolute top-0 -left-12 w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary"
      >
        <ArrowLeft width={18} />
      </div>
    </div>
  );
};

export default index;
