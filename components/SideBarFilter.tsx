"use client";
import { sideBarFilterProps } from "@/types/component";
import { useFilterState } from "@/store/usefilterStore";

export default function SideBarFilter({
  FilterElements,
}: {
  FilterElements: sideBarFilterProps;
}) {
  const { setFilter } = useFilterState();

  const ChangeHandler = (event: any) => {
    setFilter(event.target.dataset.filtername, event.target.checked);
  };
  return (
    <>
      <h2>{FilterElements.name}</h2>
      {FilterElements.filterElements.map((element, idx) => {
        const count = FilterElements.count[idx];

        return (
          <>
            <ul className="">
              <li key={element} className="flex gap-1">
                <div>
                  <input
                    type="checkbox"
                    data-filtername={
                      FilterElements.name === "CAPACITY"
                        ? "c" + element
                        : element
                    }
                    onChange={ChangeHandler}
                    className="scale-125 opacity-25"
                  />
                </div>
                <span>{element}</span>
                <span>{`(${count})`}</span>
              </li>
            </ul>
          </>
        );
      })}
    </>
  );
}
