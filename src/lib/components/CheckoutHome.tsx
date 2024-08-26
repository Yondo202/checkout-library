// import { Button } from "@/lib/ui";
import DetailCard from "./DetailCard";
import StarterSection from "./StarterSection";
import Stepper, { type StepItems } from "../ui/Stepper";
// type CheckHomeProps = {
//   hideButton?: boolean;
// };

const Items: StepItems[] = [
  { title: "Transport", status: "wait" },
  { title: "Pickup", status: "wait" },
  { title: "Delivery", status: "wait" },
  { title: "Book shipment", status: "wait" },
  { title: "Thank you", status: "wait" },
];

const CheckoutHome = () => {
  return (
    <div className="bg-background h-dvh w-full container mx-auto">
      <Stepper items={Items} />
      <div className="h-full grid grid-cols-2 gap-6 py-24">
        <StarterSection />
        <DetailCard />
      </div>
    </div>
  );
};

export default CheckoutHome;
