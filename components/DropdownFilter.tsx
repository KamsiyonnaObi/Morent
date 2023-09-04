"use client";
import { useFilterState } from "@/store/usefilterStore";
import { FilterProps } from "@/types/component";
import Image from "next/image";

const DropdownFilter = ({ filterTitle, filterElements }: FilterProps) => {
  const { setFilter } = useFilterState();

  const ChangeHandler = (event: any) => {
    setFilter("location", event.target.value);
  };
  return (
    <div className="flex grow flex-col gap-3 dark:text-white">
      <div className="inline-flex gap-2">
        <Image src={"/Mark.svg"} width="20" height="20" alt={"mark"} />
        <label>{filterTitle}</label>
      </div>
      <select
        className="grow rounded-md p-4 dark:bg-gray-800"
        onChange={ChangeHandler}
      >
        <option value="">{filterTitle}</option>
        {filterElements.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
