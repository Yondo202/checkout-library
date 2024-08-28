import { Label, Button, Input, RadioGroup, RadioGroupItem } from "@/lib/ui";
import { MoveRight } from "lucide-react";

const TransportInfo = ({}) => {
  return (
    <>
      <div className="space-y-2">
        <div className="font-medium">You are</div>
        <RadioGroup defaultValue="option-one" className="space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-1">
        <Label className="mb-20">Option Two</Label>
        <Input placeholder="placeholder" />
      </div>
      <div className="space-y-1">
        <Label className="mb-20">Option Two</Label>
        <Input placeholder="placeholder" />
      </div>
      <div className="space-y-1">
        <Label className="mb-20">Option Two</Label>
        <Input placeholder="placeholder" />
      </div>
      <div className="space-y-1">
        <Label className="mb-20">Option Two</Label>
        <Input placeholder="placeholder" />
      </div>
      <Button size="lg" className="gap-3 w-full h-12">
        Pickup Info
        <MoveRight strokeWidth={1.5} />
      </Button>
    </>
  );
};

export default TransportInfo;
