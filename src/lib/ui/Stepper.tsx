// import React from 'react'

import { cn } from "./utils";

export type StepItems = {
  title?: string;
  status?: "wait" | "process" | "finsih"; // | 'error'
};

type StepperProps = {
  items: StepItems[];
};

const Stepper = ({ items }: StepperProps) => {
  return (
    <div className="flex items-start justify-between py-2 relative">
      <div className="h-0 border-b border-dashed border-muted-foreground w-full absolute left-0 top-1/3 z-10" />
      {items?.map((item, index) => {
        return (
          <div key={index} className={cn("flex flex-col space-y-2 max-w-48 last:bg-background last:relative last:z-20")}>
            <button className="h-11 w-11 border border-dashed border-muted-foreground rounded-full font-semibold bg-card relative z-20">
              0{index + 1}
            </button>
            <span className="text-xs">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
