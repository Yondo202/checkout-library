// import { Button } from "@/lib/ui";
import DetailCard from "./DetailCard";
import StarterSection from "./StarterSection";
import SubStepSection from "./sub_steps";
import Stepper from "../ui/Stepper";
import { Toaster } from 'sonner';
import { useEffect, useState } from "react";
import { cn } from "../ui/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export type TStepItem = {
  title: "Transport" | "Pickup" | "Delivery" | "Book shipment" | "Thank you";
  status: "wait" | "process" | "finish"; // | 'error'
  localKey: string;
};

export const StepAssets: TStepItem[] = [
  { title: "Transport", status: "process", localKey: "checkout-transport" },
  { title: "Pickup", status: "wait", localKey: "pickup" },
  { title: "Delivery", status: "wait", localKey: "delivery" },
  { title: "Book shipment", status: "wait", localKey: "book-shipment" },
  { title: "Thank you", status: "wait", localKey: "thank-you" },
];

type TInitial = "starter" | "sub_steps";

const CheckoutHome = () => {
  const [mainStep, setMainStep] = useState<TInitial>("starter");
  const [subSteps, setSubSteps] = useState(StepAssets);

  const starterTrigger = (type: TInitial) => {
    setMainStep(type);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("starter") ?? "{}")?.id) {
      setMainStep("sub_steps");
    }
    const localeItems = JSON.parse(localStorage.getItem('step-assets')??'[]')
    if(localeItems.length > 0){
      setSubSteps(localeItems)
      return
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors />
      <div
        className={cn(
          "bg-background w-full h-dvh grid grid-rows-[5.3rem_1fr] transition-all duration-150",
          mainStep === "sub_steps" ? ` gap-8` : `gap-0`
        )}
      >
        {mainStep === "sub_steps" ? <Stepper items={subSteps} /> : <div />}
        <div className="h-max grid grid-cols-2 gap-10 pb-1 container">
          {mainStep === "sub_steps" ? (
            <div className="pr-32">
              <SubStepSection
                items={subSteps}
                setSubSteps={setSubSteps}
                starterTrigger={() => starterTrigger("starter")}
              />
            </div>
          ) : (
            <StarterSection
              starterTrigger={() => starterTrigger("sub_steps")}
            />
          )}
          <DetailCard />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default CheckoutHome;
