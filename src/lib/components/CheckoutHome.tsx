// import { Button } from "@/lib/ui";
import DetailCard from "./DetailCard";
import StarterSection from "./StarterSection";
import SubStepSection from "./sub_steps";
import Stepper, { type StepItems } from "../ui/Stepper";
import { useEffect, useState } from "react";
import { cn } from "../ui/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// type CheckHomeProps = {
//   hideButton?: boolean;
// };

const queryClient = new QueryClient();

export const StepAssets: StepItems[] = [
  { title: "Transport", status: "wait" },
  { title: "Pickup", status: "wait" },
  { title: "Delivery", status: "wait" },
  { title: "Book shipment", status: "wait" },
  { title: "Thank you", status: "wait" },
];

type TInitial = "starter" | "sub_steps";

const CheckoutHome = () => {
  const [mainStep, setMainStep] = useState<TInitial>("starter");

  const starterTrigger = (type: TInitial) => {
    setMainStep(type);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("starter") ?? "{}")?.id) {
      setMainStep("sub_steps");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={cn(
          "bg-background w-full h-dvh grid grid-rows-[5.3rem_1fr] transition-all duration-150",
          mainStep === "sub_steps" ? ` gap-8` : `gap-0`
        )}
      >
        {mainStep === "sub_steps" ? <Stepper items={StepAssets} /> : <div />}
        <div className="h-max grid grid-cols-2 gap-10 pb-1 container">
          {mainStep === "sub_steps" ? (
            <div className="pr-32">
              <SubStepSection starterTrigger={() => starterTrigger("starter")} />
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
