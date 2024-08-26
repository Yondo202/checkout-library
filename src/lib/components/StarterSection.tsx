import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const StarterSection = () => {
  return (
    <div className="border rounded-md p-7 space-y-5">
      <div className="border border-l-4 p-4 py-2 text-muted-foreground leading-8 border-muted-foreground">
        Your quote has been e-mailed to you. <br /> Ready to book? Hooray!{" "}
        <span className="text-card-foreground font-semibold">
          NO PAYMENT REQUIRED
        </span>{" "}
        to book your shipment.
      </div>

      <div className="flex justify-between items-center pb-5 border-b">
        <div className="flex items-center gap-5">
          <span className="text-muted-foreground text-xs">Service type:</span>
          <span className="text-xs font-semibold">Door to door</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-muted-foreground text-xs">Incurance:</span>
          <span className="text-xs font-semibold">Included</span>
        </div>
      </div>

      <RadioGroup defaultValue="option-one" className="space-y-3 py-2">
        <Label
          htmlFor="option-one"
          className="relative flex items-center gap-6 p-4"
        >
          <RadioGroupItem className="peer" value="option-one" id="option-one" />
          <div className="absolute top-0 left-0 w-full h-full border border-muted-foreground/20 peer-aria-checked:border-muted-foreground" />
          <div className="pr-6">
            <div className="text-lg mb-2 font-semibold">Regular price</div>
            <div className="text-xs font-light">
              Once the order is assigned to a carrier, onetime payment in full
              by using your credit card or. debit card will be
            </div>
          </div>
          <div className="text-xl font-semibold">$749</div>
        </Label>

        <Label
          htmlFor="option-two"
          className="relative flex items-center gap-6 p-4"
        >
          <RadioGroupItem className="peer" value="option-two" id="option-two" />
          <div className="absolute top-0 left-0 w-full h-full border border-muted-foreground/20 peer-aria-checked:border-muted-foreground" />
          <div className="pr-6">
            <div className="text-lg mb-2 font-semibold">
              Discounted cash price
            </div>
            <div className="text-xs font-light">
              Once the order is assigned to a carrier, a partial payment will be
              charged, the balance will be. due in cash on delivery.
            </div>
          </div>
          <div className="text-xl font-semibold">$729</div>
        </Label>
      </RadioGroup>
      <Button size="lg" className="gap-3 w-full h-12">
        Continue To Booking Details <MoveRight strokeWidth={1.5} />
      </Button>

      <div className="text-xs font-light text-muted-foreground">
        Don't know the exact day? That's ok! You can change at any time. You
        will be still able to review your order.
        <br />
        - OR -
        <br /> 
        Book with one of our friendly Customer Service Agents!
        <br /> <br />
        833-644-0386
      </div>
    </div>
  );
};

export default StarterSection;
