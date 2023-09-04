"use client";
import { Slider } from "@/components/ui/slider";

import { useFilterState } from "@/store/usefilterStore";

export default function SliderComponent() {
  const { setFilter, price } = useFilterState();
  const PriceTrack = (value: number[]) => {
    setFilter("price", String(value[0]));
  };
  return (
    <>
      <span>Max Price</span>
      <Slider
        defaultValue={[100]}
        max={250}
        step={1}
        onValueChange={PriceTrack}
      />
      <span>${price || 100}</span>
    </>
  );
}
