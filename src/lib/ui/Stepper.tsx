// import React from 'react'

import { cn } from "./utils";

// { title: "Pickup", status: "wait" },
// { title: "Delivery", status: "wait" },
// { title: "Book shipment", status: "wait" },
// { title: "Thank you", status: "wait" },
export type StepItems = {
  title?: "Transport" | "Pickup" | "Delivery" | "Book shipment" | "Thank you";
  status?: "wait" | "process" | "finsih"; // | 'error'
};

type StepperProps = {
  items: StepItems[];
};
// animate-zero-to-height
const Stepper = ({ items }: StepperProps) => {
  return (
    <div className="bg-card animate-zero-to-height overflow-hidden flex items-center">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="h-0 border-b border-dashed border-muted-foreground w-full absolute left-0 top-1/3 z-10" />
          {items?.map((item, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col space-y-2 max-w-48 last:bg-card last:relative last:z-20"
                )}
              >
                <button className="h-10 w-10 border border-dashed border-muted-foreground rounded-full font-semibold bg-card relative z-20">
                  0{index + 1}
                </button>
                <span className="text-xs">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
