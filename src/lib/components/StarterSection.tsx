import { RadioGroup, RadioGroupItem, Label, Button } from "@/lib/ui";
import { MoveRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/utils/request";
import { useEffect, useState } from "react";

type TPricing = {
  title: string;
  description: string;
  cost: number;
};

export type TResSkull<T> = { id: number; attributes: T };

type TResponse<TData> = { data?: TResSkull<TData>[] };

const StarterSection = ({ starterTrigger }: { starterTrigger: () => void }) => {
  const [value, setValue] = useState<TResSkull<TPricing>>();

  const { data, isLoading } = useQuery<TResponse<TPricing>>({
    queryKey: ["starter-pricing"],
    queryFn: () =>
      request({
        mainUrl: `http://localhost:1337/api/pricings`,
        method: "get",
      }),
  });

  const setLocaleStorage = (localedata?: TResSkull<TPricing>) => {
    localStorage.setItem("starter", JSON.stringify(localedata));
  };

  useEffect(() => {
    if (localStorage.getItem("starter") === (null && undefined && "string")) {
      setValue(data?.data?.[0])
      return
    }
    setValue(JSON.parse(localStorage.getItem("starter") ?? "{}"))
  }, []);

  // const setDefault = () => {
  //   if (localStorage.getItem("starter") === (null && undefined && "string")) {
  //     // setLocaleStorage(data?.data?.[0]);
  //     return data?.data?.[0]?.id?.toString();
  //   }
  //   return (
  //     JSON.parse(localStorage.getItem("starter") ?? "{}")?.id?.toString() ?? ""
  //   );
  // };

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

      {!isLoading && (
        <RadioGroup
          value={value?.id?.toString()}
          // defaultValue={setDefault()}
          onValueChange={(event) => {
            const found = data?.data?.find(
              (item) => item.id?.toString() === event
            );
            setValue(found);
          }}
          className="space-y-3 py-2"
        >
          {data?.data?.map((item, index) => {
            return (
              <Label
                key={index}
                htmlFor={item.id?.toString()}
                className="relative flex items-center gap-6 p-4"
              >
                <RadioGroupItem
                  className="peer"
                  value={item.id?.toString()}
                  id={item.id?.toString()}
                />
                <div className="absolute top-0 left-0 w-full h-full border border-muted-foreground/20 peer-aria-checked:border-muted-foreground" />
                <div className="pr-6">
                  <div className="text-lg mb-2 font-semibold">
                    {item.attributes?.title} price
                  </div>
                  <div className="text-xs font-light">
                    Once the order is assigned to a carrier, onetime payment in
                    full by using your credit card or. debit card will be
                  </div>
                </div>
                <div className="text-xl font-semibold">
                  ${item.attributes?.cost}
                </div>
              </Label>
            );
          })}
        </RadioGroup>
      )}

      <Button
        onClick={() => (starterTrigger(), setLocaleStorage(value))}
        size="lg"
        className="gap-3 w-full h-12"
      >
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
